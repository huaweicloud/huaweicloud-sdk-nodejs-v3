import { ClusterConfiguration } from './ClusterConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterConfigurationsResponse extends SdkResponse {
    public configurations?: Array<ClusterConfiguration>;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<ClusterConfiguration>): ListClusterConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}