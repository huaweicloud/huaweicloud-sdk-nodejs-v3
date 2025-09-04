
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDatabasesForHtapResponse extends SdkResponse {
    public databases?: Array<string>;
    private 'total_count'?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<string>): ShowInstanceDatabasesForHtapResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): ShowInstanceDatabasesForHtapResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTimestamp(timestamp: number): ShowInstanceDatabasesForHtapResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}