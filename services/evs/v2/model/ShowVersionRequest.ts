

export class ShowVersionRequest {
    public version?: ShowVersionRequestVersionEnum | string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: ShowVersionRequestVersionEnum | string): ShowVersionRequest {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVersionRequestVersionEnum {
    V1 = 'v1',
    V2 = 'v2',
    V3 = 'v3'
}
