import { ShowUserProjectPermissionResult } from './ShowUserProjectPermissionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectPermissionResponse extends SdkResponse {
    public result?: ShowUserProjectPermissionResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowUserProjectPermissionResult): ShowProjectPermissionResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowProjectPermissionResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowProjectPermissionResponse {
        this['status'] = status;
        return this;
    }
}