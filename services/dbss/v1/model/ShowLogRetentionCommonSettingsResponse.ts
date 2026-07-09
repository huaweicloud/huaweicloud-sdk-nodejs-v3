import { CommonSettingsResponseLogRetention } from './CommonSettingsResponseLogRetention';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogRetentionCommonSettingsResponse extends SdkResponse {
    private 'log_retention'?: CommonSettingsResponseLogRetention;
    private 'data_usage_limit'?: number;
    public constructor() { 
        super();
    }
    public withLogRetention(logRetention: CommonSettingsResponseLogRetention): ShowLogRetentionCommonSettingsResponse {
        this['log_retention'] = logRetention;
        return this;
    }
    public set logRetention(logRetention: CommonSettingsResponseLogRetention  | undefined) {
        this['log_retention'] = logRetention;
    }
    public get logRetention(): CommonSettingsResponseLogRetention | undefined {
        return this['log_retention'];
    }
    public withDataUsageLimit(dataUsageLimit: number): ShowLogRetentionCommonSettingsResponse {
        this['data_usage_limit'] = dataUsageLimit;
        return this;
    }
    public set dataUsageLimit(dataUsageLimit: number  | undefined) {
        this['data_usage_limit'] = dataUsageLimit;
    }
    public get dataUsageLimit(): number | undefined {
        return this['data_usage_limit'];
    }
}