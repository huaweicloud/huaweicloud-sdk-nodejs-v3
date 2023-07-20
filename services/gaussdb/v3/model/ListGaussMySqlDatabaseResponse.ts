import { ListGaussMysqlDatabaseInfo } from './ListGaussMysqlDatabaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlDatabaseResponse extends SdkResponse {
    public databases?: Array<ListGaussMysqlDatabaseInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<ListGaussMysqlDatabaseInfo>): ListGaussMySqlDatabaseResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListGaussMySqlDatabaseResponse {
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