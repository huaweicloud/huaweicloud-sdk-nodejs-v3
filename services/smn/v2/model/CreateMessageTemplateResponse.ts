
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMessageTemplateResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'message_template_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateMessageTemplateResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMessageTemplateId(messageTemplateId: string): CreateMessageTemplateResponse {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string  | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId(): string | undefined {
        return this['message_template_id'];
    }
}