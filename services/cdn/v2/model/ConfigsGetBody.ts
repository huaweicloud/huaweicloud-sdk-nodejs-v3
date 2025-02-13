import { AccessAreaFilter } from './AccessAreaFilter';
import { BrowserCacheRules } from './BrowserCacheRules';
import { CacheRules } from './CacheRules';
import { CacheUrlParameterFilterGetBody } from './CacheUrlParameterFilterGetBody';
import { ClientCert } from './ClientCert';
import { CommonRemoteAuth } from './CommonRemoteAuth';
import { Compress } from './Compress';
import { ErrorCodeCache } from './ErrorCodeCache';
import { ErrorCodeRedirectRules } from './ErrorCodeRedirectRules';
import { FlexibleOrigins } from './FlexibleOrigins';
import { ForceRedirectConfig } from './ForceRedirectConfig';
import { HstsQuery } from './HstsQuery';
import { HttpGetBody } from './HttpGetBody';
import { HttpResponseHeader } from './HttpResponseHeader';
import { IpFilter } from './IpFilter';
import { IpFrequencyLimitQuery } from './IpFrequencyLimitQuery';
import { OriginRequestHeader } from './OriginRequestHeader';
import { OriginRequestUrlRewrite } from './OriginRequestUrlRewrite';
import { Quic } from './Quic';
import { RefererConfig } from './RefererConfig';
import { RequestLimitRules } from './RequestLimitRules';
import { RequestUrlRewrite } from './RequestUrlRewrite';
import { Sni } from './Sni';
import { SourcesConfigResponseBody } from './SourcesConfigResponseBody';
import { UrlAuthGetBody } from './UrlAuthGetBody';
import { UserAgentFilter } from './UserAgentFilter';
import { VideoSeek } from './VideoSeek';
import { WebSocketSeek } from './WebSocketSeek';


export class ConfigsGetBody {
    private 'business_type'?: string;
    private 'service_area'?: string;
    public remark?: string;
    private 'origin_request_header'?: Array<OriginRequestHeader>;
    private 'http_response_header'?: Array<HttpResponseHeader>;
    private 'url_auth'?: UrlAuthGetBody;
    public https?: HttpGetBody;
    public sources?: Array<SourcesConfigResponseBody>;
    private 'origin_protocol'?: string;
    private 'origin_follow302_status'?: string;
    private 'cache_rules'?: Array<CacheRules>;
    private 'ip_filter'?: IpFilter;
    public referer?: RefererConfig;
    private 'force_redirect'?: ForceRedirectConfig;
    public compress?: Compress;
    private 'cache_url_parameter_filter'?: CacheUrlParameterFilterGetBody;
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
    private 'ip_frequency_limit'?: IpFrequencyLimitQuery;
    public hsts?: HstsQuery;
    public quic?: Quic;
    private 'error_code_redirect_rules'?: Array<ErrorCodeRedirectRules>;
    public sni?: Sni;
    private 'request_url_rewrite'?: Array<RequestUrlRewrite>;
    private 'browser_cache_rules'?: Array<BrowserCacheRules>;
    private 'access_area_filter'?: Array<AccessAreaFilter>;
    private 'client_cert'?: ClientCert;
    public constructor() { 
    }
    public withBusinessType(businessType: string): ConfigsGetBody {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withServiceArea(serviceArea: string): ConfigsGetBody {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withRemark(remark: string): ConfigsGetBody {
        this['remark'] = remark;
        return this;
    }
    public withOriginRequestHeader(originRequestHeader: Array<OriginRequestHeader>): ConfigsGetBody {
        this['origin_request_header'] = originRequestHeader;
        return this;
    }
    public set originRequestHeader(originRequestHeader: Array<OriginRequestHeader>  | undefined) {
        this['origin_request_header'] = originRequestHeader;
    }
    public get originRequestHeader(): Array<OriginRequestHeader> | undefined {
        return this['origin_request_header'];
    }
    public withHttpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>): ConfigsGetBody {
        this['http_response_header'] = httpResponseHeader;
        return this;
    }
    public set httpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>  | undefined) {
        this['http_response_header'] = httpResponseHeader;
    }
    public get httpResponseHeader(): Array<HttpResponseHeader> | undefined {
        return this['http_response_header'];
    }
    public withUrlAuth(urlAuth: UrlAuthGetBody): ConfigsGetBody {
        this['url_auth'] = urlAuth;
        return this;
    }
    public set urlAuth(urlAuth: UrlAuthGetBody  | undefined) {
        this['url_auth'] = urlAuth;
    }
    public get urlAuth(): UrlAuthGetBody | undefined {
        return this['url_auth'];
    }
    public withHttps(https: HttpGetBody): ConfigsGetBody {
        this['https'] = https;
        return this;
    }
    public withSources(sources: Array<SourcesConfigResponseBody>): ConfigsGetBody {
        this['sources'] = sources;
        return this;
    }
    public withOriginProtocol(originProtocol: string): ConfigsGetBody {
        this['origin_protocol'] = originProtocol;
        return this;
    }
    public set originProtocol(originProtocol: string  | undefined) {
        this['origin_protocol'] = originProtocol;
    }
    public get originProtocol(): string | undefined {
        return this['origin_protocol'];
    }
    public withOriginFollow302Status(originFollow302Status: string): ConfigsGetBody {
        this['origin_follow302_status'] = originFollow302Status;
        return this;
    }
    public set originFollow302Status(originFollow302Status: string  | undefined) {
        this['origin_follow302_status'] = originFollow302Status;
    }
    public get originFollow302Status(): string | undefined {
        return this['origin_follow302_status'];
    }
    public withCacheRules(cacheRules: Array<CacheRules>): ConfigsGetBody {
        this['cache_rules'] = cacheRules;
        return this;
    }
    public set cacheRules(cacheRules: Array<CacheRules>  | undefined) {
        this['cache_rules'] = cacheRules;
    }
    public get cacheRules(): Array<CacheRules> | undefined {
        return this['cache_rules'];
    }
    public withIpFilter(ipFilter: IpFilter): ConfigsGetBody {
        this['ip_filter'] = ipFilter;
        return this;
    }
    public set ipFilter(ipFilter: IpFilter  | undefined) {
        this['ip_filter'] = ipFilter;
    }
    public get ipFilter(): IpFilter | undefined {
        return this['ip_filter'];
    }
    public withReferer(referer: RefererConfig): ConfigsGetBody {
        this['referer'] = referer;
        return this;
    }
    public withForceRedirect(forceRedirect: ForceRedirectConfig): ConfigsGetBody {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: ForceRedirectConfig  | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect(): ForceRedirectConfig | undefined {
        return this['force_redirect'];
    }
    public withCompress(compress: Compress): ConfigsGetBody {
        this['compress'] = compress;
        return this;
    }
    public withCacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilterGetBody): ConfigsGetBody {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
        return this;
    }
    public set cacheUrlParameterFilter(cacheUrlParameterFilter: CacheUrlParameterFilterGetBody  | undefined) {
        this['cache_url_parameter_filter'] = cacheUrlParameterFilter;
    }
    public get cacheUrlParameterFilter(): CacheUrlParameterFilterGetBody | undefined {
        return this['cache_url_parameter_filter'];
    }
    public withIpv6Accelerate(ipv6Accelerate: number): ConfigsGetBody {
        this['ipv6_accelerate'] = ipv6Accelerate;
        return this;
    }
    public set ipv6Accelerate(ipv6Accelerate: number  | undefined) {
        this['ipv6_accelerate'] = ipv6Accelerate;
    }
    public get ipv6Accelerate(): number | undefined {
        return this['ipv6_accelerate'];
    }
    public withErrorCodeCache(errorCodeCache: Array<ErrorCodeCache>): ConfigsGetBody {
        this['error_code_cache'] = errorCodeCache;
        return this;
    }
    public set errorCodeCache(errorCodeCache: Array<ErrorCodeCache>  | undefined) {
        this['error_code_cache'] = errorCodeCache;
    }
    public get errorCodeCache(): Array<ErrorCodeCache> | undefined {
        return this['error_code_cache'];
    }
    public withOriginRangeStatus(originRangeStatus: string): ConfigsGetBody {
        this['origin_range_status'] = originRangeStatus;
        return this;
    }
    public set originRangeStatus(originRangeStatus: string  | undefined) {
        this['origin_range_status'] = originRangeStatus;
    }
    public get originRangeStatus(): string | undefined {
        return this['origin_range_status'];
    }
    public withUserAgentFilter(userAgentFilter: UserAgentFilter): ConfigsGetBody {
        this['user_agent_filter'] = userAgentFilter;
        return this;
    }
    public set userAgentFilter(userAgentFilter: UserAgentFilter  | undefined) {
        this['user_agent_filter'] = userAgentFilter;
    }
    public get userAgentFilter(): UserAgentFilter | undefined {
        return this['user_agent_filter'];
    }
    public withOriginRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite>): ConfigsGetBody {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
        return this;
    }
    public set originRequestUrlRewrite(originRequestUrlRewrite: Array<OriginRequestUrlRewrite>  | undefined) {
        this['origin_request_url_rewrite'] = originRequestUrlRewrite;
    }
    public get originRequestUrlRewrite(): Array<OriginRequestUrlRewrite> | undefined {
        return this['origin_request_url_rewrite'];
    }
    public withFlexibleOrigin(flexibleOrigin: Array<FlexibleOrigins>): ConfigsGetBody {
        this['flexible_origin'] = flexibleOrigin;
        return this;
    }
    public set flexibleOrigin(flexibleOrigin: Array<FlexibleOrigins>  | undefined) {
        this['flexible_origin'] = flexibleOrigin;
    }
    public get flexibleOrigin(): Array<FlexibleOrigins> | undefined {
        return this['flexible_origin'];
    }
    public withSliceEtagStatus(sliceEtagStatus: string): ConfigsGetBody {
        this['slice_etag_status'] = sliceEtagStatus;
        return this;
    }
    public set sliceEtagStatus(sliceEtagStatus: string  | undefined) {
        this['slice_etag_status'] = sliceEtagStatus;
    }
    public get sliceEtagStatus(): string | undefined {
        return this['slice_etag_status'];
    }
    public withOriginReceiveTimeout(originReceiveTimeout: number): ConfigsGetBody {
        this['origin_receive_timeout'] = originReceiveTimeout;
        return this;
    }
    public set originReceiveTimeout(originReceiveTimeout: number  | undefined) {
        this['origin_receive_timeout'] = originReceiveTimeout;
    }
    public get originReceiveTimeout(): number | undefined {
        return this['origin_receive_timeout'];
    }
    public withRemoteAuth(remoteAuth: CommonRemoteAuth): ConfigsGetBody {
        this['remote_auth'] = remoteAuth;
        return this;
    }
    public set remoteAuth(remoteAuth: CommonRemoteAuth  | undefined) {
        this['remote_auth'] = remoteAuth;
    }
    public get remoteAuth(): CommonRemoteAuth | undefined {
        return this['remote_auth'];
    }
    public withWebsocket(websocket: WebSocketSeek): ConfigsGetBody {
        this['websocket'] = websocket;
        return this;
    }
    public withVideoSeek(videoSeek: VideoSeek): ConfigsGetBody {
        this['video_seek'] = videoSeek;
        return this;
    }
    public set videoSeek(videoSeek: VideoSeek  | undefined) {
        this['video_seek'] = videoSeek;
    }
    public get videoSeek(): VideoSeek | undefined {
        return this['video_seek'];
    }
    public withRequestLimitRules(requestLimitRules: Array<RequestLimitRules>): ConfigsGetBody {
        this['request_limit_rules'] = requestLimitRules;
        return this;
    }
    public set requestLimitRules(requestLimitRules: Array<RequestLimitRules>  | undefined) {
        this['request_limit_rules'] = requestLimitRules;
    }
    public get requestLimitRules(): Array<RequestLimitRules> | undefined {
        return this['request_limit_rules'];
    }
    public withIpFrequencyLimit(ipFrequencyLimit: IpFrequencyLimitQuery): ConfigsGetBody {
        this['ip_frequency_limit'] = ipFrequencyLimit;
        return this;
    }
    public set ipFrequencyLimit(ipFrequencyLimit: IpFrequencyLimitQuery  | undefined) {
        this['ip_frequency_limit'] = ipFrequencyLimit;
    }
    public get ipFrequencyLimit(): IpFrequencyLimitQuery | undefined {
        return this['ip_frequency_limit'];
    }
    public withHsts(hsts: HstsQuery): ConfigsGetBody {
        this['hsts'] = hsts;
        return this;
    }
    public withQuic(quic: Quic): ConfigsGetBody {
        this['quic'] = quic;
        return this;
    }
    public withErrorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules>): ConfigsGetBody {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
        return this;
    }
    public set errorCodeRedirectRules(errorCodeRedirectRules: Array<ErrorCodeRedirectRules>  | undefined) {
        this['error_code_redirect_rules'] = errorCodeRedirectRules;
    }
    public get errorCodeRedirectRules(): Array<ErrorCodeRedirectRules> | undefined {
        return this['error_code_redirect_rules'];
    }
    public withSni(sni: Sni): ConfigsGetBody {
        this['sni'] = sni;
        return this;
    }
    public withRequestUrlRewrite(requestUrlRewrite: Array<RequestUrlRewrite>): ConfigsGetBody {
        this['request_url_rewrite'] = requestUrlRewrite;
        return this;
    }
    public set requestUrlRewrite(requestUrlRewrite: Array<RequestUrlRewrite>  | undefined) {
        this['request_url_rewrite'] = requestUrlRewrite;
    }
    public get requestUrlRewrite(): Array<RequestUrlRewrite> | undefined {
        return this['request_url_rewrite'];
    }
    public withBrowserCacheRules(browserCacheRules: Array<BrowserCacheRules>): ConfigsGetBody {
        this['browser_cache_rules'] = browserCacheRules;
        return this;
    }
    public set browserCacheRules(browserCacheRules: Array<BrowserCacheRules>  | undefined) {
        this['browser_cache_rules'] = browserCacheRules;
    }
    public get browserCacheRules(): Array<BrowserCacheRules> | undefined {
        return this['browser_cache_rules'];
    }
    public withAccessAreaFilter(accessAreaFilter: Array<AccessAreaFilter>): ConfigsGetBody {
        this['access_area_filter'] = accessAreaFilter;
        return this;
    }
    public set accessAreaFilter(accessAreaFilter: Array<AccessAreaFilter>  | undefined) {
        this['access_area_filter'] = accessAreaFilter;
    }
    public get accessAreaFilter(): Array<AccessAreaFilter> | undefined {
        return this['access_area_filter'];
    }
    public withClientCert(clientCert: ClientCert): ConfigsGetBody {
        this['client_cert'] = clientCert;
        return this;
    }
    public set clientCert(clientCert: ClientCert  | undefined) {
        this['client_cert'] = clientCert;
    }
    public get clientCert(): ClientCert | undefined {
        return this['client_cert'];
    }
}