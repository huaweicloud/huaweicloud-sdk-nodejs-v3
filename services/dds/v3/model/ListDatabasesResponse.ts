import { DatabaseInfoItem } from './DatabaseInfoItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabasesResponse extends SdkResponse {
    public databases?: Array<DatabaseInfoItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<DatabaseInfoItem>): ListDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListDatabasesResponse {
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