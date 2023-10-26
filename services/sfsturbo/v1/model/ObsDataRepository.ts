

export class ObsDataRepository {
    public bucket?: string;
    public endpoint?: string;
    public constructor(bucket?: string, endpoint?: string) { 
        this['bucket'] = bucket;
        this['endpoint'] = endpoint;
    }
    public withBucket(bucket: string): ObsDataRepository {
        this['bucket'] = bucket;
        return this;
    }
    public withEndpoint(endpoint: string): ObsDataRepository {
        this['endpoint'] = endpoint;
        return this;
    }
}