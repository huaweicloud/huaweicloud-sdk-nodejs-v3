

export class OBSBucket {
    private 'bucket_acl'?: string;
    private 'bucket_policy'?: string;
    public constructor() { 
    }
    public withBucketAcl(bucketAcl: string): OBSBucket {
        this['bucket_acl'] = bucketAcl;
        return this;
    }
    public set bucketAcl(bucketAcl: string  | undefined) {
        this['bucket_acl'] = bucketAcl;
    }
    public get bucketAcl(): string | undefined {
        return this['bucket_acl'];
    }
    public withBucketPolicy(bucketPolicy: string): OBSBucket {
        this['bucket_policy'] = bucketPolicy;
        return this;
    }
    public set bucketPolicy(bucketPolicy: string  | undefined) {
        this['bucket_policy'] = bucketPolicy;
    }
    public get bucketPolicy(): string | undefined {
        return this['bucket_policy'];
    }
}