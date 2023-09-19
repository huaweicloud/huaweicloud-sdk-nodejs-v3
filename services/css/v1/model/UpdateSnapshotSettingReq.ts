

export class UpdateSnapshotSettingReq {
    public bucket?: string;
    public agency?: string;
    public basePath?: string;
    public constructor(bucket?: string, agency?: string, basePath?: string) { 
        this['bucket'] = bucket;
        this['agency'] = agency;
        this['basePath'] = basePath;
    }
    public withBucket(bucket: string): UpdateSnapshotSettingReq {
        this['bucket'] = bucket;
        return this;
    }
    public withAgency(agency: string): UpdateSnapshotSettingReq {
        this['agency'] = agency;
        return this;
    }
    public withBasePath(basePath: string): UpdateSnapshotSettingReq {
        this['basePath'] = basePath;
        return this;
    }
}