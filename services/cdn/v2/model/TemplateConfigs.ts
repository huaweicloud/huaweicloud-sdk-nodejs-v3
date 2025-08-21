import { CacheRules } from './CacheRules';
import { Compress } from './Compress';
import { FlowLimitStrategy } from './FlowLimitStrategy';
import { HttpResponseHeader } from './HttpResponseHeader';
import { IpFilter } from './IpFilter';
import { RefererConfig } from './RefererConfig';
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
}