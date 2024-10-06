export enum ModGlobal {
    Key = 'Key-module_key__kchQI',
    AMZTracker = 'apstag',
    GTracker = 'googletag',
    StatsContainer = 'BotLink-module_botLink__uRdNy',
    BotLink = 'Stats-module_botLink__Gf9gC',
    SubLink = 'AppHeader-module_subscribeLink__VBUGi',
    WelcomeScreen = 'Welcome-module_contentWelcome__TL17B',
    PlayButton = 'Welcome-module_button__ZG0Zh[data-testid="Play"]',
    GameCheck = 'MomentSystem-module_moment__G9hyw',

    NYTBar = 'AppHeader-module_toolbar__menu__MIxIr',

    SettingsButton = 'settings-button',
    StatisticsButton = 'stats-button',
    HelpButton = 'help-button',
    Ads = 'ad-top'
}

export function getFElement(cn: string) {
    return document.querySelector("." + cn);
}

export function getAElements(cn: string) {
    return document.getElementsByClassName(cn);
}

export function getIElement(cn: string) {
    console.log(document.querySelector("#"+cn), cn);
    return document.querySelector("#"+cn);
}
