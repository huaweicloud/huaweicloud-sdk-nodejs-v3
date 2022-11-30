
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishMessageResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'message_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): PublishMessageResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withMessageId(messageId: string): PublishMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
}