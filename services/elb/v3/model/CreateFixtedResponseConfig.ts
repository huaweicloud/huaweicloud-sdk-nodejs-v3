

export class CreateFixtedResponseConfig {
    private 'status_code'?: string;
    private 'content_type'?: CreateFixtedResponseConfigContentTypeEnum | string;
    private 'message_body'?: string;
    public constructor(statusCode?: string) { 
        this['status_code'] = statusCode;
    }
    public withStatusCode(statusCode: string): CreateFixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: CreateFixtedResponseConfigContentTypeEnum | string): CreateFixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateFixtedResponseConfigContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): CreateFixtedResponseConfigContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): CreateFixtedResponseConfig {
        this['message_body'] = messageBody;
        return this;
    }
    public set messageBody(messageBody: string  | undefined) {
        this['message_body'] = messageBody;
    }
    public get messageBody(): string | undefined {
        return this['message_body'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
