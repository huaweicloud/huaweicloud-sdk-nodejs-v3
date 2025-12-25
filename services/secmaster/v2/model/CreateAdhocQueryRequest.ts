import { CreateAdhocQueryRequestBody } from './CreateAdhocQueryRequestBody';


export class CreateAdhocQueryRequest {
    private 'workspace_id'?: string;
    public body?: CreateAdhocQueryRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateAdhocQueryRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateAdhocQueryRequestBody): CreateAdhocQueryRequest {
        this['body'] = body;
        return this;
    }
}