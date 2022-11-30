

export class ShowVersionRequest {
    public version: ShowVersionRequestVersionEnum;
    public constructor(version?: any) { 
        this['version'] = version;
    }
    public withVersion(version: ShowVersionRequestVersionEnum): ShowVersionRequest {
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
