import { SubscribePackageProductsRequestBody } from './SubscribePackageProductsRequestBody';


export class SubscribePackageProductsRequest {
    private 'Content-Type'?: SubscribePackageProductsRequestContentTypeEnum | string;
    public body?: SubscribePackageProductsRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: SubscribePackageProductsRequestContentTypeEnum | string): SubscribePackageProductsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: SubscribePackageProductsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): SubscribePackageProductsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: SubscribePackageProductsRequestBody): SubscribePackageProductsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscribePackageProductsRequestContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_X_PEM_FILE = 'application/x-pem-file',
    MULTIPART_FORM_DATA = 'multipart/form-data'
}
