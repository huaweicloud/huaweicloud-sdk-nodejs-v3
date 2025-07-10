
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateHttpsInfoV2Response extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ValidateHttpsInfoV2Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ValidateHttpsInfoV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ValidateHttpsInfoV2Response {
        this['status'] = status;
        return this;
    }
}