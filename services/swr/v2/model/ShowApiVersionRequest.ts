

export class ShowApiVersionRequest {
    private 'Content-Type'?: ShowApiVersionRequestContentTypeEnum | string;
    private 'api_version'?: string;
    public constructor(contentType?: string, apiVersion?: string) { 
        this['Content-Type'] = contentType;
        this['api_version'] = apiVersion;
    }
    public withContentType(contentType: ShowApiVersionRequestContentTypeEnum | string): ShowApiVersionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowApiVersionRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowApiVersionRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withApiVersion(apiVersion: string): ShowApiVersionRequest {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
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
