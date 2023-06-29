

export class TrackerOBSChannelConfigBody {
    private 'bucket_name': string | undefined;
    private 'region_id': string | undefined;
    public constructor(bucketName?: any, regionId?: any) { 
        this['bucket_name'] = bucketName;
        this['region_id'] = regionId;
    }
    public withBucketName(bucketName: string): TrackerOBSChannelConfigBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withRegionId(regionId: string): TrackerOBSChannelConfigBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
}