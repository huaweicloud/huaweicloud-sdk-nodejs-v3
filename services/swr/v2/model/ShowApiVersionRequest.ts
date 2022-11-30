

export class ShowApiVersionRequest {
    private 'Content-Type': ShowApiVersionRequestContentTypeEnum | undefined;
    private 'api_version': string | undefined;
    public constructor(contentType?: any, apiVersion?: any) { 
        this['Content-Type'] = contentType;
        this['api_version'] = apiVersion;
    }
    public withContentType(contentType: ShowApiVersionRequestContentTypeEnum): ShowApiVersionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowApiVersionRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withApiVersion(apiVersion: string): ShowApiVersionRequest {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion() {
        return this['api_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApiVersionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
