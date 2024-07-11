import { UpdateAppInfoRequestBody } from './UpdateAppInfoRequestBody';


export class UpdateAppInfoRequest {
    private 'Content-Type'?: UpdateAppInfoRequestContentTypeEnum | string;
    public body?: UpdateAppInfoRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: UpdateAppInfoRequestContentTypeEnum | string): UpdateAppInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateAppInfoRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateAppInfoRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateAppInfoRequestBody): UpdateAppInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAppInfoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
