
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseDataBaseResponse extends SdkResponse {
    public databases?: Array<string>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<string>): ListClickHouseDataBaseResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListClickHouseDataBaseResponse {
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