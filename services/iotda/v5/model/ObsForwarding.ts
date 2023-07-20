

export class ObsForwarding {
    private 'region_name'?: string;
    private 'project_id'?: string;
    private 'bucket_name'?: string;
    public location?: string;
    private 'file_path'?: string;
    public constructor(regionName?: string, projectId?: string, bucketName?: string) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['bucket_name'] = bucketName;
    }
    public withRegionName(regionName: string): ObsForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ObsForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBucketName(bucketName: string): ObsForwarding {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withLocation(location: string): ObsForwarding {
        this['location'] = location;
        return this;
    }
    public withFilePath(filePath: string): ObsForwarding {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}