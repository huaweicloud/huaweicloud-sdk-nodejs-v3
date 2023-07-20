

export class OpenGaussDatastoreOption {
    public type?: OpenGaussDatastoreOptionTypeEnum | string;
    public version?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: OpenGaussDatastoreOptionTypeEnum | string): OpenGaussDatastoreOption {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): OpenGaussDatastoreOption {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussDatastoreOptionTypeEnum {
    GAUSSDB = 'GaussDB'
}
