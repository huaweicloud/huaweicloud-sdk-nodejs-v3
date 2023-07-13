

export class CreateCcRuleRequestBodyActionDetailResponse {
    private 'content_type'?: CreateCcRuleRequestBodyActionDetailResponseContentTypeEnum | undefined;
    public content?: string;
    public constructor() { 
    }
    public withContentType(contentType: CreateCcRuleRequestBodyActionDetailResponseContentTypeEnum): CreateCcRuleRequestBodyActionDetailResponse {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateCcRuleRequestBodyActionDetailResponseContentTypeEnum | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withContent(content: string): CreateCcRuleRequestBodyActionDetailResponse {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCcRuleRequestBodyActionDetailResponseContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    TEXT_HTML = 'text/html',
    TEXT_XML = 'text/xml'
}
