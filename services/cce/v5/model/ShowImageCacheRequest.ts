

export class ShowImageCacheRequest {
    private 'Content-Type'?: ShowImageCacheRequestContentTypeEnum | string;
    private 'image_cache_id'?: string;
    public constructor(contentType?: string, imageCacheId?: string) { 
        this['Content-Type'] = contentType;
        this['image_cache_id'] = imageCacheId;
    }
    public withContentType(contentType: ShowImageCacheRequestContentTypeEnum | string): ShowImageCacheRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowImageCacheRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowImageCacheRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withImageCacheId(imageCacheId: string): ShowImageCacheRequest {
        this['image_cache_id'] = imageCacheId;
        return this;
    }
    public set imageCacheId(imageCacheId: string  | undefined) {
        this['image_cache_id'] = imageCacheId;
    }
    public get imageCacheId(): string | undefined {
        return this['image_cache_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowImageCacheRequestContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_X_PEM_FILE = 'application/x-pem-file',
    MULTIPART_FORM_DATA = 'multipart/form-data'
}
