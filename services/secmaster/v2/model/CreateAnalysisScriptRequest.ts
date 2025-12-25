import { CreateAnalysisScriptRequestBody } from './CreateAnalysisScriptRequestBody';


export class CreateAnalysisScriptRequest {
    private 'workspace_id'?: string;
    public body?: CreateAnalysisScriptRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateAnalysisScriptRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateAnalysisScriptRequestBody): CreateAnalysisScriptRequest {
        this['body'] = body;
        return this;
    }
}