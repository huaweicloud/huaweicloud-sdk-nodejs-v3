import { CreateImageCacheRequestBody } from './CreateImageCacheRequestBody';


export class CreateImageCacheRequest {
    private 'Content-Type'?: CreateImageCacheRequestContentTypeEnum | string;
    public body?: CreateImageCacheRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateImageCacheRequestContentTypeEnum | string): CreateImageCacheRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateImageCacheRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateImageCacheRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateImageCacheRequestBody): CreateImageCacheRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateImageCacheRequestContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_X_PEM_FILE = 'application/x-pem-file',
    MULTIPART_FORM_DATA = 'multipart/form-data'
}
