import { ConfigurationParameter } from './ConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterConfigurationsParameterResponse extends SdkResponse {
    public configurations?: Array<ConfigurationParameter>;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<ConfigurationParameter>): ListClusterConfigurationsParameterResponse {
        this['configurations'] = configurations;
        return this;
    }
}