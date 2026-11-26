import { BandwidthAlarmStrategy } from './BandwidthAlarmStrategy';
import { ErrorCodeCache } from './ErrorCodeCache';
import { FlowLimitStrategy } from './FlowLimitStrategy';
import { IpFilter } from './IpFilter';


export class CreateDomainConfigs {
    private 'error_code_cache'?: Array<ErrorCodeCache>;
    private 'ip_filter'?: IpFilter;
    private 'flow_limit_strategy'?: Array<FlowLimitStrategy>;
    private 'bandwidth_alarm_strategy'?: BandwidthAlarmStrategy;
    public constructor() { 
    }
    public withErrorCodeCache(errorCodeCache: Array<ErrorCodeCache>): CreateDomainConfigs {
        this['error_code_cache'] = errorCodeCache;
        return this;
    }
    public set errorCodeCache(errorCodeCache: Array<ErrorCodeCache>  | undefined) {
        this['error_code_cache'] = errorCodeCache;
    }
    public get errorCodeCache(): Array<ErrorCodeCache> | undefined {
        return this['error_code_cache'];
    }
    public withIpFilter(ipFilter: IpFilter): CreateDomainConfigs {
        this['ip_filter'] = ipFilter;
        return this;
    }
    public set ipFilter(ipFilter: IpFilter  | undefined) {
        this['ip_filter'] = ipFilter;
    }
    public get ipFilter(): IpFilter | undefined {
        return this['ip_filter'];
    }
    public withFlowLimitStrategy(flowLimitStrategy: Array<FlowLimitStrategy>): CreateDomainConfigs {
        this['flow_limit_strategy'] = flowLimitStrategy;
        return this;
    }
    public set flowLimitStrategy(flowLimitStrategy: Array<FlowLimitStrategy>  | undefined) {
        this['flow_limit_strategy'] = flowLimitStrategy;
    }
    public get flowLimitStrategy(): Array<FlowLimitStrategy> | undefined {
        return this['flow_limit_strategy'];
    }
    public withBandwidthAlarmStrategy(bandwidthAlarmStrategy: BandwidthAlarmStrategy): CreateDomainConfigs {
        this['bandwidth_alarm_strategy'] = bandwidthAlarmStrategy;
        return this;
    }
    public set bandwidthAlarmStrategy(bandwidthAlarmStrategy: BandwidthAlarmStrategy  | undefined) {
        this['bandwidth_alarm_strategy'] = bandwidthAlarmStrategy;
    }
    public get bandwidthAlarmStrategy(): BandwidthAlarmStrategy | undefined {
        return this['bandwidth_alarm_strategy'];
    }
}