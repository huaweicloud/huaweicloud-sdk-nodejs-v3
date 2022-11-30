

export class UpdateFixtedResponseConfig {
    private 'status_code'?: string | undefined;
    private 'content_type'?: UpdateFixtedResponseConfigContentTypeEnum | undefined;
    private 'message_body'?: string | undefined;
    public constructor() { 
    }
    public withStatusCode(statusCode: string): UpdateFixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode() {
        return this['status_code'];
    }
    public withContentType(contentType: UpdateFixtedResponseConfigContentTypeEnum): UpdateFixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateFixtedResponseConfigContentTypeEnum | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): UpdateFixtedResponseConfig {
        this['message_body'] = messageBody;
        return this;
    }
    public set messageBody(messageBody: string | undefined) {
        this['message_body'] = messageBody;
    }
    public get messageBody() {
        return this['message_body'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
