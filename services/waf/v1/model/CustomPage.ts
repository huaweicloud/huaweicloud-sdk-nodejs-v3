

export class CustomPage {
    private 'status_code': string | undefined;
    private 'content_type': string | undefined;
    public content: string;
    public constructor(statusCode?: any, contentType?: any, content?: any) { 
        this['status_code'] = statusCode;
        this['content_type'] = contentType;
        this['content'] = content;
    }
    public withStatusCode(statusCode: string): CustomPage {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode() {
        return this['status_code'];
    }
    public withContentType(contentType: string): CustomPage {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withContent(content: string): CustomPage {
        this['content'] = content;
        return this;
    }
}