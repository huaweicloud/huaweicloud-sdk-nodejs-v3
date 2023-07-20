import { MessageTemplate } from './MessageTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTemplatesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'message_template_count'?: number;
    private 'message_templates'?: Array<MessageTemplate>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListMessageTemplatesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMessageTemplateCount(messageTemplateCount: number): ListMessageTemplatesResponse {
        this['message_template_count'] = messageTemplateCount;
        return this;
    }
    public set messageTemplateCount(messageTemplateCount: number  | undefined) {
        this['message_template_count'] = messageTemplateCount;
    }
    public get messageTemplateCount(): number | undefined {
        return this['message_template_count'];
    }
    public withMessageTemplates(messageTemplates: Array<MessageTemplate>): ListMessageTemplatesResponse {
        this['message_templates'] = messageTemplates;
        return this;
    }
    public set messageTemplates(messageTemplates: Array<MessageTemplate>  | undefined) {
        this['message_templates'] = messageTemplates;
    }
    public get messageTemplates(): Array<MessageTemplate> | undefined {
        return this['message_templates'];
    }
}