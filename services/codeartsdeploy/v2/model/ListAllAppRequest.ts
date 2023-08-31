import { ListAllAppRequestBody } from './ListAllAppRequestBody';


export class ListAllAppRequest {
    private 'Content-Type'?: ListAllAppRequestContentTypeEnum | string;
    public body?: ListAllAppRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListAllAppRequestContentTypeEnum | string): ListAllAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListAllAppRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListAllAppRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ListAllAppRequestBody): ListAllAppRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllAppRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
