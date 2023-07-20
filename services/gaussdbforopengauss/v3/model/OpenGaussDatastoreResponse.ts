

export class OpenGaussDatastoreResponse {
    public type?: OpenGaussDatastoreResponseTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: OpenGaussDatastoreResponseTypeEnum | string): OpenGaussDatastoreResponse {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): OpenGaussDatastoreResponse {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussDatastoreResponseTypeEnum {
    GAUSSDB = 'GaussDB',
    GAUSSDB_FOR_OPENGAUSS = 'GaussDB(for openGauss)'
}
