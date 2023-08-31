

export class DeleteApplicationRequest {
    private 'app_id'?: string;
    private 'Content-Type'?: DeleteApplicationRequestContentTypeEnum | string;
    public constructor(appId?: string, contentType?: string) { 
        this['app_id'] = appId;
        this['Content-Type'] = contentType;
    }
    public withAppId(appId: string): DeleteApplicationRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withContentType(contentType: DeleteApplicationRequestContentTypeEnum | string): DeleteApplicationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteApplicationRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteApplicationRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteApplicationRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
