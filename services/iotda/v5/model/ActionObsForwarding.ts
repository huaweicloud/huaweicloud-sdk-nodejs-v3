

export class ActionObsForwarding {
    private 'region_name': string | undefined;
    private 'project_id': string | undefined;
    private 'bucket_name': string | undefined;
    public location?: string;
    public constructor(regionName?: any, projectId?: any, bucketName?: any) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['bucket_name'] = bucketName;
    }
    public withRegionName(regionName: string): ActionObsForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionObsForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBucketName(bucketName: string): ActionObsForwarding {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withLocation(location: string): ActionObsForwarding {
        this['location'] = location;
        return this;
    }
}