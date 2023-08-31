import { CreateHostClusterRequestBody } from './CreateHostClusterRequestBody';


export class CreateHostClusterRequest {
    private 'Content-Type'?: CreateHostClusterRequestContentTypeEnum | string;
    public body?: CreateHostClusterRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateHostClusterRequestContentTypeEnum | string): CreateHostClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateHostClusterRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateHostClusterRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateHostClusterRequestBody): CreateHostClusterRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostClusterRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
