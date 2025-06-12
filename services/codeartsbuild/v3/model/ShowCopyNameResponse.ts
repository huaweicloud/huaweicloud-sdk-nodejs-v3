
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCopyNameResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowCopyNameResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowCopyNameResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ShowCopyNameResponse {
        this['result'] = result;
        return this;
    }
}