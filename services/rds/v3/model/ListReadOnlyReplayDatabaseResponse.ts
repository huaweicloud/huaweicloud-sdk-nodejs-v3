import { DelayRestoreDatabase } from './DelayRestoreDatabase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReadOnlyReplayDatabaseResponse extends SdkResponse {
    private 'database_limit'?: number;
    private 'total_tables'?: number;
    private 'table_limit'?: number;
    public databases?: Array<DelayRestoreDatabase>;
    public constructor() { 
        super();
    }
    public withDatabaseLimit(databaseLimit: number): ListReadOnlyReplayDatabaseResponse {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withTotalTables(totalTables: number): ListReadOnlyReplayDatabaseResponse {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withTableLimit(tableLimit: number): ListReadOnlyReplayDatabaseResponse {
        this['table_limit'] = tableLimit;
        return this;
    }
    public set tableLimit(tableLimit: number  | undefined) {
        this['table_limit'] = tableLimit;
    }
    public get tableLimit(): number | undefined {
        return this['table_limit'];
    }
    public withDatabases(databases: Array<DelayRestoreDatabase>): ListReadOnlyReplayDatabaseResponse {
        this['databases'] = databases;
        return this;
    }
}