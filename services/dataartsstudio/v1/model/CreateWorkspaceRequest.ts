import { WorkspaceVO } from './WorkspaceVO';


export class CreateWorkspaceRequest {
    public workspace?: string;
    public body?: WorkspaceVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateWorkspaceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: WorkspaceVO): CreateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}