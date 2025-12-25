import { CreateCloudLogResourceRequestBody } from './CreateCloudLogResourceRequestBody';


export class CreateResourceConfigRequest {
    private 'workspace_id'?: string;
    public body?: CreateCloudLogResourceRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateResourceConfigRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateCloudLogResourceRequestBody): CreateResourceConfigRequest {
        this['body'] = body;
        return this;
    }
}