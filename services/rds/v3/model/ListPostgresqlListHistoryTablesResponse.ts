import { PostgreSQLHistoryTableInstance } from './PostgreSQLHistoryTableInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlListHistoryTablesResponse extends SdkResponse {
    private 'table_limit'?: number;
    public instances?: Array<PostgreSQLHistoryTableInstance>;
    public constructor() { 
        super();
    }
    public withTableLimit(tableLimit: number): ListPostgresqlListHistoryTablesResponse {
        this['table_limit'] = tableLimit;
        return this;
    }
    public set tableLimit(tableLimit: number  | undefined) {
        this['table_limit'] = tableLimit;
    }
    public get tableLimit(): number | undefined {
        return this['table_limit'];
    }
    public withInstances(instances: Array<PostgreSQLHistoryTableInstance>): ListPostgresqlListHistoryTablesResponse {
        this['instances'] = instances;
        return this;
    }
}