import { ColumnsList } from './ColumnsList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListColumnsResponse extends SdkResponse {
    private 'table_id'?: string;
    private 'total_count'?: number;
    public columns?: Array<ColumnsList>;
    public constructor() { 
        super();
    }
    public withTableId(tableId: string): ListColumnsResponse {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTotalCount(totalCount: number): ListColumnsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withColumns(columns: Array<ColumnsList>): ListColumnsResponse {
        this['columns'] = columns;
        return this;
    }
}