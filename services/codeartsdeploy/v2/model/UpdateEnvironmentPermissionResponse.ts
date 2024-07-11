import { DevUcEnvironmentPermission } from './DevUcEnvironmentPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnvironmentPermissionResponse extends SdkResponse {
    public status?: string;
    public result?: DevUcEnvironmentPermission;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateEnvironmentPermissionResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: DevUcEnvironmentPermission): UpdateEnvironmentPermissionResponse {
        this['result'] = result;
        return this;
    }
}