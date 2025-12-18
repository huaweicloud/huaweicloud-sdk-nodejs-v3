import { AutopilotClusterLogConfigLogConfigs } from './AutopilotClusterLogConfigLogConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotClusterConfigResponse extends SdkResponse {
    private 'ttl_in_days'?: number;
    private 'log_configs'?: Array<AutopilotClusterLogConfigLogConfigs>;
    public constructor() { 
        super();
    }
    public withTtlInDays(ttlInDays: number): ShowAutopilotClusterConfigResponse {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withLogConfigs(logConfigs: Array<AutopilotClusterLogConfigLogConfigs>): ShowAutopilotClusterConfigResponse {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<AutopilotClusterLogConfigLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<AutopilotClusterLogConfigLogConfigs> | undefined {
        return this['log_configs'];
    }
}