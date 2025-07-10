
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeystorePermissionResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateKeystorePermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): UpdateKeystorePermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): UpdateKeystorePermissionResponse {
        this['result'] = result;
        return this;
    }
}