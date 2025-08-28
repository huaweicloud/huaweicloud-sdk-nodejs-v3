import { AdminUserInfoReq } from './AdminUserInfoReq';


export class ResetAdministratorRequest {
    private 'instance_id'?: string;
    public body?: AdminUserInfoReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetAdministratorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AdminUserInfoReq): ResetAdministratorRequest {
        this['body'] = body;
        return this;
    }
}