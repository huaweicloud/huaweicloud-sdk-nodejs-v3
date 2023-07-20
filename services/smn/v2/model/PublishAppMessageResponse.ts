
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishAppMessageResponse extends SdkResponse {
    private 'message_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withMessageId(messageId: string): PublishAppMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withRequestId(requestId: string): PublishAppMessageResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}