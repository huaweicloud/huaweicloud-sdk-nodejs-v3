
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckWebhookUrlResponse extends SdkResponse {
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: string): CheckWebhookUrlResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): CheckWebhookUrlResponse {
        this['status'] = status;
        return this;
    }
}