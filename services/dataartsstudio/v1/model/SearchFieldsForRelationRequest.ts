

export class SearchFieldsForRelationRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    private 'model_id'?: string;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): SearchFieldsForRelationRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): SearchFieldsForRelationRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): SearchFieldsForRelationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): SearchFieldsForRelationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchFieldsForRelationRequest {
        this['offset'] = offset;
        return this;
    }
    public withModelId(modelId: string): SearchFieldsForRelationRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}