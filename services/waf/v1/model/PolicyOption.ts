

export class PolicyOption {
    public webattack?: boolean;
    public common?: boolean;
    public crawler?: boolean;
    private 'crawler_engine'?: boolean | undefined;
    private 'crawler_scanner'?: boolean | undefined;
    private 'crawler_script'?: boolean | undefined;
    private 'crawler_other'?: boolean | undefined;
    public webshell?: boolean;
    public cc?: boolean;
    public custom?: boolean;
    public whiteblackip?: boolean;
    public geoip?: boolean;
    public ignore?: boolean;
    public privacy?: boolean;
    public antitamper?: boolean;
    public antileakage?: boolean;
    private 'bot_enable'?: boolean | undefined;
    private 'modulex_enabled'?: boolean | undefined;
    public constructor() { 
    }
    public withWebattack(webattack: boolean): PolicyOption {
        this['webattack'] = webattack;
        return this;
    }
    public withCommon(common: boolean): PolicyOption {
        this['common'] = common;
        return this;
    }
    public withCrawler(crawler: boolean): PolicyOption {
        this['crawler'] = crawler;
        return this;
    }
    public withCrawlerEngine(crawlerEngine: boolean): PolicyOption {
        this['crawler_engine'] = crawlerEngine;
        return this;
    }
    public set crawlerEngine(crawlerEngine: boolean | undefined) {
        this['crawler_engine'] = crawlerEngine;
    }
    public get crawlerEngine() {
        return this['crawler_engine'];
    }
    public withCrawlerScanner(crawlerScanner: boolean): PolicyOption {
        this['crawler_scanner'] = crawlerScanner;
        return this;
    }
    public set crawlerScanner(crawlerScanner: boolean | undefined) {
        this['crawler_scanner'] = crawlerScanner;
    }
    public get crawlerScanner() {
        return this['crawler_scanner'];
    }
    public withCrawlerScript(crawlerScript: boolean): PolicyOption {
        this['crawler_script'] = crawlerScript;
        return this;
    }
    public set crawlerScript(crawlerScript: boolean | undefined) {
        this['crawler_script'] = crawlerScript;
    }
    public get crawlerScript() {
        return this['crawler_script'];
    }
    public withCrawlerOther(crawlerOther: boolean): PolicyOption {
        this['crawler_other'] = crawlerOther;
        return this;
    }
    public set crawlerOther(crawlerOther: boolean | undefined) {
        this['crawler_other'] = crawlerOther;
    }
    public get crawlerOther() {
        return this['crawler_other'];
    }
    public withWebshell(webshell: boolean): PolicyOption {
        this['webshell'] = webshell;
        return this;
    }
    public withCc(cc: boolean): PolicyOption {
        this['cc'] = cc;
        return this;
    }
    public withCustom(custom: boolean): PolicyOption {
        this['custom'] = custom;
        return this;
    }
    public withWhiteblackip(whiteblackip: boolean): PolicyOption {
        this['whiteblackip'] = whiteblackip;
        return this;
    }
    public withGeoip(geoip: boolean): PolicyOption {
        this['geoip'] = geoip;
        return this;
    }
    public withIgnore(ignore: boolean): PolicyOption {
        this['ignore'] = ignore;
        return this;
    }
    public withPrivacy(privacy: boolean): PolicyOption {
        this['privacy'] = privacy;
        return this;
    }
    public withAntitamper(antitamper: boolean): PolicyOption {
        this['antitamper'] = antitamper;
        return this;
    }
    public withAntileakage(antileakage: boolean): PolicyOption {
        this['antileakage'] = antileakage;
        return this;
    }
    public withBotEnable(botEnable: boolean): PolicyOption {
        this['bot_enable'] = botEnable;
        return this;
    }
    public set botEnable(botEnable: boolean | undefined) {
        this['bot_enable'] = botEnable;
    }
    public get botEnable() {
        return this['bot_enable'];
    }
    public withModulexEnabled(modulexEnabled: boolean): PolicyOption {
        this['modulex_enabled'] = modulexEnabled;
        return this;
    }
    public set modulexEnabled(modulexEnabled: boolean | undefined) {
        this['modulex_enabled'] = modulexEnabled;
    }
    public get modulexEnabled() {
        return this['modulex_enabled'];
    }
}