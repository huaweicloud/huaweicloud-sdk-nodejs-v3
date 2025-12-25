

export class EnableDataTransformationRequest {
    private 'workspace_id'?: string;
    private 'data_transformation_id'?: string;
    public constructor(workspaceId?: string, dataTransformationId?: string) { 
        this['workspace_id'] = workspaceId;
        this['data_transformation_id'] = dataTransformationId;
    }
    public withWorkspaceId(workspaceId: string): EnableDataTransformationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataTransformationId(dataTransformationId: string): EnableDataTransformationRequest {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
}