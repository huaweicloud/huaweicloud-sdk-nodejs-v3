
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteKeystorePermissionResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteKeystorePermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): DeleteKeystorePermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): DeleteKeystorePermissionResponse {
        this['result'] = result;
        return this;
    }
}