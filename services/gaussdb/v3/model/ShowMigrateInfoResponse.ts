
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrateInfoResponse extends SdkResponse {
    private 'rds_instance_id'?: string;
    private 'rds_status'?: string;
    private 'rds_instance_name'?: string;
    private 'drs_job_id'?: string;
    private 'drs_status'?: string;
    private 'rds_readwrite_mode'?: string;
    private 'taurus_readwrite_mode'?: string;
    private 'migration_direction'?: string;
    public constructor() { 
        super();
    }
    public withRdsInstanceId(rdsInstanceId: string): ShowMigrateInfoResponse {
        this['rds_instance_id'] = rdsInstanceId;
        return this;
    }
    public set rdsInstanceId(rdsInstanceId: string  | undefined) {
        this['rds_instance_id'] = rdsInstanceId;
    }
    public get rdsInstanceId(): string | undefined {
        return this['rds_instance_id'];
    }
    public withRdsStatus(rdsStatus: string): ShowMigrateInfoResponse {
        this['rds_status'] = rdsStatus;
        return this;
    }
    public set rdsStatus(rdsStatus: string  | undefined) {
        this['rds_status'] = rdsStatus;
    }
    public get rdsStatus(): string | undefined {
        return this['rds_status'];
    }
    public withRdsInstanceName(rdsInstanceName: string): ShowMigrateInfoResponse {
        this['rds_instance_name'] = rdsInstanceName;
        return this;
    }
    public set rdsInstanceName(rdsInstanceName: string  | undefined) {
        this['rds_instance_name'] = rdsInstanceName;
    }
    public get rdsInstanceName(): string | undefined {
        return this['rds_instance_name'];
    }
    public withDrsJobId(drsJobId: string): ShowMigrateInfoResponse {
        this['drs_job_id'] = drsJobId;
        return this;
    }
    public set drsJobId(drsJobId: string  | undefined) {
        this['drs_job_id'] = drsJobId;
    }
    public get drsJobId(): string | undefined {
        return this['drs_job_id'];
    }
    public withDrsStatus(drsStatus: string): ShowMigrateInfoResponse {
        this['drs_status'] = drsStatus;
        return this;
    }
    public set drsStatus(drsStatus: string  | undefined) {
        this['drs_status'] = drsStatus;
    }
    public get drsStatus(): string | undefined {
        return this['drs_status'];
    }
    public withRdsReadwriteMode(rdsReadwriteMode: string): ShowMigrateInfoResponse {
        this['rds_readwrite_mode'] = rdsReadwriteMode;
        return this;
    }
    public set rdsReadwriteMode(rdsReadwriteMode: string  | undefined) {
        this['rds_readwrite_mode'] = rdsReadwriteMode;
    }
    public get rdsReadwriteMode(): string | undefined {
        return this['rds_readwrite_mode'];
    }
    public withTaurusReadwriteMode(taurusReadwriteMode: string): ShowMigrateInfoResponse {
        this['taurus_readwrite_mode'] = taurusReadwriteMode;
        return this;
    }
    public set taurusReadwriteMode(taurusReadwriteMode: string  | undefined) {
        this['taurus_readwrite_mode'] = taurusReadwriteMode;
    }
    public get taurusReadwriteMode(): string | undefined {
        return this['taurus_readwrite_mode'];
    }
    public withMigrationDirection(migrationDirection: string): ShowMigrateInfoResponse {
        this['migration_direction'] = migrationDirection;
        return this;
    }
    public set migrationDirection(migrationDirection: string  | undefined) {
        this['migration_direction'] = migrationDirection;
    }
    public get migrationDirection(): string | undefined {
        return this['migration_direction'];
    }
}