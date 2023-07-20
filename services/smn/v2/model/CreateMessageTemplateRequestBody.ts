

export class CreateMessageTemplateRequestBody {
    private 'message_template_name'?: string;
    public protocol?: string;
    public content?: string;
    public constructor(messageTemplateName?: string, protocol?: string, content?: string) { 
        this['message_template_name'] = messageTemplateName;
        this['protocol'] = protocol;
        this['content'] = content;
    }
    public withMessageTemplateName(messageTemplateName: string): CreateMessageTemplateRequestBody {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string  | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName(): string | undefined {
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