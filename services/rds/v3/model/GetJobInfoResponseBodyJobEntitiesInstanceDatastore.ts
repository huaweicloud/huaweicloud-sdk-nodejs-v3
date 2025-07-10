

export class GetJobInfoResponseBodyJobEntitiesInstanceDatastore {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): GetJobInfoResponseBodyJobEntitiesInstanceDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): GetJobInfoResponseBodyJobEntitiesInstanceDatastore {
        this['version'] = version;
        return this;
    }
}