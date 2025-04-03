

export class CreateAuthorizationTokenRequest {
    private 'Content-Type'?: CreateAuthorizationTokenRequestContentTypeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateAuthorizationTokenRequestContentTypeEnum | string): CreateAuthorizationTokenRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateAuthorizationTokenRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateAuthorizationTokenRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAuthorizationTokenRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
