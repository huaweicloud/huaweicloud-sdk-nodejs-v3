
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSShkeyResponse extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteSShkeyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): DeleteSShkeyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteSShkeyResponse {
        this['status'] = status;
        return this;
    }
}