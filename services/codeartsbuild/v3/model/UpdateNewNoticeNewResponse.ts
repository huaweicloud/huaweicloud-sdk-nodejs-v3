
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNewNoticeNewResponse extends SdkResponse {
    public result?: string;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateNewNoticeNewResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): UpdateNewNoticeNewResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): UpdateNewNoticeNewResponse {
        this['status'] = status;
        return this;
    }
}