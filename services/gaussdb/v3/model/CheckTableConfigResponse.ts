import { TableConfigCheckResult } from './TableConfigCheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckTableConfigResponse extends SdkResponse {
    private 'source_database_name'?: string;
    private 'target_database_name'?: string;
    private 'tbl_config_check_results'?: Array<TableConfigCheckResult>;
    private 'task_name'?: string;
    public constructor() { 
        super();
    }
    public withSourceDatabaseName(sourceDatabaseName: string): CheckTableConfigResponse {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withTargetDatabaseName(targetDatabaseName: string): CheckTableConfigResponse {
        this['target_database_name'] = targetDatabaseName;
        return this;
    }
    public set targetDatabaseName(targetDatabaseName: string  | undefined) {
        this['target_database_name'] = targetDatabaseName;
    }
    public get targetDatabaseName(): string | undefined {
        return this['target_database_name'];
    }
    public withTblConfigCheckResults(tblConfigCheckResults: Array<TableConfigCheckResult>): CheckTableConfigResponse {
        this['tbl_config_check_results'] = tblConfigCheckResults;
        return this;
    }
    public set tblConfigCheckResults(tblConfigCheckResults: Array<TableConfigCheckResult>  | undefined) {
        this['tbl_config_check_results'] = tblConfigCheckResults;
    }
    public get tblConfigCheckResults(): Array<TableConfigCheckResult> | undefined {
        return this['tbl_config_check_results'];
    }
    public withTaskName(taskName: string): CheckTableConfigResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}