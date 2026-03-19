

export class ListEventRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListEventRequestXLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    public recent?: ListEventRequestRecentEnum | string;
    public from?: number;
    public to?: number;
    public ids?: Array<string>;
    public nids?: Array<string>;
    public attacks?: Array<ListEventRequestAttacksEnum> | Array<string>;
    public nattacks?: Array<ListEventRequestNattacksEnum> | Array<string>;
    public rules?: Array<string>;
    public nrules?: Array<string>;
    public sips?: Array<string>;
    public nsips?: Array<string>;
    public sip?: string;
    public urls?: Array<string>;
    public nurls?: Array<string>;
    public url?: string;
    public actions?: Array<ListEventRequestActionsEnum> | Array<string>;
    public nactions?: Array<ListEventRequestNactionsEnum> | Array<string>;
    public domain?: string;
    public ndomain?: string;
    public domains?: Array<string>;
    private 'ip_countries'?: Array<string>;
    private 'nip_countries'?: Array<string>;
    private 'ip_regions'?: Array<string>;
    private 'nip_regions'?: Array<string>;
    private 'response_codes'?: Array<string>;
    public payload?: string;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public page?: number;
    public pagesize?: number;
    private 'sort_key'?: ListEventRequestSortKeyEnum | string;
    private 'sort_direction'?: ListEventRequestSortDirectionEnum | string;
    private 'query_mode'?: ListEventRequestQueryModeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListEventRequestXLanguageEnum | string): ListEventRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEventRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEventRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRecent(recent: ListEventRequestRecentEnum | string): ListEventRequest {
        this['recent'] = recent;
        return this;
    }
    public withFrom(from: number): ListEventRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListEventRequest {
        this['to'] = to;
        return this;
    }
    public withIds(ids: Array<string>): ListEventRequest {
        this['ids'] = ids;
        return this;
    }
    public withNids(nids: Array<string>): ListEventRequest {
        this['nids'] = nids;
        return this;
    }
    public withAttacks(attacks: Array<ListEventRequestAttacksEnum> | Array<string>): ListEventRequest {
        this['attacks'] = attacks;
        return this;
    }
    public withNattacks(nattacks: Array<ListEventRequestNattacksEnum> | Array<string>): ListEventRequest {
        this['nattacks'] = nattacks;
        return this;
    }
    public withRules(rules: Array<string>): ListEventRequest {
        this['rules'] = rules;
        return this;
    }
    public withNrules(nrules: Array<string>): ListEventRequest {
        this['nrules'] = nrules;
        return this;
    }
    public withSips(sips: Array<string>): ListEventRequest {
        this['sips'] = sips;
        return this;
    }
    public withNsips(nsips: Array<string>): ListEventRequest {
        this['nsips'] = nsips;
        return this;
    }
    public withSip(sip: string): ListEventRequest {
        this['sip'] = sip;
        return this;
    }
    public withUrls(urls: Array<string>): ListEventRequest {
        this['urls'] = urls;
        return this;
    }
    public withNurls(nurls: Array<string>): ListEventRequest {
        this['nurls'] = nurls;
        return this;
    }
    public withUrl(url: string): ListEventRequest {
        this['url'] = url;
        return this;
    }
    public withActions(actions: Array<ListEventRequestActionsEnum> | Array<string>): ListEventRequest {
        this['actions'] = actions;
        return this;
    }
    public withNactions(nactions: Array<ListEventRequestNactionsEnum> | Array<string>): ListEventRequest {
        this['nactions'] = nactions;
        return this;
    }
    public withDomain(domain: string): ListEventRequest {
        this['domain'] = domain;
        return this;
    }
    public withNdomain(ndomain: string): ListEventRequest {
        this['ndomain'] = ndomain;
        return this;
    }
    public withDomains(domains: Array<string>): ListEventRequest {
        this['domains'] = domains;
        return this;
    }
    public withIpCountries(ipCountries: Array<string>): ListEventRequest {
        this['ip_countries'] = ipCountries;
        return this;
    }
    public set ipCountries(ipCountries: Array<string>  | undefined) {
        this['ip_countries'] = ipCountries;
    }
    public get ipCountries(): Array<string> | undefined {
        return this['ip_countries'];
    }
    public withNipCountries(nipCountries: Array<string>): ListEventRequest {
        this['nip_countries'] = nipCountries;
        return this;
    }
    public set nipCountries(nipCountries: Array<string>  | undefined) {
        this['nip_countries'] = nipCountries;
    }
    public get nipCountries(): Array<string> | undefined {
        return this['nip_countries'];
    }
    public withIpRegions(ipRegions: Array<string>): ListEventRequest {
        this['ip_regions'] = ipRegions;
        return this;
    }
    public set ipRegions(ipRegions: Array<string>  | undefined) {
        this['ip_regions'] = ipRegions;
    }
    public get ipRegions(): Array<string> | undefined {
        return this['ip_regions'];
    }
    public withNipRegions(nipRegions: Array<string>): ListEventRequest {
        this['nip_regions'] = nipRegions;
        return this;
    }
    public set nipRegions(nipRegions: Array<string>  | undefined) {
        this['nip_regions'] = nipRegions;
    }
    public get nipRegions(): Array<string> | undefined {
        return this['nip_regions'];
    }
    public withResponseCodes(responseCodes: Array<string>): ListEventRequest {
        this['response_codes'] = responseCodes;
        return this;
    }
    public set responseCodes(responseCodes: Array<string>  | undefined) {
        this['response_codes'] = responseCodes;
    }
    public get responseCodes(): Array<string> | undefined {
        return this['response_codes'];
    }
    public withPayload(payload: string): ListEventRequest {
        this['payload'] = payload;
        return this;
    }
    public withHosts(hosts: Array<string>): ListEventRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListEventRequest {
        this['instances'] = instances;
        return this;
    }
    public withPage(page: number): ListEventRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListEventRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withSortKey(sortKey: ListEventRequestSortKeyEnum | string): ListEventRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEventRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListEventRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDirection(sortDirection: ListEventRequestSortDirectionEnum | string): ListEventRequest {
        this['sort_direction'] = sortDirection;
        return this;
    }
    public set sortDirection(sortDirection: ListEventRequestSortDirectionEnum | string  | undefined) {
        this['sort_direction'] = sortDirection;
    }
    public get sortDirection(): ListEventRequestSortDirectionEnum | string | undefined {
        return this['sort_direction'];
    }
    public withQueryMode(queryMode: ListEventRequestQueryModeEnum | string): ListEventRequest {
        this['query_mode'] = queryMode;
        return this;
    }
    public set queryMode(queryMode: ListEventRequestQueryModeEnum | string  | undefined) {
        this['query_mode'] = queryMode;
    }
    public get queryMode(): ListEventRequestQueryModeEnum | string | undefined {
        return this['query_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestRecentEnum {
    YESTERDAY = 'yesterday',
    TODAY = 'today',
    E_3DAYS = '3days',
    E_1WEEK = '1week',
    E_1MONTH = '1month'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestAttacksEnum {
    XSS = 'xss',
    BOTM = 'botm',
    WEBSHELL = 'webshell',
    VULN = 'vuln',
    SQLI = 'sqli',
    ROBOT = 'robot',
    RFI = 'rfi',
    RCE = 'rce',
    PTR = 'ptr',
    LFI = 'lfi',
    ANTILEAKAGE = 'antileakage',
    IPRANK = 'iprank',
    CUSTOM_WHITEBLACKIP = 'custom_whiteblackip',
    CUSTOM_WHITEIP = 'custom_whiteip',
    CUSTOM_BLACKIP = 'custom_blackip',
    CUSTOM_ROBOT = 'custom_robot',
    CUSTOM_GEOIP = 'custom_geoip',
    CUSTOM_IDC_IP = 'custom_idc_ip',
    CUSTOM_CUSTOM = 'custom_custom',
    CMDI = 'cmdi',
    CC = 'cc',
    ANTITAMPER = 'antitamper',
    ANTICRAWLER = 'anticrawler',
    THIRD_BOT_RIVER = 'third_bot_river',
    ANTISCAN_HIGH_FREQ_SCAN = 'antiscan_high_freq_scan',
    ANTISCAN_DIR_TRAVERSAL = 'antiscan_dir_traversal',
    ILLEGAL = 'illegal',
    FOLLOWED_ACTION = 'followed_action',
    ADVANCED_BOT = 'advanced_bot',
    LLM_PROMPT_INJECTION = 'llm_prompt_injection',
    LLM_PROMPT_SENSITIVE = 'llm_prompt_sensitive',
    LLM_RESPONSE_SENSITIVE = 'llm_response_sensitive'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestNattacksEnum {
    XSS = 'xss',
    BOTM = 'botm',
    WEBSHELL = 'webshell',
    VULN = 'vuln',
    SQLI = 'sqli',
    ROBOT = 'robot',
    RFI = 'rfi',
    RCE = 'rce',
    PTR = 'ptr',
    LFI = 'lfi',
    ANTILEAKAGE = 'antileakage',
    IPRANK = 'iprank',
    CUSTOM_WHITEBLACKIP = 'custom_whiteblackip',
    CUSTOM_WHITEIP = 'custom_whiteip',
    CUSTOM_BLACKIP = 'custom_blackip',
    CUSTOM_ROBOT = 'custom_robot',
    CUSTOM_GEOIP = 'custom_geoip',
    CUSTOM_IDC_IP = 'custom_idc_ip',
    CUSTOM_CUSTOM = 'custom_custom',
    CMDI = 'cmdi',
    CC = 'cc',
    ANTITAMPER = 'antitamper',
    ANTICRAWLER = 'anticrawler',
    THIRD_BOT_RIVER = 'third_bot_river',
    ANTISCAN_HIGH_FREQ_SCAN = 'antiscan_high_freq_scan',
    ANTISCAN_DIR_TRAVERSAL = 'antiscan_dir_traversal',
    ILLEGAL = 'illegal',
    FOLLOWED_ACTION = 'followed_action',
    ADVANCED_BOT = 'advanced_bot',
    LLM_PROMPT_INJECTION = 'llm_prompt_injection',
    LLM_PROMPT_SENSITIVE = 'llm_prompt_sensitive',
    LLM_RESPONSE_SENSITIVE = 'llm_response_sensitive'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestActionsEnum {
    BLOCK = 'block',
    PASS = 'pass',
    LOG = 'log',
    CAPTCHA = 'captcha',
    CACHE = 'cache',
    MASK = 'mask',
    JS_CHALLENGE = 'js_challenge',
    ADVANCED_CAPTCHA = 'advanced_captcha',
    ABORT_RESPONSE = 'abort_response',
    DESENSITIZE = 'desensitize'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestNactionsEnum {
    BLOCK = 'block',
    PASS = 'pass',
    LOG = 'log',
    CAPTCHA = 'captcha',
    CACHE = 'cache',
    MASK = 'mask',
    JS_CHALLENGE = 'js_challenge',
    ADVANCED_CAPTCHA = 'advanced_captcha',
    ABORT_RESPONSE = 'abort_response',
    DESENSITIZE = 'desensitize'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestSortKeyEnum {
    ATTACK_TIME = 'attack_time',
    SORT_IP = 'sort_ip',
    HOST = 'host',
    GEO_STR = 'geo_str',
    COMPONENT = 'component',
    RULE = 'rule',
    ATTACK = 'attack'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestSortDirectionEnum {
    DESC = 'desc',
    ASC = 'asc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestQueryModeEnum {
    EQUAL = 'equal',
    INCLUDE = 'include'
}
