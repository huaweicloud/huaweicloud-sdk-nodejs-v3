

export class ListDimensionGroupsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'table_id'?: string;
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
    public withXProjectId(xProjectId: string): ListDimensionGroupsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListDimensionGroupsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTableId(tableId: string): ListDimensionGroupsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
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