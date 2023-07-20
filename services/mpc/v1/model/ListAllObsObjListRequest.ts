

export class ListAllObsObjListRequest {
    public bucket?: string;
    public prefix?: string;
    public type?: string;
    public constructor(bucket?: string) { 
        this['bucket'] = bucket;
    }
    public withBucket(bucket: string): ListAllObsObjListRequest {
        this['bucket'] = bucket;
        return this;
    }
    public withPrefix(prefix: string): ListAllObsObjListRequest {
        this['prefix'] = prefix;
        return this;
    }
    public withType(type: string): ListAllObsObjListRequest {
        this['type'] = type;
        return this;
    }
}