

export class ListDataclassFieldsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'is_built_in'?: boolean;
    private 'dataclass_id'?: string;
    private 'field_category'?: string;
    public mapping?: boolean;
    public constructor(contentType?: string, workspaceId?: string, dataclassId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_id'] = dataclassId;
    }
    public withContentType(contentType: string): ListDataclassFieldsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListDataclassFieldsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListDataclassFieldsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDataclassFieldsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListDataclassFieldsRequest {
        this['name'] = name;
        return this;
    }
    public withIsBuiltIn(isBuiltIn: boolean): ListDataclassFieldsRequest {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withDataclassId(dataclassId: string): ListDataclassFieldsRequest {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withFieldCategory(fieldCategory: string): ListDataclassFieldsRequest {
        this['field_category'] = fieldCategory;
        return this;
    }
    public set fieldCategory(fieldCategory: string  | undefined) {
        this['field_category'] = fieldCategory;
    }
    public get fieldCategory(): string | undefined {
        return this['field_category'];
    }
    public withMapping(mapping: boolean): ListDataclassFieldsRequest {
        this['mapping'] = mapping;
        return this;
    }
}