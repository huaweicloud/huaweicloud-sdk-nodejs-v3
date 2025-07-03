

export class UpdateSnapshotSettingReq {
    public bucket?: string;
    public agency?: string;
    private 'base_path'?: string;
    public constructor(bucket?: string, agency?: string, basePath?: string) { 
        this['bucket'] = bucket;
        this['agency'] = agency;
        this['base_path'] = basePath;
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
        this['base_path'] = basePath;
        return this;
    }
    public set basePath(basePath: string  | undefined) {
        this['base_path'] = basePath;
    }
    public get basePath(): string | undefined {
        return this['base_path'];
    }
}