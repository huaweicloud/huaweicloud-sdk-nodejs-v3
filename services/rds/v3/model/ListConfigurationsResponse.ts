import { ConfigurationSummary } from './ConfigurationSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsResponse extends SdkResponse {
    public configurations?: Array<ConfigurationSummary>;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<ConfigurationSummary>): ListConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}