
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateHttpsInfoResponse extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ValidateHttpsInfoResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ValidateHttpsInfoResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ValidateHttpsInfoResponse {
        this['status'] = status;
        return this;
    }
}