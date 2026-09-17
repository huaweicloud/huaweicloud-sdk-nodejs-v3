

export class ListObsObjectsRequest {
    private 'instance_id'?: string;
    private 'bucket_name'?: string;
    private 'max_keys'?: number;
    public marker?: string;
    public prefix?: string;
    public constructor(instanceId?: string, bucketName?: string, maxKeys?: number, marker?: string, prefix?: string) { 
        this['instance_id'] = instanceId;
        this['bucket_name'] = bucketName;
        this['max_keys'] = maxKeys;
        this['marker'] = marker;
        this['prefix'] = prefix;
    }
    public withInstanceId(instanceId: string): ListObsObjectsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBucketName(bucketName: string): ListObsObjectsRequest {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withMaxKeys(maxKeys: number): ListObsObjectsRequest {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
    public withMarker(marker: string): ListObsObjectsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPrefix(prefix: string): ListObsObjectsRequest {
        this['prefix'] = prefix;
        return this;
    }
}