import { ListConfigurationsResult } from './ListConfigurationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationTemplatesResponse extends SdkResponse {
    public count?: number;
    public quota?: number;
    public configurations?: Array<ListConfigurationsResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListConfigurationTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withQuota(quota: number): ListConfigurationTemplatesResponse {
        this['quota'] = quota;
        return this;
    }
    public withConfigurations(configurations: Array<ListConfigurationsResult>): ListConfigurationTemplatesResponse {
        this['configurations'] = configurations;
        return this;
    }
}