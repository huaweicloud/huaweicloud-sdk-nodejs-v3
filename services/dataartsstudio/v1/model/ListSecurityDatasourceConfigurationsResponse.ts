import { PermissionConfiguration } from './PermissionConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDatasourceConfigurationsResponse extends SdkResponse {
    public configurations?: Array<PermissionConfiguration>;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<PermissionConfiguration>): ListSecurityDatasourceConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}