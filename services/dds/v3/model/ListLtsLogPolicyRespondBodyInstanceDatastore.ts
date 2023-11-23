

export class ListLtsLogPolicyRespondBodyInstanceDatastore {
    public type?: ListLtsLogPolicyRespondBodyInstanceDatastoreTypeEnum | string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: ListLtsLogPolicyRespondBodyInstanceDatastoreTypeEnum | string): ListLtsLogPolicyRespondBodyInstanceDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListLtsLogPolicyRespondBodyInstanceDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLtsLogPolicyRespondBodyInstanceDatastoreTypeEnum {
    MONGODB = 'mongodb'
}
