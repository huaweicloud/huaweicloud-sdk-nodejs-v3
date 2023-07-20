import { ListConfigurationsResult } from './ListConfigurationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsResponse extends SdkResponse {
    public count?: number;
    public quota?: number;
    public configurations?: Array<ListConfigurationsResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListConfigurationsResponse {
        this['count'] = count;
        return this;
    }
    public withQuota(quota: number): ListConfigurationsResponse {
        this['quota'] = quota;
        return this;
    }
    public withConfigurations(configurations: Array<ListConfigurationsResult>): ListConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}