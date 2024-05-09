import { DbConfigCheckResult } from './DbConfigCheckResult';


export class DataBaseInfo {
    private 'database_name'?: string;
    private 'db_config_check_results'?: Array<DbConfigCheckResult>;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): DataBaseInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDbConfigCheckResults(dbConfigCheckResults: Array<DbConfigCheckResult>): DataBaseInfo {
        this['db_config_check_results'] = dbConfigCheckResults;
        return this;
    }
    public set dbConfigCheckResults(dbConfigCheckResults: Array<DbConfigCheckResult>  | undefined) {
        this['db_config_check_results'] = dbConfigCheckResults;
    }
    public get dbConfigCheckResults(): Array<DbConfigCheckResult> | undefined {
        return this['db_config_check_results'];
    }
}