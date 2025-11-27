import { SqlserverDatabaseForDetail } from './SqlserverDatabaseForDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRemoteDbResponse extends SdkResponse {
    public databases?: Array<SqlserverDatabaseForDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<SqlserverDatabaseForDetail>): ListRemoteDbResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListRemoteDbResponse {
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