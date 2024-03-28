

export class RegisterBucketRequestBody {
    private 'obs_buckets'?: Array<string>;
    public constructor(obsBuckets?: Array<string>) { 
        this['obs_buckets'] = obsBuckets;
    }
    public withObsBuckets(obsBuckets: Array<string>): RegisterBucketRequestBody {
        this['obs_buckets'] = obsBuckets;
        return this;
    }
    public set obsBuckets(obsBuckets: Array<string>  | undefined) {
        this['obs_buckets'] = obsBuckets;
    }
    public get obsBuckets(): Array<string> | undefined {
        return this['obs_buckets'];
    }
}