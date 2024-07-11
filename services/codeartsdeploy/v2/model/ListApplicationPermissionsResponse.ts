import { ApplicationPermissionVO } from './ApplicationPermissionVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationPermissionsResponse extends SdkResponse {
    public result?: Array<ApplicationPermissionVO>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ApplicationPermissionVO>): ListApplicationPermissionsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListApplicationPermissionsResponse {
        this['status'] = status;
        return this;
    }
}