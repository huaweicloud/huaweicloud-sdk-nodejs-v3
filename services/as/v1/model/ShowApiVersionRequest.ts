

export class ShowApiVersionRequest {
    private 'api_version'?: ShowApiVersionRequestApiVersionEnum | string;
    public constructor(apiVersion?: string) { 
        this['api_version'] = apiVersion;
    }
    public withApiVersion(apiVersion: ShowApiVersionRequestApiVersionEnum | string): ShowApiVersionRequest {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ShowApiVersionRequestApiVersionEnum | string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ShowApiVersionRequestApiVersionEnum | string | undefined {
        return this['api_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApiVersionRequestApiVersionEnum {
    V1 = 'v1',
    V2 = 'v2'
}
