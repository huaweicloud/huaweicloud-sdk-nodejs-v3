

export class UpdateSnapshotSettingReq {
    public bucket?: string;
    public agency?: string;
    private 'base_path'?: string;
    private 'max_snapshot_bytes_per_seconds'?: string;
    private 'max_restore_bytes_per_seconds'?: string;
    public enable?: string;
    public indices?: string;
    public prefix?: string;
    public period?: string;
    public keepday?: number;
    public frequency?: string;
    private 'delete_auto'?: string;
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
    public withMaxSnapshotBytesPerSeconds(maxSnapshotBytesPerSeconds: string): UpdateSnapshotSettingReq {
        this['max_snapshot_bytes_per_seconds'] = maxSnapshotBytesPerSeconds;
        return this;
    }
    public set maxSnapshotBytesPerSeconds(maxSnapshotBytesPerSeconds: string  | undefined) {
        this['max_snapshot_bytes_per_seconds'] = maxSnapshotBytesPerSeconds;
    }
    public get maxSnapshotBytesPerSeconds(): string | undefined {
        return this['max_snapshot_bytes_per_seconds'];
    }
    public withMaxRestoreBytesPerSeconds(maxRestoreBytesPerSeconds: string): UpdateSnapshotSettingReq {
        this['max_restore_bytes_per_seconds'] = maxRestoreBytesPerSeconds;
        return this;
    }
    public set maxRestoreBytesPerSeconds(maxRestoreBytesPerSeconds: string  | undefined) {
        this['max_restore_bytes_per_seconds'] = maxRestoreBytesPerSeconds;
    }
    public get maxRestoreBytesPerSeconds(): string | undefined {
        return this['max_restore_bytes_per_seconds'];
    }
    public withEnable(enable: string): UpdateSnapshotSettingReq {
        this['enable'] = enable;
        return this;
    }
    public withIndices(indices: string): UpdateSnapshotSettingReq {
        this['indices'] = indices;
        return this;
    }
    public withPrefix(prefix: string): UpdateSnapshotSettingReq {
        this['prefix'] = prefix;
        return this;
    }
    public withPeriod(period: string): UpdateSnapshotSettingReq {
        this['period'] = period;
        return this;
    }
    public withKeepday(keepday: number): UpdateSnapshotSettingReq {
        this['keepday'] = keepday;
        return this;
    }
    public withFrequency(frequency: string): UpdateSnapshotSettingReq {
        this['frequency'] = frequency;
        return this;
    }
    public withDeleteAuto(deleteAuto: string): UpdateSnapshotSettingReq {
        this['delete_auto'] = deleteAuto;
        return this;
    }
    public set deleteAuto(deleteAuto: string  | undefined) {
        this['delete_auto'] = deleteAuto;
    }
    public get deleteAuto(): string | undefined {
        return this['delete_auto'];
    }
}