

export class OpenGaussDatastore {
    public type?: OpenGaussDatastoreTypeEnum | string;
    public version?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: OpenGaussDatastoreTypeEnum | string): OpenGaussDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): OpenGaussDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussDatastoreTypeEnum {
    GAUSSDB_FOR_OPENGAUSS = 'GaussDB(for openGauss)',
    GAUSSDB = 'GaussDB'
}
