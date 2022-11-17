

export class DeleteMessageTemplateRequest {
    private 'message_template_id': string | undefined;
    public constructor(messageTemplateId?: any) { 
        this['message_template_id'] = messageTemplateId;
    }
    public withMessageTemplateId(messageTemplateId: string): DeleteMessageTemplateRequest {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId() {
        return this['message_template_id'];
    }
}