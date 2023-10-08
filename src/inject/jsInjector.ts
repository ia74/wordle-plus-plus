import logger from "../mods/logger";
import removeAbsentLetters from "../mods/removeAbsentLetters";
import { WPPGlobal } from "../WPPGlobal";

export default (jsJSON, wpt = null) => {
    
    if(!jsJSON.js) {
        new logger.Logger(logger.LogLevels.error).log('ERR WPF-8MY');
        return;
    }
    let fullJS = jsJSON.js
    fullJS = fullJS.replace(/w_header/g, 'document.getElementsByClassName(\''+WPPGlobal.Header+'\')[0]')
    fullJS = fullJS.replace(/w_bkb/g, 'document.getElementsByClassName(\''+WPPGlobal.BelowKeyboard+'\')[0]')
    fullJS = fullJS.replace(/console.log\(/g, 'console.log(\'[' + jsJSON.name + '] \'+')
    for (let i = 0; i < 30; i++) {
        fullJS = fullJS.replace(new RegExp('w_tile_' + i, 'g'), 'document.getElementsByClassName(\''+WPPGlobal.Tile+'\')[' + i + ']')
    }
    fullJS = fullJS.replace(/doUseRAL/g, 'window._sentryConfig.ralf')

    let newJS = document.createElement('script')
    newJS.innerHTML = `/* W++ code */ document.getElementsByClassName('${WPPGlobal.Header}')[0].innerHTML = '${wpt ? wpt : '(ERR WPT01)'}'; \n` + fullJS;
    newJS.id = 'wpp-script'
    
    new logger.Logger(logger.LogLevels.init).log('JS injecting...')
    try {
        document.body.appendChild(newJS)
        new logger.Logger(logger.LogLevels.success).log('JS injected!')
    } catch (er) {
        new logger.Logger(logger.LogLevels.error).log('ERR WPF-4MY: '+er)
    }
}