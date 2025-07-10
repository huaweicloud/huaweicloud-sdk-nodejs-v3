import { AccessControl } from './AccessControl';
import { BrowserCacheRulesEngine } from './BrowserCacheRulesEngine';
import { CacheRulesEngine } from './CacheRulesEngine';
import { ErrorCodeCacheEngine } from './ErrorCodeCacheEngine';
import { FlexibleOriginsEngine } from './FlexibleOriginsEngine';
import { HttpResponseHeader } from './HttpResponseHeader';
import { OriginRequestHeader } from './OriginRequestHeader';
import { OriginRequestUrlRewriteEngine } from './OriginRequestUrlRewriteEngine';
import { RequestLimitRulesEngine } from './RequestLimitRulesEngine';
import { RequestUrlRewriteEngine } from './RequestUrlRewriteEngine';


export class Actions {
    private 'flexible_origin'?: Array<FlexibleOriginsEngine>;
    private 'origin_request_header'?: Array<OriginRequestHeader>;
    private 'http_response_header'?: Array<HttpResponseHeader>;
    private 'access_control'?: AccessControl;
    private 'request_limit_rules'?: RequestLimitRulesEngine;
    private 'origin_request_url_rewrite'?: OriginRequestUrlRewriteEngine;
    private 'cache_rule'?: CacheRulesEngine;
    private 'request_url_rewrite'?: RequestUrlRewriteEngine;
    private 'browser_cache_rule'?: BrowserCacheRulesEngine;
    private 'error_code_cache'?: ErrorCodeCacheEngine;
    public constructor() { 
    }
    public withFlexibleOrigin(flexibleOrigin: Array<FlexibleOriginsEngine>): Actions {
        this['flexible_origin'] = flexibleOrigin;
        return this;
    }
    public set flexibleOrigin(flexibleOrigin: Array<FlexibleOriginsEngine>  | undefined) {
        this['flexible_origin'] = flexibleOrigin;
    }
    public get flexibleOrigin(): Array<FlexibleOriginsEngine> | undefined {
        return this['flexible_origin'];
    }
    public withOriginRequestHeader(originRequestHeader: Array<OriginRequestHeader>): Actions {
        this['origin_request_header'] = originRequestHeader;
        return this;
    }
    public set originRequestHeader(originRequestHeader: Array<OriginRequestHeader>  | undefined) {
        this['origin_request_header'] = originRequestHeader;
    }
    public get originRequestHeader(): Array<OriginRequestHeader> | undefined {
        return this['origin_request_header'];
    }
    public withHttpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>): Actions {
        this['http_response_header'] = httpResponseHeader;
        return this;
    }
    public set httpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>  | undefined) {
        this['http_response_header'] = httpResponseHeader;
    }
    public get httpResponseHeader(): Array<HttpResponseHeader> | undefined {
        return this['http_response_header'];
    }
    public withAccessControl(accessControl: AccessControl): Actions {
        this['access_control'] = accessControl;
        return this;
    }
    public set accessControl(accessControl: AccessControl  | undefined) {
        this['access_control'] = accessControl;
    }
    public get accessControl(): AccessControl | undefined {
        return this['access_control'];
    }
    public withRequestLimitRules(requestLimitRules: RequestLimitRulesEngine): Actions {
        this['request_limit_rules'] = requestLimitRules;
        return this;
    }
    public set requestLimitRules(requestLimitRules: RequestLimitRulesEngine  | undefined) {
        this['request_limit_rules'] = requestLimitRules;
    }
    public get requestLimitRules(): RequestLimitRulesEngine | undefined {
        return this['request_limit_rules'];
    }
    public withOriginRequestUrlRewrite(originRequestUrlRewrite: OriginRequestUrlRewriteEngine): Actions {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
        return this;
    }
    public set originRequestUrlRewrite(originRequestUrlRewrite: OriginRequestUrlRewriteEngine  | undefined) {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
    }
    public get originRequestUrlRewrite(): OriginRequestUrlRewriteEngine | undefined {
        return this['origin_request_url_rewrite'];
    }
    public withCacheRule(cacheRule: CacheRulesEngine): Actions {
        this['cache_rule'] = cacheRule;
        return this;
    }
    public set cacheRule(cacheRule: CacheRulesEngine  | undefined) {
        this['cache_rule'] = cacheRule;
    }
    public get cacheRule(): CacheRulesEngine | undefined {
        return this['cache_rule'];
    }
    public withRequestUrlRewrite(requestUrlRewrite: RequestUrlRewriteEngine): Actions {
        this['request_url_rewrite'] = requestUrlRewrite;
        return this;
    }
    public set requestUrlRewrite(requestUrlRewrite: RequestUrlRewriteEngine  | undefined) {
        this['request_url_rewrite'] = requestUrlRewrite;
    }
    public get requestUrlRewrite(): RequestUrlRewriteEngine | undefined {
        return this['request_url_rewrite'];
    }
    public withBrowserCacheRule(browserCacheRule: BrowserCacheRulesEngine): Actions {
        this['browser_cache_rule'] = browserCacheRule;
        return this;
    }
    public set browserCacheRule(browserCacheRule: BrowserCacheRulesEngine  | undefined) {
        this['browser_cache_rule'] = browserCacheRule;
    }
    public get browserCacheRule(): BrowserCacheRulesEngine | undefined {
        return this['browser_cache_rule'];
    }
    public withErrorCodeCache(errorCodeCache: ErrorCodeCacheEngine): Actions {
        this['error_code_cache'] = errorCodeCache;
        return this;
    }
    public set errorCodeCache(errorCodeCache: ErrorCodeCacheEngine  | undefined) {
        this['error_code_cache'] = errorCodeCache;
    }
    public get errorCodeCache(): ErrorCodeCacheEngine | undefined {
        return this['error_code_cache'];
    }
}