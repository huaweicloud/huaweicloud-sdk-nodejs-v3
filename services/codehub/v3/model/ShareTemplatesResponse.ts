
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShareTemplatesResponse extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShareTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ShareTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShareTemplatesResponse {
        this['status'] = status;
        return this;
    }
}