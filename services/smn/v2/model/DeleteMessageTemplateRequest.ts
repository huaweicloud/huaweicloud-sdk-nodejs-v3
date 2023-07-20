

export class DeleteMessageTemplateRequest {
    private 'message_template_id'?: string;
    public constructor(messageTemplateId?: string) { 
        this['message_template_id'] = messageTemplateId;
    }
    public withMessageTemplateId(messageTemplateId: string): DeleteMessageTemplateRequest {
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