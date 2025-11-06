
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateKeyVerifyResponse extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowPrivateKeyVerifyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ShowPrivateKeyVerifyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowPrivateKeyVerifyResponse {
        this['status'] = status;
        return this;
    }
}