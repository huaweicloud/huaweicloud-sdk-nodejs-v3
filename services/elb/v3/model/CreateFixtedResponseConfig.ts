

export class CreateFixtedResponseConfig {
    private 'status_code': string | undefined;
    private 'content_type'?: CreateFixtedResponseConfigContentTypeEnum | undefined;
    private 'message_body'?: string | undefined;
    public constructor(statusCode?: any) { 
        this['status_code'] = statusCode;
    }
    public withStatusCode(statusCode: string): CreateFixtedResponseConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode() {
        return this['status_code'];
    }
    public withContentType(contentType: CreateFixtedResponseConfigContentTypeEnum): CreateFixtedResponseConfig {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateFixtedResponseConfigContentTypeEnum | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withMessageBody(messageBody: string): CreateFixtedResponseConfig {
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
export enum CreateFixtedResponseConfigContentTypeEnum {
    TEXT_PLAIN = 'text/plain',
    TEXT_CSS = 'text/css',
    TEXT_HTML = 'text/html',
    APPLICATION_JAVASCRIPT = 'application/javascript',
    APPLICATION_JSON = 'application/json'
}
