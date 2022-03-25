import { CreateNamespaceRequestBody } from './CreateNamespaceRequestBody';


export class CreateNamespaceRequest {
    private 'Content-Type': CreateNamespaceRequestContentTypeEnum | undefined;
    public body?: CreateNamespaceRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateNamespaceRequestContentTypeEnum): CreateNamespaceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateNamespaceRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
