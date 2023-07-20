

export class TrackerOBSChannelConfigBody {
    private 'bucket_name'?: string;
    private 'region_id'?: string;
    public constructor(bucketName?: string, regionId?: string) { 
        this['bucket_name'] = bucketName;
        this['region_id'] = regionId;
    }
    public withBucketName(bucketName: string): TrackerOBSChannelConfigBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withRegionId(regionId: string): TrackerOBSChannelConfigBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}