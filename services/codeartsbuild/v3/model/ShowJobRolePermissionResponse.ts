import { ShowJobRolePermissionResult } from './ShowJobRolePermissionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobRolePermissionResponse extends SdkResponse {
    public result?: Array<ShowJobRolePermissionResult>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ShowJobRolePermissionResult>): ShowJobRolePermissionResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowJobRolePermissionResponse {
        this['status'] = status;
        return this;
    }
}