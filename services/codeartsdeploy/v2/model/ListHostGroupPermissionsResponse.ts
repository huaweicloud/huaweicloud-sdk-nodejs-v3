import { DevUcClusterPermission } from './DevUcClusterPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostGroupPermissionsResponse extends SdkResponse {
    public body?: Array<DevUcClusterPermission>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DevUcClusterPermission>): ListHostGroupPermissionsResponse {
        this['body'] = body;
        return this;
    }
}