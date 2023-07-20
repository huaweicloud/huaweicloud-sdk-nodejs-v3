import { CreateNamespaceRequestBody } from './CreateNamespaceRequestBody';


export class CreateNamespaceRequest {
    private 'Content-Type'?: CreateNamespaceRequestContentTypeEnum | string;
    public body?: CreateNamespaceRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateNamespaceRequestContentTypeEnum | string): CreateNamespaceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateNamespaceRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateNamespaceRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateNamespaceRequestBody): CreateNamespaceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNamespaceRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
