import { HistoryDatabaseInstance } from './HistoryDatabaseInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryDatabaseResponse extends SdkResponse {
    private 'database_limit'?: number;
    private 'table_limit'?: number;
    public instances?: Array<HistoryDatabaseInstance>;
    public constructor() { 
        super();
    }
    public withDatabaseLimit(databaseLimit: number): ListHistoryDatabaseResponse {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withTableLimit(tableLimit: number): ListHistoryDatabaseResponse {
        this['table_limit'] = tableLimit;
        return this;
    }
    public set tableLimit(tableLimit: number  | undefined) {
        this['table_limit'] = tableLimit;
    }
    public get tableLimit(): number | undefined {
        return this['table_limit'];
    }
    public withInstances(instances: Array<HistoryDatabaseInstance>): ListHistoryDatabaseResponse {
        this['instances'] = instances;
        return this;
    }
}