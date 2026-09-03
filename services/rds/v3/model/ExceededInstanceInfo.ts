

export class ExceededInstanceInfo {
    private 'instance_id'?: string;
    private 'obs_usage_gb'?: number;
    private 'obs_free_backup_space_gb'?: number;
    private 'snapshot_usage_gb'?: number;
    private 'snapshot_free_backup_space_gb'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ExceededInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withObsUsageGb(obsUsageGb: number): ExceededInstanceInfo {
        this['obs_usage_gb'] = obsUsageGb;
        return this;
    }
    public set obsUsageGb(obsUsageGb: number  | undefined) {
        this['obs_usage_gb'] = obsUsageGb;
    }
    public get obsUsageGb(): number | undefined {
        return this['obs_usage_gb'];
    }
    public withObsFreeBackupSpaceGb(obsFreeBackupSpaceGb: number): ExceededInstanceInfo {
        this['obs_free_backup_space_gb'] = obsFreeBackupSpaceGb;
        return this;
    }
    public set obsFreeBackupSpaceGb(obsFreeBackupSpaceGb: number  | undefined) {
        this['obs_free_backup_space_gb'] = obsFreeBackupSpaceGb;
    }
    public get obsFreeBackupSpaceGb(): number | undefined {
        return this['obs_free_backup_space_gb'];
    }
    public withSnapshotUsageGb(snapshotUsageGb: number): ExceededInstanceInfo {
        this['snapshot_usage_gb'] = snapshotUsageGb;
        return this;
    }
    public set snapshotUsageGb(snapshotUsageGb: number  | undefined) {
        this['snapshot_usage_gb'] = snapshotUsageGb;
    }
    public get snapshotUsageGb(): number | undefined {
        return this['snapshot_usage_gb'];
    }
    public withSnapshotFreeBackupSpaceGb(snapshotFreeBackupSpaceGb: number): ExceededInstanceInfo {
        this['snapshot_free_backup_space_gb'] = snapshotFreeBackupSpaceGb;
        return this;
    }
    public set snapshotFreeBackupSpaceGb(snapshotFreeBackupSpaceGb: number  | undefined) {
        this['snapshot_free_backup_space_gb'] = snapshotFreeBackupSpaceGb;
    }
    public get snapshotFreeBackupSpaceGb(): number | undefined {
        return this['snapshot_free_backup_space_gb'];
    }
}