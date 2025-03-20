

export class ListImageCachesRequest {
    private 'Content-Type'?: ListImageCachesRequestContentTypeEnum | string;
    public name?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListImageCachesRequestContentTypeEnum | string): ListImageCachesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListImageCachesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListImageCachesRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListImageCachesRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImageCachesRequestContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_X_PEM_FILE = 'application/x-pem-file',
    MULTIPART_FORM_DATA = 'multipart/form-data'
}
