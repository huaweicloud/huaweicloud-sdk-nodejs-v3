import { RoleActionQueryDTO } from './RoleActionQueryDTO';


export class ListSecurityRoleActionsRequest {
    public workspace?: string;
    public body?: RoleActionQueryDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityRoleActionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: RoleActionQueryDTO): ListSecurityRoleActionsRequest {
        this['body'] = body;
        return this;
    }
}