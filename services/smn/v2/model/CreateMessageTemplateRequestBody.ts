

export class CreateMessageTemplateRequestBody {
    private 'message_template_name': string | undefined;
    public protocol: string;
    public content: string;
    public constructor(messageTemplateName?: any, protocol?: any, content?: any) { 
        this['message_template_name'] = messageTemplateName;
        this['protocol'] = protocol;
        this['content'] = content;
    }
    public withMessageTemplateName(messageTemplateName: string): CreateMessageTemplateRequestBody {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName() {
        return this['message_template_name'];
    }
    public withProtocol(protocol: string): CreateMessageTemplateRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withContent(content: string): CreateMessageTemplateRequestBody {
        this['content'] = content;
        return this;
    }
}