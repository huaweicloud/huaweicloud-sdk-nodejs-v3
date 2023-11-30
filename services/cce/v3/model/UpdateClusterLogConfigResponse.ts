import { ClusterLogConfigLogConfigs } from './ClusterLogConfigLogConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterLogConfigResponse extends SdkResponse {
    private 'ttl_in_days'?: number;
    private 'log_configs'?: Array<ClusterLogConfigLogConfigs>;
    public constructor() { 
        super();
    }
    public withTtlInDays(ttlInDays: number): UpdateClusterLogConfigResponse {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withLogConfigs(logConfigs: Array<ClusterLogConfigLogConfigs>): UpdateClusterLogConfigResponse {
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