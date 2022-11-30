

export class ListApiVersionsRequest {
    private 'Content-Type': ListApiVersionsRequestContentTypeEnum | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListApiVersionsRequestContentTypeEnum): ListApiVersionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListApiVersionsRequestContentTypeEnum | undefined) {
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
export enum ListApiVersionsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
