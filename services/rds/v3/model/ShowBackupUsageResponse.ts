
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupUsageResponse extends SdkResponse {
    private 'backup_use_space'?: number;
    private 'db_use_space'?: number;
    private 'rds_snapshot_use_space'?: number;
    private 'offsite_use_space'?: number;
    public constructor() { 
        super();
    }
    public withBackupUseSpace(backupUseSpace: number): ShowBackupUsageResponse {
        this['backup_use_space'] = backupUseSpace;
        return this;
    }
    public set backupUseSpace(backupUseSpace: number  | undefined) {
        this['backup_use_space'] = backupUseSpace;
    }
    public get backupUseSpace(): number | undefined {
        return this['backup_use_space'];
    }
    public withDbUseSpace(dbUseSpace: number): ShowBackupUsageResponse {
        this['db_use_space'] = dbUseSpace;
        return this;
    }
    public set dbUseSpace(dbUseSpace: number  | undefined) {
        this['db_use_space'] = dbUseSpace;
    }
    public get dbUseSpace(): number | undefined {
        return this['db_use_space'];
    }
    public withRdsSnapshotUseSpace(rdsSnapshotUseSpace: number): ShowBackupUsageResponse {
        this['rds_snapshot_use_space'] = rdsSnapshotUseSpace;
        return this;
    }
    public set rdsSnapshotUseSpace(rdsSnapshotUseSpace: number  | undefined) {
        this['rds_snapshot_use_space'] = rdsSnapshotUseSpace;
    }
    public get rdsSnapshotUseSpace(): number | undefined {
        return this['rds_snapshot_use_space'];
    }
    public withOffsiteUseSpace(offsiteUseSpace: number): ShowBackupUsageResponse {
        this['offsite_use_space'] = offsiteUseSpace;
        return this;
    }
    public set offsiteUseSpace(offsiteUseSpace: number  | undefined) {
        this['offsite_use_space'] = offsiteUseSpace;
    }
    public get offsiteUseSpace(): number | undefined {
        return this['offsite_use_space'];
    }
}