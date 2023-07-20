
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreDatabasesResponse extends SdkResponse {
    private 'total_count'?: number;
    public databases?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRestoreDatabasesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDatabases(databases: Array<string>): ListRestoreDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
}