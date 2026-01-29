import { CreateAnalysisRequestBody } from './CreateAnalysisRequestBody';


export class CreateSearchAnalysisRequest {
    private 'workspace_id'?: string;
    public body?: CreateAnalysisRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateSearchAnalysisRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateAnalysisRequestBody): CreateSearchAnalysisRequest {
        this['body'] = body;
        return this;
    }
}