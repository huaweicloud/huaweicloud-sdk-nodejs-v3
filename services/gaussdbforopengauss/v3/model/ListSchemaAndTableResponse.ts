import { DatabaseSchemaTableResult } from './DatabaseSchemaTableResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchemaAndTableResponse extends SdkResponse {
    private 'database_tables'?: Array<DatabaseSchemaTableResult>;
    public constructor() { 
        super();
    }
    public withDatabaseTables(databaseTables: Array<DatabaseSchemaTableResult>): ListSchemaAndTableResponse {
        this['database_tables'] = databaseTables;
        return this;
    }
    public set databaseTables(databaseTables: Array<DatabaseSchemaTableResult>  | undefined) {
        this['database_tables'] = databaseTables;
    }
    public get databaseTables(): Array<DatabaseSchemaTableResult> | undefined {
        return this['database_tables'];
    }
}