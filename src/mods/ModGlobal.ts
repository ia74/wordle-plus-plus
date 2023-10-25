export enum ModGlobal {
    Key = 'Key-module_key__kchQI',
    AMZTracker = 'apstag',
    GTracker = 'googletag',
    StatsContainer = 'Stats-module_ctaContainer__1Krdy',
    BotLink = 'Stats-module_botLink__Gf9gC',
    SubLink = 'AppHeader-module_subscribeLink__VBUGi',
    WelcomeScreen = 'Welcome-module_contentWelcome__TL17B',
    PlayButton = 'Welcome-module_button__ZG0Zh',
    GameCheck = 'MomentSystem-module_moment__G9hyw',

    NYTBar = 'AppHeader-module_navButton__nKv2h',

    SettingsButton = 'settings-button',
    Ads = 'ad-top'
}

export function getFElement(cn: string) {
    return document.getElementsByClassName(cn)[0];
}

export function getAElements(cn: string) {
    return document.getElementsByClassName(cn);
}

export function getIElement(cn: string) {
    return document.getElementById(cn);
}
