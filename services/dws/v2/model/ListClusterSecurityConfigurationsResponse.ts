import { SecurityConfigurationParameter } from './SecurityConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterSecurityConfigurationsResponse extends SdkResponse {
    public configurations?: Array<SecurityConfigurationParameter>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<SecurityConfigurationParameter>): ListClusterSecurityConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withCount(count: number): ListClusterSecurityConfigurationsResponse {
        this['count'] = count;
        return this;
    }
}