

export class CustomPage {
    private 'status_code'?: string;
    private 'content_type'?: CustomPageContentTypeEnum | string;
    public content?: string;
    public constructor(statusCode?: string, contentType?: string, content?: string) { 
        this['status_code'] = statusCode;
        this['content_type'] = contentType;
        this['content'] = content;
    }
    public withStatusCode(statusCode: string): CustomPage {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: CustomPageContentTypeEnum | string): CustomPage {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CustomPageContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): CustomPageContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withContent(content: string): CustomPage {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomPageContentTypeEnum {
    TEXT_HTML = 'text/html',
    TEXT_XML = 'text/xml',
    APPLICATION_JSON = 'application/json'
}
