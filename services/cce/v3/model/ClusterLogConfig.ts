import { ClusterLogConfigLogConfigs } from './ClusterLogConfigLogConfigs';


export class ClusterLogConfig {
    private 'ttl_in_days'?: number;
    private 'log_configs'?: Array<ClusterLogConfigLogConfigs>;
    public constructor() { 
    }
    public withTtlInDays(ttlInDays: number): ClusterLogConfig {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withLogConfigs(logConfigs: Array<ClusterLogConfigLogConfigs>): ClusterLogConfig {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<ClusterLogConfigLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<ClusterLogConfigLogConfigs> | undefined {
        return this['log_configs'];
    }
}