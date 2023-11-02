import { WorkspaceVO } from './WorkspaceVO';


export class UpdateWorkspaceRequest {
    public workspace?: string;
    public body?: WorkspaceVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateWorkspaceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: WorkspaceVO): UpdateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}