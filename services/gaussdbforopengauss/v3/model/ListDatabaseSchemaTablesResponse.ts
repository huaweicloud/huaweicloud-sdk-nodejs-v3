import { DatabaseForListTableResult } from './DatabaseForListTableResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseSchemaTablesResponse extends SdkResponse {
    private 'database_tables'?: Array<DatabaseForListTableResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabaseTables(databaseTables: Array<DatabaseForListTableResult>): ListDatabaseSchemaTablesResponse {
        this['database_tables'] = databaseTables;
        return this;
    }
    public set databaseTables(databaseTables: Array<DatabaseForListTableResult>  | undefined) {
        this['database_tables'] = databaseTables;
    }
    public get databaseTables(): Array<DatabaseForListTableResult> | undefined {
        return this['database_tables'];
    }
    public withTotalCount(totalCount: number): ListDatabaseSchemaTablesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}