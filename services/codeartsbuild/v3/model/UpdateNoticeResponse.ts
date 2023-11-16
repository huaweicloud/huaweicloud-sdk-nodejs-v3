
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNoticeResponse extends SdkResponse {
    public result?: string;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateNoticeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): UpdateNoticeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): UpdateNoticeResponse {
        this['status'] = status;
        return this;
    }
}