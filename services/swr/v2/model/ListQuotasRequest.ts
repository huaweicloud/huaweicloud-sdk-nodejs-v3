

export class ListQuotasRequest {
    private 'Content-Type'?: ListQuotasRequestContentTypeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListQuotasRequestContentTypeEnum | string): ListQuotasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListQuotasRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListQuotasRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQuotasRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
