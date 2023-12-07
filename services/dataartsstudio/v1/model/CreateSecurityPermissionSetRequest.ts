import { PermissionSetCreateDTO } from './PermissionSetCreateDTO';


export class CreateSecurityPermissionSetRequest {
    public workspace?: string;
    public body?: PermissionSetCreateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityPermissionSetRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetCreateDTO): CreateSecurityPermissionSetRequest {
        this['body'] = body;
        return this;
    }
}