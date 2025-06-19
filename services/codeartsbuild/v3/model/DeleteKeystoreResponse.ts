
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteKeystoreResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteKeystoreResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): DeleteKeystoreResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): DeleteKeystoreResponse {
        this['result'] = result;
        return this;
    }
}