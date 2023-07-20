import { CacheRules } from './CacheRules';
import { CacheUrlParameterFilter } from './CacheUrlParameterFilter';
import { Compress } from './Compress';
import { ErrorCodeCache } from './ErrorCodeCache';
import { ErrorCodeRedirectRules } from './ErrorCodeRedirectRules';
import { ForceRedirectConfig } from './ForceRedirectConfig';
import { HttpPutBody } from './HttpPutBody';
import { HttpResponseHeader } from './HttpResponseHeader';
import { IpFilter } from './IpFilter';
import { OriginRequestHeader } from './OriginRequestHeader';
import { OriginRequestUrlRewrite } from './OriginRequestUrlRewrite';
import { RefererConfig } from './RefererConfig';
import { SourcesConfig } from './SourcesConfig';
import { UrlAuth } from './UrlAuth';
import { UserAgentFilter } from './UserAgentFilter';


export class Configs {
    private 'origin_request_header'?: Array<OriginRequestHeader>;
    private 'http_response_header'?: Array<HttpResponseHeader>;
    private 'url_auth'?: UrlAuth;
    public https?: HttpPutBody;
    public sources?: Array<SourcesConfig>;
    private 'origin_protocol'?: string;
    private 'origin_follow302_status'?: string;
    private 'cache_rules'?: Array<CacheRules>;
    private 'ip_filter'?: IpFilter;
    public referer?: RefererConfig;
    private 'force_redirect'?: ForceRedirectConfig;
    public compress?: Compress;
    private 'cache_url_parameter_filter'?: CacheUrlParameterFilter;
    private 'ipv6_accelerate'?: number;
    private 'error_code_cache'?: Array<ErrorCodeCache>;
    private 'origin_range_status'?: string;
    private 'user_agent_filter'?: UserAgentFilter;
    private 'origin_request_url_rewrite'?: Array<OriginRequestUrlRewrite>;
    private 'error_code_redirect_rules'?: Array<ErrorCodeRedirectRules>;
    public constructor() { 
    }
    public withOriginRequestHeader(originRequestHeader: Array<OriginRequestHeader>): Configs {
        this['origin_request_header'] = originRequestHeader;
        return this;
    }
    public set originRequestHeader(originRequestHeader: Array<OriginRequestHeader>  | undefined) {
        this['origin_request_header'] = originRequestHeader;
    }
    public get originRequestHeader(): Array<OriginRequestHeader> | undefined {
        return this['origin_request_header'];
    }
    public withHttpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>): Configs {
        this['http_response_header'] = httpResponseHeader;
        return this;
    }
    public set httpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>  | undefined) {
        this['http_response_header'] = httpResponseHeader;
    }
    public get httpResponseHeader(): Array<HttpResponseHeader> | undefined {
        return this['http_response_header'];
    }
    public withUrlAuth(urlAuth: UrlAuth): Configs {
        this['url_auth'] = urlAuth;
        return this;
    }
    public set urlAuth(urlAuth: UrlAuth  | undefined) {
        this['url_auth'] = urlAuth;
    }
    public get urlAuth(): UrlAuth | undefined {
        return this['url_auth'];
    }
    public withHttps(https: HttpPutBody): Configs {
        this['https'] = https;
        return this;
    }
    public withSources(sources: Array<SourcesConfig>): Configs {
        this['sources'] = sources;
        return this;
    }
    public withOriginProtocol(originProtocol: string): Configs {
        this['origin_protocol'] = originProtocol;
        return this;
    }
    public set originProtocol(originProtocol: string  | undefined) {
        this['origin_protocol'] = originProtocol;
    }
    public get originProtocol(): string | undefined {
        return this['origin_protocol'];
    }
    public withOriginFollow302Status(originFollow302Status: string): Configs {
        this['origin_follow302_status'] = originFollow302Status;
        return this;
    }
    public set originFollow302Status(originFollow302Status: string  | undefined) {
        this['origin_follow302_status'] = originFollow302Status;
    }
    public get originFollow302Status(): string | undefined {
        return this['origin_follow302_status'];
    }
    public withCacheRules(cacheRules: Array<CacheRules>): Configs {
        this['cache_rules'] = cacheRules;
        return this;
    }
    public set cacheRules(cacheRules: Array<CacheRules>  | undefined) {
        this['cache_rules'] = cacheRules;
    }
    public get cacheRules(): Array<CacheRules> | undefined {
        return this['cache_rules'];
    }
    public withIpFilter(ipFilter: IpFilter): Configs {
        this['ip_filter'] = ipFilter;
        return this;
    }
    public set ipFilter(ipFilter: IpFilter  | undefined) {
        this['ip_filter'] = ipFilter;
    }
    public get ipFilter(): IpFilter | undefined {
        return this['ip_filter'];
    }
    public withReferer(referer: RefererConfig): Configs {
        this['referer'] = referer;
        return this;
    }
    public withForceRedirect(forceRedirect: ForceRedirectConfig): Configs {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: ForceRedirectConfig  | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect(): ForceRedirectConfig | undefined {
        return this['force_redirect'];
    }
    public withCompress(compress: Compress): Configs {
        this['compress'] = compress;
        return this;
    }
    public withCacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilter): Configs {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
        return this;
    }
    public set cacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilter  | undefined) {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
    }
    public get cacheUrlParameterFilter(): CacheUrlParameterFilter | undefined {
        return this['cache_url_parameter_filter'];
    }
    public withIpv6Accelerate(ipv6Accelerate: number): Configs {
        this['ipv6_accelerate'] = ipv6Accelerate;
        return this;
    }
    public set ipv6Accelerate(ipv6Accelerate: number  | undefined) {
        this['ipv6_accelerate'] = ipv6Accelerate;
    }
    public get ipv6Accelerate(): number | undefined {
        return this['ipv6_accelerate'];
    }
    public withErrorCodeCache(errorCodeCache: Array<ErrorCodeCache>): Configs {
        this['error_code_cache'] = errorCodeCache;
        return this;
    }
    public set errorCodeCache(errorCodeCache: Array<ErrorCodeCache>  | undefined) {
        this['error_code_cache'] = errorCodeCache;
    }
    public get errorCodeCache(): Array<ErrorCodeCache> | undefined {
        return this['error_code_cache'];
    }
    public withOriginRangeStatus(originRangeStatus: string): Configs {
        this['origin_range_status'] = originRangeStatus;
        return this;
    }
    public set originRangeStatus(originRangeStatus: string  | undefined) {
        this['origin_range_status'] = originRangeStatus;
    }
    public get originRangeStatus(): string | undefined {
        return this['origin_range_status'];
    }
    public withUserAgentFilter(userAgentFilter: UserAgentFilter): Configs {
        this['user_agent_filter'] = userAgentFilter;
        return this;
    }
    public set userAgentFilter(userAgentFilter: UserAgentFilter  | undefined) {
        this['user_agent_filter'] = userAgentFilter;
    }
    public get userAgentFilter(): UserAgentFilter | undefined {
        return this['user_agent_filter'];
    }
    public withOriginRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite>): Configs {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
        return this;
    }
    public set originRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite>  | undefined) {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
    }
    public get originRequestUrlRewrite(): Array<OriginRequestUrlRewrite> | undefined {
        return this['origin_request_url_rewrite'];
    }
    public withErrorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules>): Configs {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
        return this;
    }
    public set errorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules>  | undefined) {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
    }
    public get errorCodeRedirectRules(): Array<ErrorCodeRedirectRules> | undefined {
        return this['error_code_redirect_rules'];
    }
}