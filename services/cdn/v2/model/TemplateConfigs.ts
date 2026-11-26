import { AccessAreaFilter } from './AccessAreaFilter';
import { CacheRules } from './CacheRules';
import { Compress } from './Compress';
import { FlowLimitStrategy } from './FlowLimitStrategy';
import { ForceRedirectConfig } from './ForceRedirectConfig';
import { HttpResponseHeader } from './HttpResponseHeader';
import { HttpTemplateBody } from './HttpTemplateBody';
import { HttpsTlsVersion } from './HttpsTlsVersion';
import { IpFilter } from './IpFilter';
import { OriginRequestHeader } from './OriginRequestHeader';
import { Quic } from './Quic';
import { RefererConfig } from './RefererConfig';
import { RuleResponse } from './RuleResponse';
import { UrlAuth } from './UrlAuth';
import { UserAgentFilter } from './UserAgentFilter';


export class TemplateConfigs {
    private 'http_response_header'?: Array<HttpResponseHeader>;
    private 'cache_rules'?: Array<CacheRules>;
    private 'origin_follow302_status'?: string;
    public compress?: Compress;
    private 'origin_range_status'?: string;
    private 'ip_filter'?: IpFilter;
    public referer?: RefererConfig;
    private 'user_agent_filter'?: UserAgentFilter;
    private 'flow_limit_strategy'?: Array<FlowLimitStrategy>;
    private 'origin_request_header'?: Array<OriginRequestHeader>;
    public https?: HttpTemplateBody;
    public quic?: Quic;
    private 'force_redirect'?: ForceRedirectConfig;
    private 'https_tls_version'?: HttpsTlsVersion;
    private 'access_area_filter'?: Array<AccessAreaFilter>;
    private 'url_auth'?: UrlAuth;
    public rules?: Array<RuleResponse>;
    public constructor() { 
    }
    public withHttpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>): TemplateConfigs {
        this['http_response_header'] = httpResponseHeader;
        return this;
    }
    public set httpResponseHeader(httpResponseHeader: Array<HttpResponseHeader>  | undefined) {
        this['http_response_header'] = httpResponseHeader;
    }
    public get httpResponseHeader(): Array<HttpResponseHeader> | undefined {
        return this['http_response_header'];
    }
    public withCacheRules(cacheRules: Array<CacheRules>): TemplateConfigs {
        this['cache_rules'] = cacheRules;
        return this;
    }
    public set cacheRules(cacheRules: Array<CacheRules>  | undefined) {
        this['cache_rules'] = cacheRules;
    }
    public get cacheRules(): Array<CacheRules> | undefined {
        return this['cache_rules'];
    }
    public withOriginFollow302Status(originFollow302Status: string): TemplateConfigs {
        this['origin_follow302_status'] = originFollow302Status;
        return this;
    }
    public set originFollow302Status(originFollow302Status: string  | undefined) {
        this['origin_follow302_status'] = originFollow302Status;
    }
    public get originFollow302Status(): string | undefined {
        return this['origin_follow302_status'];
    }
    public withCompress(compress: Compress): TemplateConfigs {
        this['compress'] = compress;
        return this;
    }
    public withOriginRangeStatus(originRangeStatus: string): TemplateConfigs {
        this['origin_range_status'] = originRangeStatus;
        return this;
    }
    public set originRangeStatus(originRangeStatus: string  | undefined) {
        this['origin_range_status'] = originRangeStatus;
    }
    public get originRangeStatus(): string | undefined {
        return this['origin_range_status'];
    }
    public withIpFilter(ipFilter: IpFilter): TemplateConfigs {
        this['ip_filter'] = ipFilter;
        return this;
    }
    public set ipFilter(ipFilter: IpFilter  | undefined) {
        this['ip_filter'] = ipFilter;
    }
    public get ipFilter(): IpFilter | undefined {
        return this['ip_filter'];
    }
    public withReferer(referer: RefererConfig): TemplateConfigs {
        this['referer'] = referer;
        return this;
    }
    public withUserAgentFilter(userAgentFilter: UserAgentFilter): TemplateConfigs {
        this['user_agent_filter'] = userAgentFilter;
        return this;
    }
    public set userAgentFilter(userAgentFilter: UserAgentFilter  | undefined) {
        this['user_agent_filter'] = userAgentFilter;
    }
    public get userAgentFilter(): UserAgentFilter | undefined {
        return this['user_agent_filter'];
    }
    public withFlowLimitStrategy(flowLimitStrategy: Array<FlowLimitStrategy>): TemplateConfigs {
        this['flow_limit_strategy'] = flowLimitStrategy;
        return this;
    }
    public set flowLimitStrategy(flowLimitStrategy: Array<FlowLimitStrategy>  | undefined) {
        this['flow_limit_strategy'] = flowLimitStrategy;
    }
    public get flowLimitStrategy(): Array<FlowLimitStrategy> | undefined {
        return this['flow_limit_strategy'];
    }
    public withOriginRequestHeader(originRequestHeader: Array<OriginRequestHeader>): TemplateConfigs {
        this['origin_request_header'] = originRequestHeader;
        return this;
    }
    public set originRequestHeader(originRequestHeader: Array<OriginRequestHeader>  | undefined) {
        this['origin_request_header'] = originRequestHeader;
    }
    public get originRequestHeader(): Array<OriginRequestHeader> | undefined {
        return this['origin_request_header'];
    }
    public withHttps(https: HttpTemplateBody): TemplateConfigs {
        this['https'] = https;
        return this;
    }
    public withQuic(quic: Quic): TemplateConfigs {
        this['quic'] = quic;
        return this;
    }
    public withForceRedirect(forceRedirect: ForceRedirectConfig): TemplateConfigs {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: ForceRedirectConfig  | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect(): ForceRedirectConfig | undefined {
        return this['force_redirect'];
    }
    public withHttpsTlsVersion(httpsTlsVersion: HttpsTlsVersion): TemplateConfigs {
        this['https_tls_version'] = httpsTlsVersion;
        return this;
    }
    public set httpsTlsVersion(httpsTlsVersion: HttpsTlsVersion  | undefined) {
        this['https_tls_version'] = httpsTlsVersion;
    }
    public get httpsTlsVersion(): HttpsTlsVersion | undefined {
        return this['https_tls_version'];
    }
    public withAccessAreaFilter(accessAreaFilter: Array<AccessAreaFilter>): TemplateConfigs {
        this['access_area_filter'] = accessAreaFilter;
        return this;
    }
    public set accessAreaFilter(accessAreaFilter: Array<AccessAreaFilter>  | undefined) {
        this['access_area_filter'] = accessAreaFilter;
    }
    public get accessAreaFilter(): Array<AccessAreaFilter> | undefined {
        return this['access_area_filter'];
    }
    public withUrlAuth(urlAuth: UrlAuth): TemplateConfigs {
        this['url_auth'] = urlAuth;
        return this;
    }
    public set urlAuth(urlAuth: UrlAuth  | undefined) {
        this['url_auth'] = urlAuth;
    }
    public get urlAuth(): UrlAuth | undefined {
        return this['url_auth'];
    }
    public withRules(rules: Array<RuleResponse>): TemplateConfigs {
        this['rules'] = rules;
        return this;
    }
}