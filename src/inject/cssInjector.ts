import logger from "../mods/logger";

export default (cssJSON) => {
    if(!cssJSON.css) {
        new logger.Logger(logger.LogLevels.error).log('ERR WPF-9MY');
        return;
    }
    let fullCSS = cssJSON.css
    let newStyle = document.createElement('style')
    newStyle.innerHTML = `/* ${cssJSON.name} by ${cssJSON.author} */\n` + fullCSS;
    newStyle.id = 'wpp-style'
    try {
        document.body.appendChild(newStyle)
        new logger.Logger(logger.LogLevels.success).log('CSS injected successfully!')
    } catch (er) {
        new logger.Logger(logger.LogLevels.error).log('ERR WPF-3mY: ' + er)
    }
}