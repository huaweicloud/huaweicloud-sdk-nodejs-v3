

export class RemoveDesignQualityInfosRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'table_id'?: string;
    private 'table_type'?: string;
    public constructor(workspace?: string, tableId?: string, tableType?: string) { 
        this['workspace'] = workspace;
        this['table_id'] = tableId;
        this['table_type'] = tableType;
    }
    public withWorkspace(workspace: string): RemoveDesignQualityInfosRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): RemoveDesignQualityInfosRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): RemoveDesignQualityInfosRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTableId(tableId: string): RemoveDesignQualityInfosRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableType(tableType: string): RemoveDesignQualityInfosRequest {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
}