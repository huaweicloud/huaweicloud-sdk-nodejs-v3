
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDeployKeyResponse extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteDeployKeyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): DeleteDeployKeyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteDeployKeyResponse {
        this['status'] = status;
        return this;
    }
}