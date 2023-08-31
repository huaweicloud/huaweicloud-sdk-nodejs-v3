import { CreateAppRequestBody } from './CreateAppRequestBody';


export class CreateAppRequest {
    private 'Content-Type'?: CreateAppRequestContentTypeEnum | string;
    public body?: CreateAppRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateAppRequestContentTypeEnum | string): CreateAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateAppRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateAppRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateAppRequestBody): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAppRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
