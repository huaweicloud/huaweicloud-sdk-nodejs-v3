import { TablesList } from './TablesList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataTablesResponse extends SdkResponse {
    private 'total_count'?: number;
    public tables?: Array<TablesList>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDataTablesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTables(tables: Array<TablesList>): ListDataTablesResponse {
        this['tables'] = tables;
        return this;
    }
}