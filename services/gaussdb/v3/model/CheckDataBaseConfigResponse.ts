import { DbConfigCheckResult } from './DbConfigCheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDataBaseConfigResponse extends SdkResponse {
    private 'source_database_name'?: string;
    private 'source_db_config_check_results'?: Array<DbConfigCheckResult>;
    private 'target_database_name'?: string;
    private 'target_db_config_check_results'?: Array<DbConfigCheckResult>;
    private 'task_name'?: string;
    public constructor() { 
        super();
    }
    public withSourceDatabaseName(sourceDatabaseName: string): CheckDataBaseConfigResponse {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withSourceDbConfigCheckResults(sourceDbConfigCheckResults: Array<DbConfigCheckResult>): CheckDataBaseConfigResponse {
        this['source_db_config_check_results'] = sourceDbConfigCheckResults;
        return this;
    }
    public set sourceDbConfigCheckResults(sourceDbConfigCheckResults: Array<DbConfigCheckResult>  | undefined) {
        this['source_db_config_check_results'] = sourceDbConfigCheckResults;
    }
    public get sourceDbConfigCheckResults(): Array<DbConfigCheckResult> | undefined {
        return this['source_db_config_check_results'];
    }
    public withTargetDatabaseName(targetDatabaseName: string): CheckDataBaseConfigResponse {
        this['target_database_name'] = targetDatabaseName;
        return this;
    }
    public set targetDatabaseName(targetDatabaseName: string  | undefined) {
        this['target_database_name'] = targetDatabaseName;
    }
    public get targetDatabaseName(): string | undefined {
        return this['target_database_name'];
    }
    public withTargetDbConfigCheckResults(targetDbConfigCheckResults: Array<DbConfigCheckResult>): CheckDataBaseConfigResponse {
        this['target_db_config_check_results'] = targetDbConfigCheckResults;
        return this;
    }
    public set targetDbConfigCheckResults(targetDbConfigCheckResults: Array<DbConfigCheckResult>  | undefined) {
        this['target_db_config_check_results'] = targetDbConfigCheckResults;
    }
    public get targetDbConfigCheckResults(): Array<DbConfigCheckResult> | undefined {
        return this['target_db_config_check_results'];
    }
    public withTaskName(taskName: string): CheckDataBaseConfigResponse {
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