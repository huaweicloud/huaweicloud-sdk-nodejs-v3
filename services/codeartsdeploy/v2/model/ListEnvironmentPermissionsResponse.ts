import { DevUcEnvironmentPermission } from './DevUcEnvironmentPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentPermissionsResponse extends SdkResponse {
    public body?: Array<DevUcEnvironmentPermission>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DevUcEnvironmentPermission>): ListEnvironmentPermissionsResponse {
        this['body'] = body;
        return this;
    }
}