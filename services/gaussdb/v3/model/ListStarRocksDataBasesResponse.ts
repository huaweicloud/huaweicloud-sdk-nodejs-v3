
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStarRocksDataBasesResponse extends SdkResponse {
    public databases?: Array<string>;
    private 'total_count'?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<string>): ListStarRocksDataBasesResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ListStarRocksDataBasesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTimestamp(timestamp: number): ListStarRocksDataBasesResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}