import { RdsDbListResponseDatabases } from './RdsDbListResponseDatabases';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRdsDatabasesResponse extends SdkResponse {
    public databases?: Array<RdsDbListResponseDatabases>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<RdsDbListResponseDatabases>): ListRdsDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListRdsDatabasesResponse {
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