

export class ListMessageTemplatesRequest {
    public offset?: number;
    public limit?: number;
    private 'message_template_name'?: string | undefined;
    public protocol?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListMessageTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMessageTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMessageTemplateName(messageTemplateName: string): ListMessageTemplatesRequest {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName() {
        return this['message_template_name'];
    }
    public withProtocol(protocol: string): ListMessageTemplatesRequest {
        this['protocol'] = protocol;
        return this;
    }
}