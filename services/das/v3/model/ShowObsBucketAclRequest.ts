

export class ShowObsBucketAclRequest {
    private 'instance_id'?: string;
    private 'bucket_name'?: string;
    public constructor(instanceId?: string, bucketName?: string) { 
        this['instance_id'] = instanceId;
        this['bucket_name'] = bucketName;
    }
    public withInstanceId(instanceId: string): ShowObsBucketAclRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBucketName(bucketName: string): ShowObsBucketAclRequest {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}