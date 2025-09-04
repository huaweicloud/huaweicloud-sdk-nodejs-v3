
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyProjectPermissionResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ApplyProjectPermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ApplyProjectPermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ApplyProjectPermissionResponse {
        this['result'] = result;
        return this;
    }
}