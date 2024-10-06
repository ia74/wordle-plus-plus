import logger from "../mods/logger";
import {getFElement, getIElement, ModGlobal} from "../mods/ModGlobal";
import removeAbsentLetters from "../mods/removeAbsentLetters";
import removeSubscribeLink from "../mods/removeSubscribeLink";
import removeStatsShare from "../mods/removeStatsShare";
import trackerRemoval from "../mods/trackerRemoval";
import { WPPGlobal } from "../WPPGlobal";
import cssInjector from "./cssInjector";
import jsInjector from "./jsInjector";
import welcome from "./welcome";
import removeWelcomeScreen from "../mods/removeWelcomeScreen";
import autoAnswerButton from "../mods/autoAnswerButton";

export default {
    css: cssInjector,
    js: jsInjector,
    aio: function (css, js, wpt) {
        if(document.getElementById('wpp-script') || document.getElementById('wpp-style')) {
            throw new Error("W++ has been injected already. Cannot continue. ERR WPI-2fY");
        }

        if (!getFElement(ModGlobal.GameCheck)) {
            alert('W++: You\'re not even on Wordle!');
            throw new Error("We're not even on Wordle!!");
        }

        removeWelcomeScreen();

        new logger.Logger(logger.LogLevels.init).log('Removing ads, trackers & pre-inject initialization.')
        trackerRemoval();
        getIElement(ModGlobal.Ads) != null ? getIElement(ModGlobal.Ads).remove() : 0;
        document.title = 'Wordle - Modded w/ W++';
        // getIElement(ModGlobal.NYTBar).remove()

        if (!getFElement('Settings-module_footnote__TOUR0')) {
            throw new Error('Auto-inject failed! Open the settings menu, then re-inject.')
        }
        new logger.Logger(logger.LogLevels.init).log('Injecting CSS & JS')
        // last minute fixings
        window['_sentryConfig'] = {};
        window['_sentryConfig']['wppg'] = WPPGlobal;
        window['_sentryConfig']['ralf'] = removeAbsentLetters;

        cssInjector(css);
        jsInjector(js, wpt);

        (getIElement(ModGlobal.SettingsButton) as HTMLButtonElement).click()
        setTimeout(() => {
            (document.getElementsByClassName('Modal-module_modalOverlay__cdZDa')[0] as HTMLElement).click()
            setTimeout(() => {
                getIElement(ModGlobal.Ads).remove();
                (getIElement(ModGlobal.HelpButton) as HTMLButtonElement).click(); // Bypass stats interfering with welcome
                (getIElement(ModGlobal.HelpButton) as HTMLButtonElement).remove();
            },250);
            
            (getIElement(ModGlobal.SettingsButton) as HTMLButtonElement).onclick = () => {
                setTimeout(() => {
                    getFElement('Modal-module_heading__u2uxI').innerHTML = 'w++ & wordle settings'
                    let g = document.createElement('h1')
                    g.className = 'Modal-module_heading__u2uxI'
                    g.innerText = 'powered by w++ v'+WPPGlobal.Version
                    let g1 = document.createElement('h1')
                    g1.className = 'Modal-module_heading__u2uxI'
                    g1.innerText = `${js.name} by ${js.author}`
                    getFElement('Modal-module_content__TrPIX').appendChild(g)
                    getFElement('Modal-module_content__TrPIX').appendChild(g1)
                }, 20)
            }
            (getIElement(ModGlobal.HelpButton) as HTMLButtonElement).onclick = () => {
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
            (getIElement(ModGlobal.StatisticsButton) as HTMLButtonElement).onclick = () => {
                setTimeout(() => {
                    removeStatsShare();
                }, 20);
            }
            (getIElement(ModGlobal.SettingsButton) as HTMLButtonElement).click()
            
        },200)

        /**
         * NON-INIT MODS
         * Search tags: NIM N-IM NONINIT MODS MODINIT
         */
        const mods: Array<() => void> = [
            removeSubscribeLink,
            autoAnswerButton
        ];

        mods.forEach(mod => {
            mod();
        })
    }
}

