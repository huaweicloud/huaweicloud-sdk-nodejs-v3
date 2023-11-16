
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableNoticeResponse extends SdkResponse {
    public result?: string;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DisableNoticeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): DisableNoticeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): DisableNoticeResponse {
        this['status'] = status;
        return this;
    }
}