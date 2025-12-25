

export class ListDataclassRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'business_code'?: string;
    public description?: string;
    private 'is_built_in'?: boolean;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListDataclassRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListDataclassRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListDataclassRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDataclassRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListDataclassRequest {
        this['name'] = name;
        return this;
    }
    public withBusinessCode(businessCode: string): ListDataclassRequest {
        this['business_code'] = businessCode;
        return this;
    }
    public set businessCode(businessCode: string  | undefined) {
        this['business_code'] = businessCode;
    }
    public get businessCode(): string | undefined {
        return this['business_code'];
    }
    public withDescription(description: string): ListDataclassRequest {
        this['description'] = description;
        return this;
    }
    public withIsBuiltIn(isBuiltIn: boolean): ListDataclassRequest {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
}