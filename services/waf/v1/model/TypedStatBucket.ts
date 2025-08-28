

export class TypedStatBucket {
    public key?: string;
    public count?: number;
    public constructor() { 
    }
    public withKey(key: string): TypedStatBucket {
        this['key'] = key;
        return this;
    }
    public withCount(count: number): TypedStatBucket {
        this['count'] = count;
        return this;
    }
}