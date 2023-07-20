

export class ListApiVersionsRequest {
    private 'Content-Type'?: ListApiVersionsRequestContentTypeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListApiVersionsRequestContentTypeEnum | string): ListApiVersionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListApiVersionsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListApiVersionsRequestContentTypeEnum | string | undefined {
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
