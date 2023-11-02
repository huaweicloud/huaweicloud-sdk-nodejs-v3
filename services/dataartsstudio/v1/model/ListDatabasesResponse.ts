import { DatabasesList } from './DatabasesList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabasesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'dw_id'?: string;
    public databases?: Array<DatabasesList>;
    public constructor() { 
        super();
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
    public withDwId(dwId: string): ListDatabasesResponse {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDatabases(databases: Array<DatabasesList>): ListDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
}