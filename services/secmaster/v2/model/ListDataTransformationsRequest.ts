

export class ListDataTransformationsRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'output_table_id'?: string;
    private 'data_transformation_name'?: string;
    private 'data_transformation_id'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListDataTransformationsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListDataTransformationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDataTransformationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOutputTableId(outputTableId: string): ListDataTransformationsRequest {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withDataTransformationName(dataTransformationName: string): ListDataTransformationsRequest {
        this['data_transformation_name'] = dataTransformationName;
        return this;
    }
    public set dataTransformationName(dataTransformationName: string  | undefined) {
        this['data_transformation_name'] = dataTransformationName;
    }
    public get dataTransformationName(): string | undefined {
        return this['data_transformation_name'];
    }
    public withDataTransformationId(dataTransformationId: string): ListDataTransformationsRequest {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withSortKey(sortKey: string): ListDataTransformationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListDataTransformationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}