import { ChDatabaseTableConfigCheckResult } from './ChDatabaseTableConfigCheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckClickHouseTableConfigResponse extends SdkResponse {
    private 'source_database_name'?: string;
    private 'table_config_check_results'?: Array<ChDatabaseTableConfigCheckResult>;
    public constructor() { 
        super();
    }
    public withSourceDatabaseName(sourceDatabaseName: string): CheckClickHouseTableConfigResponse {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withTableConfigCheckResults(tableConfigCheckResults: Array<ChDatabaseTableConfigCheckResult>): CheckClickHouseTableConfigResponse {
        this['table_config_check_results'] = tableConfigCheckResults;
        return this;
    }
    public set tableConfigCheckResults(tableConfigCheckResults: Array<ChDatabaseTableConfigCheckResult>  | undefined) {
        this['table_config_check_results'] = tableConfigCheckResults;
    }
    public get tableConfigCheckResults(): Array<ChDatabaseTableConfigCheckResult> | undefined {
        return this['table_config_check_results'];
    }
}