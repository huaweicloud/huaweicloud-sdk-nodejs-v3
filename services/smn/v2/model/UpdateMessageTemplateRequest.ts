import { UpdateMessageTemplateRequestBody } from './UpdateMessageTemplateRequestBody';


export class UpdateMessageTemplateRequest {
    private 'message_template_id': string | undefined;
    public body?: UpdateMessageTemplateRequestBody;
    public constructor(messageTemplateId?: any) { 
        this['message_template_id'] = messageTemplateId;
    }
    public withMessageTemplateId(messageTemplateId: string): UpdateMessageTemplateRequest {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId() {
        return this['message_template_id'];
    }
    public withBody(body: UpdateMessageTemplateRequestBody): UpdateMessageTemplateRequest {
        this['body'] = body;
        return this;
    }
}