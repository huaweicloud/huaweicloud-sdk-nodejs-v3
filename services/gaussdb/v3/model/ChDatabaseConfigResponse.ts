import { ChDatabaseConfigCheckResult } from './ChDatabaseConfigCheckResult';


export class ChDatabaseConfigResponse {
    private 'database_name'?: string;
    private 'db_config_check_results'?: Array<ChDatabaseConfigCheckResult>;
    public constructor(databaseName?: string, dbConfigCheckResults?: Array<ChDatabaseConfigCheckResult>) { 
        this['database_name'] = databaseName;
        this['db_config_check_results'] = dbConfigCheckResults;
    }
    public withDatabaseName(databaseName: string): ChDatabaseConfigResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDbConfigCheckResults(dbConfigCheckResults: Array<ChDatabaseConfigCheckResult>): ChDatabaseConfigResponse {
        this['db_config_check_results'] = dbConfigCheckResults;
        return this;
    }
    public set dbConfigCheckResults(dbConfigCheckResults: Array<ChDatabaseConfigCheckResult>  | undefined) {
        this['db_config_check_results'] = dbConfigCheckResults;
    }
    public get dbConfigCheckResults(): Array<ChDatabaseConfigCheckResult> | undefined {
        return this['db_config_check_results'];
    }
}