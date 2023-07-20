

export class FixtedResponseConfig {
    private 'status_code'?: string;
    private 'content_type'?: FixtedResponseConfigContentTypeEnum | string;
    private 'message_body'?: string;
    public constructor(statusCode?: string, contentType?: string, messageBody?: string) { 
        this['status_code'] = statusCode;
        this['content_type'] = contentType;
        this['message_body'] = messageBody;
    }
    public withStatusCode(statusCode: string): FixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: FixtedResponseConfigContentTypeEnum | string): FixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: FixtedResponseConfigContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): FixtedResponseConfigContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): FixtedResponseConfig {
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
export enum FixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
