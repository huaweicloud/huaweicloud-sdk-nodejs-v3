
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnsubscribeTopicResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): UnsubscribeTopicResponse {
        this['message'] = message;
        return this;
    }
}