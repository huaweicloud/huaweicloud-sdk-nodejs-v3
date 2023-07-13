import { CacheRules } from './CacheRules';
import { CacheUrlParameterFilter } from './CacheUrlParameterFilter';
import { Compress } from './Compress';
import { ErrorCodeCache } from './ErrorCodeCache';
import { ErrorCodeRedirectRules } from './ErrorCodeRedirectRules';
import { ForceRedirectConfig } from './ForceRedirectConfig';
import { HttpGetBody } from './HttpGetBody';
import { HttpResponseHeader } from './HttpResponseHeader';
import { IpFilter } from './IpFilter';
import { OriginRequestHeader } from './OriginRequestHeader';
import { OriginRequestUrlRewrite } from './OriginRequestUrlRewrite';
import { RefererConfig } from './RefererConfig';
import { SourcesConfig } from './SourcesConfig';
import { UrlAuthGetBody } from './UrlAuthGetBody';
import { UserAgentFilter } from './UserAgentFilter';


export class ConfigsGetBody {
    private 'origin_request_header'?: Array<OriginRequestHeader> | undefined;
    private 'http_response_header'?: Array<HttpResponseHeader> | undefined;
    private 'url_auth'?: UrlAuthGetBody | undefined;
    public https?: HttpGetBody;
    public sources?: Array<SourcesConfig>;
    private 'origin_follow302_status'?: string | undefined;
    private 'cache_rules'?: Array<CacheRules> | undefined;
    private 'ip_filter'?: IpFilter | undefined;
    public referer?: RefererConfig;
    private 'origin_protocol'?: string | undefined;
    private 'force_redirect'?: ForceRedirectConfig | undefined;
    public compress?: Compress;
    private 'cache_url_parameter_filter'?: CacheUrlParameterFilter | undefined;
    private 'ipv6_accelerate'?: number | undefined;
    private 'error_code_cache'?: Array<ErrorCodeCache> | undefined;
    private 'origin_range_status'?: string | undefined;
    private 'user_agent_filter'?: UserAgentFilter | undefined;
    private 'origin_request_url_rewrite'?: Array<OriginRequestUrlRewrite> | undefined;
    private 'error_code_redirect_rules'?: Array<ErrorCodeRedirectRules> | undefined;
    public constructor() { 
    }
    public withOriginRequestHeader(originRequestHeader: Array<OriginRequestHeader>): ConfigsGetBody {
        this['origin_request_header'] = originRequestHeader;
        return this;
    }
    public set originRequestHeader(originRequestHeader: Array<OriginRequestHeader> | undefined) {
        this['origin_request_header'] = originRequestHeader;
    }
    public get originRequestHeader() {
        return this['origin_request_header'];
    }
    public withHttpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>): ConfigsGetBody {
        this['http_response_header'] = httpResponseHeader;
        return this;
    }
    public set httpResponseHeader(httpResponseHeader: Array<HttpResponseHeader> | undefined) {
        this['http_response_header'] = httpResponseHeader;
    }
    public get httpResponseHeader() {
        return this['http_response_header'];
    }
    public withUrlAuth(urlAuth: UrlAuthGetBody): ConfigsGetBody {
        this['url_auth'] = urlAuth;
        return this;
    }
    public set urlAuth(urlAuth: UrlAuthGetBody | undefined) {
        this['url_auth'] = urlAuth;
    }
    public get urlAuth() {
        return this['url_auth'];
    }
    public withHttps(https: HttpGetBody): ConfigsGetBody {
        this['https'] = https;
        return this;
    }
    public withSources(sources: Array<SourcesConfig>): ConfigsGetBody {
        this['sources'] = sources;
        return this;
    }
    public withOriginFollow302Status(originFollow302Status: string): ConfigsGetBody {
        this['origin_follow302_status'] = originFollow302Status;
        return this;
    }
    public set originFollow302Status(originFollow302Status: string | undefined) {
        this['origin_follow302_status'] = originFollow302Status;
    }
    public get originFollow302Status() {
        return this['origin_follow302_status'];
    }
    public withCacheRules(cacheRules: Array<CacheRules>): ConfigsGetBody {
        this['cache_rules'] = cacheRules;
        return this;
    }
    public set cacheRules(cacheRules: Array<CacheRules> | undefined) {
        this['cache_rules'] = cacheRules;
    }
    public get cacheRules() {
        return this['cache_rules'];
    }
    public withIpFilter(ipFilter: IpFilter): ConfigsGetBody {
        this['ip_filter'] = ipFilter;
        return this;
    }
    public set ipFilter(ipFilter: IpFilter | undefined) {
        this['ip_filter'] = ipFilter;
    }
    public get ipFilter() {
        return this['ip_filter'];
    }
    public withReferer(referer: RefererConfig): ConfigsGetBody {
        this['referer'] = referer;
        return this;
    }
    public withOriginProtocol(originProtocol: string): ConfigsGetBody {
        this['origin_protocol'] = originProtocol;
        return this;
    }
    public set originProtocol(originProtocol: string | undefined) {
        this['origin_protocol'] = originProtocol;
    }
    public get originProtocol() {
        return this['origin_protocol'];
    }
    public withForceRedirect(forceRedirect: ForceRedirectConfig): ConfigsGetBody {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: ForceRedirectConfig | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect() {
        return this['force_redirect'];
    }
    public withCompress(compress: Compress): ConfigsGetBody {
        this['compress'] = compress;
        return this;
    }
    public withCacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilter): ConfigsGetBody {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
        return this;
    }
    public set cacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilter | undefined) {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
    }
    public get cacheUrlParameterFilter() {
        return this['cache_url_parameter_filter'];
    }
    public withIpv6Accelerate(ipv6Accelerate: number): ConfigsGetBody {
        this['ipv6_accelerate'] = ipv6Accelerate;
        return this;
    }
    public set ipv6Accelerate(ipv6Accelerate: number | undefined) {
        this['ipv6_accelerate'] = ipv6Accelerate;
    }
    public get ipv6Accelerate() {
        return this['ipv6_accelerate'];
    }
    public withErrorCodeCache(errorCodeCache: Array<ErrorCodeCache>): ConfigsGetBody {
        this['error_code_cache'] = errorCodeCache;
        return this;
    }
    public set errorCodeCache(errorCodeCache: Array<ErrorCodeCache> | undefined) {
        this['error_code_cache'] = errorCodeCache;
    }
    public get errorCodeCache() {
        return this['error_code_cache'];
    }
    public withOriginRangeStatus(originRangeStatus: string): ConfigsGetBody {
        this['origin_range_status'] = originRangeStatus;
        return this;
    }
    public set originRangeStatus(originRangeStatus: string | undefined) {
        this['origin_range_status'] = originRangeStatus;
    }
    public get originRangeStatus() {
        return this['origin_range_status'];
    }
    public withUserAgentFilter(userAgentFilter: UserAgentFilter): ConfigsGetBody {
        this['user_agent_filter'] = userAgentFilter;
        return this;
    }
    public set userAgentFilter(userAgentFilter: UserAgentFilter | undefined) {
        this['user_agent_filter'] = userAgentFilter;
    }
    public get userAgentFilter() {
        return this['user_agent_filter'];
    }
    public withOriginRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite>): ConfigsGetBody {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
        return this;
    }
    public set originRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite> | undefined) {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
    }
    public get originRequestUrlRewrite() {
        return this['origin_request_url_rewrite'];
    }
    public withErrorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules>): ConfigsGetBody {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
        return this;
    }
    public set errorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules> | undefined) {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
    }
    public get errorCodeRedirectRules() {
        return this['error_code_redirect_rules'];
    }
}