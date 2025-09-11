
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnsubscribeSubscriptionResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): UnsubscribeSubscriptionResponse {
        this['message'] = message;
        return this;
    }
}