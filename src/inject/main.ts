import logger from "../mods/logger";
import { getFElement } from "../mods/ModGlobal";
import removeAbsentLetters from "../mods/removeAbsentLetters";
import removeSubscribeLink from "../mods/removeSubscribeLink";
import removeStatsShare from "../mods/removeStatsShare";
import trackerRemoval from "../mods/trackerRemoval";
import { WPPGlobal } from "../WPPGlobal";
import cssInjector from "./cssInjector";
import jsInjector from "./jsInjector";
import welcome from "./welcome";
import removeWelcomeScreen from "../mods/removeWelcomeScreen";

export default {
    css: cssInjector,
    js: jsInjector,
    aio: function (css, js, wpt) {
        if(document.getElementById('wpp-script') || document.getElementById('wpp-style')) {
            throw new Error("W++ has been injected already. Cannot continue. ERR WPI-2fY");
        }

        if(document.getElementsByClassName('Welcome-module_title__uhLqe')[1]) {
            (document.getElementsByClassName('Welcome-module_button__ZG0Zh')[0] as HTMLElement).click();
        }

        new logger.Logger(logger.LogLevels.init).log('Removing ads, trackers & pre-inject initialization.')
        trackerRemoval();
        removeWelcomeScreen();
        document.title = 'Wordle - Modded w/ W++'
        document.getElementById('settings-button').onclick = () => {
            setTimeout(() => {
                getFElement('Modal-module_heading__u2uxI').innerHTML = 'w++ & wordle settings'
                let g = document.createElement('h1')
                g.className = 'Modal-module_heading__u2uxI'
                g.innerText = 'using w++ v'+WPPGlobal.Version
                let g1 = document.createElement('h1')
                g1.className = 'Modal-module_heading__u2uxI'
                g1.innerText = `${js.name} by ${js.author}`
                getFElement('Modal-module_content__TrPIX').appendChild(g)
                getFElement('Modal-module_content__TrPIX').appendChild(g1)
            }, 20)
        }
        document.getElementById('help-button').onclick = () => {
            setTimeout(() => {
                getFElement('Modal-module_heading__u2uxI').innerHTML = 'Welcome to W++!'
                getFElement('Help-module_subheading__mbRG9').innerHTML = welcome
                getFElement('Help-module_examples__W3VXL').remove()
                getFElement('Help-module_statsLogin__HkQec').remove()
                getFElement('Help-module_instructions__uXsG6').remove()
                getFElement('Help-module_reminderSignUp__oQ42D').remove()
                setTimeout(() => {
                    document.getElementById('_sd_cdi').remove();
                },5000)
            }, 20)
        }
        document.getElementById('statistics-button').onclick = () => {
            setTimeout(() => {
                removeStatsShare();
            }, 20);
        }
        document.getElementById('settings-button').click()
        document.getElementById('AppHeader-module_navButton__nKv2h').remove()

        if (!getFElement('Settings-module_footnote__TOUR0')) {
            throw new Error('Auto-inject failed! Open the settings menu, then re-inject.')
        }
        new logger.Logger(logger.LogLevels.init).log('Injecting CSS & JS')
        // last minute fixings
        window['_sentryConfig'] = {};
        window['_sentryConfig']['wppg'] = WPPGlobal;
        window['_sentryConfig']['ralf'] = removeAbsentLetters;

        cssInjector(css)
        jsInjector(js, wpt)
        document.getElementById('help-button').click()
        setTimeout(() => {
            (document.getElementsByClassName('Modal-module_modalOverlay__cdZDa')[0] as HTMLElement).click()
            setTimeout(() => {
                document.getElementById('ad-top') ? document.getElementById('ad-top').remove() : 0;
                document.getElementById('help-button').click() // Bypass stats interfering with welcome
                document.getElementById('help-button').remove()
            },250)
        },1000)

        /**
         * NON-INIT MODS
         * Search tags: NIM N-IM NONINIT MODS MODINIT
         */
        const mods: Array<() => void> = [
            removeSubscribeLink,
        ];

        mods.forEach(mod => {
            mod();
        })
    }
}

