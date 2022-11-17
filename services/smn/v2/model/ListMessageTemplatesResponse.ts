import { MessageTemplate } from './MessageTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTemplatesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'message_template_count'?: number | undefined;
    private 'message_templates'?: Array<MessageTemplate> | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListMessageTemplatesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withMessageTemplateCount(messageTemplateCount: number): ListMessageTemplatesResponse {
        this['message_template_count'] = messageTemplateCount;
        return this;
    }
    public set messageTemplateCount(messageTemplateCount: number | undefined) {
        this['message_template_count'] = messageTemplateCount;
    }
    public get messageTemplateCount() {
        return this['message_template_count'];
    }
    public withMessageTemplates(messageTemplates: Array<MessageTemplate>): ListMessageTemplatesResponse {
        this['message_templates'] = messageTemplates;
        return this;
    }
    public set messageTemplates(messageTemplates: Array<MessageTemplate> | undefined) {
        this['message_templates'] = messageTemplates;
    }
    public get messageTemplates() {
        return this['message_templates'];
    }
}