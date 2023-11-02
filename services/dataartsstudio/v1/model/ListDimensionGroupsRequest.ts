

export class ListDimensionGroupsRequest {
    public workspace?: string;
    private 'table_id'?: number;
    private 'biz_type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDimensionGroupsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTableId(tableId: number): ListDimensionGroupsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
        return this['table_id'];
    }
    public withBizType(bizType: string): ListDimensionGroupsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
    public withLimit(limit: number): ListDimensionGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDimensionGroupsRequest {
        this['offset'] = offset;
        return this;
    }
}