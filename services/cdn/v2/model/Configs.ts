import { BrowserCacheRules } from './BrowserCacheRules';
import { CacheRules } from './CacheRules';
import { CacheUrlParameterFilter } from './CacheUrlParameterFilter';
import { CommonRemoteAuth } from './CommonRemoteAuth';
import { Compress } from './Compress';
import { ErrorCodeCache } from './ErrorCodeCache';
import { ErrorCodeRedirectRules } from './ErrorCodeRedirectRules';
import { FlexibleOrigins } from './FlexibleOrigins';
import { ForceRedirectConfig } from './ForceRedirectConfig';
import { Hsts } from './Hsts';
import { HttpPutBody } from './HttpPutBody';
import { HttpResponseHeader } from './HttpResponseHeader';
import { IpFilter } from './IpFilter';
import { IpFrequencyLimit } from './IpFrequencyLimit';
import { OriginRequestHeader } from './OriginRequestHeader';
import { OriginRequestUrlRewrite } from './OriginRequestUrlRewrite';
import { Quic } from './Quic';
import { RefererConfig } from './RefererConfig';
import { RequestLimitRules } from './RequestLimitRules';
import { RequestUrlRewrite } from './RequestUrlRewrite';
import { Sni } from './Sni';
import { SourcesConfig } from './SourcesConfig';
import { UrlAuth } from './UrlAuth';
import { UserAgentFilter } from './UserAgentFilter';
import { VideoSeek } from './VideoSeek';
import { WebSocketSeek } from './WebSocketSeek';


export class Configs {
    private 'business_type'?: string;
    private 'service_area'?: string;
    public remark?: string;
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
    private 'flexible_origin'?: Array<FlexibleOrigins>;
    private 'slice_etag_status'?: string;
    private 'origin_receive_timeout'?: number;
    private 'remote_auth'?: CommonRemoteAuth;
    public websocket?: WebSocketSeek;
    private 'video_seek'?: VideoSeek;
    private 'request_limit_rules'?: Array<RequestLimitRules>;
    private 'ip_frequency_limit'?: IpFrequencyLimit;
    public hsts?: Hsts;
    public quic?: Quic;
    private 'error_code_redirect_rules'?: Array<ErrorCodeRedirectRules>;
    public sni?: Sni;
    private 'request_url_rewrite'?: Array<RequestUrlRewrite>;
    private 'browser_cache_rules'?: Array<BrowserCacheRules>;
    public constructor() { 
    }
    public withBusinessType(businessType: string): Configs {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withServiceArea(serviceArea: string): Configs {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withRemark(remark: string): Configs {
        this['remark'] = remark;
        return this;
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
    public withFlexibleOrigin(flexibleOrigin: Array<FlexibleOrigins>): Configs {
        this['flexible_origin'] = flexibleOrigin;
        return this;
    }
    public set flexibleOrigin(flexibleOrigin: Array<FlexibleOrigins>  | undefined) {
        this['flexible_origin'] = flexibleOrigin;
    }
    public get flexibleOrigin(): Array<FlexibleOrigins> | undefined {
        return this['flexible_origin'];
    }
    public withSliceEtagStatus(sliceEtagStatus: string): Configs {
        this['slice_etag_status'] = sliceEtagStatus;
        return this;
    }
    public set sliceEtagStatus(sliceEtagStatus: string  | undefined) {
        this['slice_etag_status'] = sliceEtagStatus;
    }
    public get sliceEtagStatus(): string | undefined {
        return this['slice_etag_status'];
    }
    public withOriginReceiveTimeout(originReceiveTimeout: number): Configs {
        this['origin_receive_timeout'] = originReceiveTimeout;
        return this;
    }
    public set originReceiveTimeout(originReceiveTimeout: number  | undefined) {
        this['origin_receive_timeout'] = originReceiveTimeout;
    }
    public get originReceiveTimeout(): number | undefined {
        return this['origin_receive_timeout'];
    }
    public withRemoteAuth(remoteAuth: CommonRemoteAuth): Configs {
        this['remote_auth'] = remoteAuth;
        return this;
    }
    public set remoteAuth(remoteAuth: CommonRemoteAuth  | undefined) {
        this['remote_auth'] = remoteAuth;
    }
    public get remoteAuth(): CommonRemoteAuth | undefined {
        return this['remote_auth'];
    }
    public withWebsocket(websocket: WebSocketSeek): Configs {
        this['websocket'] = websocket;
        return this;
    }
    public withVideoSeek(videoSeek: VideoSeek): Configs {
        this['video_seek'] = videoSeek;
        return this;
    }
    public set videoSeek(videoSeek: VideoSeek  | undefined) {
        this['video_seek'] = videoSeek;
    }
    public get videoSeek(): VideoSeek | undefined {
        return this['video_seek'];
    }
    public withRequestLimitRules(requestLimitRules: Array<RequestLimitRules>): Configs {
        this['request_limit_rules'] = requestLimitRules;
        return this;
    }
    public set requestLimitRules(requestLimitRules: Array<RequestLimitRules>  | undefined) {
        this['request_limit_rules'] = requestLimitRules;
    }
    public get requestLimitRules(): Array<RequestLimitRules> | undefined {
        return this['request_limit_rules'];
    }
    public withIpFrequencyLimit(ipFrequencyLimit: IpFrequencyLimit): Configs {
        this['ip_frequency_limit'] = ipFrequencyLimit;
        return this;
    }
    public set ipFrequencyLimit(ipFrequencyLimit: IpFrequencyLimit  | undefined) {
        this['ip_frequency_limit'] = ipFrequencyLimit;
    }
    public get ipFrequencyLimit(): IpFrequencyLimit | undefined {
        return this['ip_frequency_limit'];
    }
    public withHsts(hsts: Hsts): Configs {
        this['hsts'] = hsts;
        return this;
    }
    public withQuic(quic: Quic): Configs {
        this['quic'] = quic;
        return this;
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
    public withSni(sni: Sni): Configs {
        this['sni'] = sni;
        return this;
    }
    public withRequestUrlRewrite(requestUrlRewrite: Array<RequestUrlRewrite>): Configs {
        this['request_url_rewrite'] = requestUrlRewrite;
        return this;
    }
    public set requestUrlRewrite(requestUrlRewrite: Array<RequestUrlRewrite>  | undefined) {
        this['request_url_rewrite'] = requestUrlRewrite;
    }
    public get requestUrlRewrite(): Array<RequestUrlRewrite> | undefined {
        return this['request_url_rewrite'];
    }
    public withBrowserCacheRules(browserCacheRules: Array<BrowserCacheRules>): Configs {
        this['browser_cache_rules'] = browserCacheRules;
        return this;
    }
    public set browserCacheRules(browserCacheRules: Array<BrowserCacheRules>  | undefined) {
        this['browser_cache_rules'] = browserCacheRules;
    }
    public get browserCacheRules(): Array<BrowserCacheRules> | undefined {
        return this['browser_cache_rules'];
    }
}