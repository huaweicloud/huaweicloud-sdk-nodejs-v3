
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddKeystorePermissionResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AddKeystorePermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): AddKeystorePermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): AddKeystorePermissionResponse {
        this['result'] = result;
        return this;
    }
}