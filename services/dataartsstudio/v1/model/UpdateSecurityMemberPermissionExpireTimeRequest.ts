import { BatchUpdatePermissionExpireTimeDTO } from './BatchUpdatePermissionExpireTimeDTO';


export class UpdateSecurityMemberPermissionExpireTimeRequest {
    public workspace?: string;
    public body?: BatchUpdatePermissionExpireTimeDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateSecurityMemberPermissionExpireTimeRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchUpdatePermissionExpireTimeDTO): UpdateSecurityMemberPermissionExpireTimeRequest {
        this['body'] = body;
        return this;
    }
}