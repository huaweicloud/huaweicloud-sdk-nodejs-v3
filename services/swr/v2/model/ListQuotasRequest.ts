

export class ListQuotasRequest {
    private 'Content-Type': ListQuotasRequestContentTypeEnum | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListQuotasRequestContentTypeEnum): ListQuotasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListQuotasRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
