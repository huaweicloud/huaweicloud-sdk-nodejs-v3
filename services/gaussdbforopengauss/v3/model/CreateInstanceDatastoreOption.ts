

export class CreateInstanceDatastoreOption {
    public type?: CreateInstanceDatastoreOptionTypeEnum | string;
    public version?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: CreateInstanceDatastoreOptionTypeEnum | string): CreateInstanceDatastoreOption {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): CreateInstanceDatastoreOption {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceDatastoreOptionTypeEnum {
    GAUSSDB = 'GaussDB'
}
