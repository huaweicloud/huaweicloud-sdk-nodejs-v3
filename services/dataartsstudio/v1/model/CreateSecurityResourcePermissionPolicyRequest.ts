import { PermissionResourcePolicyCreateDTO } from './PermissionResourcePolicyCreateDTO';


export class CreateSecurityResourcePermissionPolicyRequest {
    public workspace?: string;
    public body?: PermissionResourcePolicyCreateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityResourcePermissionPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionResourcePolicyCreateDTO): CreateSecurityResourcePermissionPolicyRequest {
        this['body'] = body;
        return this;
    }
}