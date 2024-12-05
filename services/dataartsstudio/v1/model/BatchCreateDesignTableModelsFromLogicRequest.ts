import { WorkspaceTransformVO } from './WorkspaceTransformVO';


export class BatchCreateDesignTableModelsFromLogicRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'model_id'?: string;
    public body?: WorkspaceTransformVO;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): BatchCreateDesignTableModelsFromLogicRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): BatchCreateDesignTableModelsFromLogicRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): BatchCreateDesignTableModelsFromLogicRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withModelId(modelId: string): BatchCreateDesignTableModelsFromLogicRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withBody(body: WorkspaceTransformVO): BatchCreateDesignTableModelsFromLogicRequest {
        this['body'] = body;
        return this;
    }
}