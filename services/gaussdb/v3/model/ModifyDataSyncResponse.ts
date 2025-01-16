import { DbConfigCheckResult } from './DbConfigCheckResult';
import { TableConfigCheckResult } from './TableConfigCheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyDataSyncResponse extends SdkResponse {
    private 'source_database_name'?: string;
    private 'target_database_name'?: string;
    private 'source_db_config_check_results'?: Array<DbConfigCheckResult>;
    private 'tbl_config_check_results'?: Array<TableConfigCheckResult>;
    private 'task_name'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withSourceDatabaseName(sourceDatabaseName: string): ModifyDataSyncResponse {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withTargetDatabaseName(targetDatabaseName: string): ModifyDataSyncResponse {
        this['target_database_name'] = targetDatabaseName;
        return this;
    }
    public set targetDatabaseName(targetDatabaseName: string  | undefined) {
        this['target_database_name'] = targetDatabaseName;
    }
    public get targetDatabaseName(): string | undefined {
        return this['target_database_name'];
    }
    public withSourceDbConfigCheckResults(sourceDbConfigCheckResults: Array<DbConfigCheckResult>): ModifyDataSyncResponse {
        this['source_db_config_check_results'] = sourceDbConfigCheckResults;
        return this;
    }
    public set sourceDbConfigCheckResults(sourceDbConfigCheckResults: Array<DbConfigCheckResult>  | undefined) {
        this['source_db_config_check_results'] = sourceDbConfigCheckResults;
    }
    public get sourceDbConfigCheckResults(): Array<DbConfigCheckResult> | undefined {
        return this['source_db_config_check_results'];
    }
    public withTblConfigCheckResults(tblConfigCheckResults: Array<TableConfigCheckResult>): ModifyDataSyncResponse {
        this['tbl_config_check_results'] = tblConfigCheckResults;
        return this;
    }
    public set tblConfigCheckResults(tblConfigCheckResults: Array<TableConfigCheckResult>  | undefined) {
        this['tbl_config_check_results'] = tblConfigCheckResults;
    }
    public get tblConfigCheckResults(): Array<TableConfigCheckResult> | undefined {
        return this['tbl_config_check_results'];
    }
    public withTaskName(taskName: string): ModifyDataSyncResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withJobId(jobId: string): ModifyDataSyncResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}