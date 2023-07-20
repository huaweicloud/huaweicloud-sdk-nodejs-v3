import { ConfigurationSummary } from './ConfigurationSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsResponse extends SdkResponse {
    public count?: number;
    public configurations?: Array<ConfigurationSummary>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListConfigurationsResponse {
        this['count'] = count;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationSummary>): ListConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}