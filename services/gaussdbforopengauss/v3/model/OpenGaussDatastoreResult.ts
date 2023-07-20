

export class OpenGaussDatastoreResult {
    public type?: OpenGaussDatastoreResultTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: OpenGaussDatastoreResultTypeEnum | string): OpenGaussDatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): OpenGaussDatastoreResult {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussDatastoreResultTypeEnum {
    GAUSSDB = 'GaussDB'
}
