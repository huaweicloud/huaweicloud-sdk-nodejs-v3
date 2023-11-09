

export class ObsProperties {
    public endpoint?: string;
    public bucket?: string;
    public key?: string;
    public constructor() { 
    }
    public withEndpoint(endpoint: string): ObsProperties {
        this['endpoint'] = endpoint;
        return this;
    }
    public withBucket(bucket: string): ObsProperties {
        this['bucket'] = bucket;
        return this;
    }
    public withKey(key: string): ObsProperties {
        this['key'] = key;
        return this;
    }
}