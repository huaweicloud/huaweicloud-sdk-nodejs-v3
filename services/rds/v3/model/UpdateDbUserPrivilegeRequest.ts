import { DbUserPrivilegeRequest } from './DbUserPrivilegeRequest';


export class UpdateDbUserPrivilegeRequest {
    private 'instance_id'?: string;
    public body?: DbUserPrivilegeRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateDbUserPrivilegeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DbUserPrivilegeRequest): UpdateDbUserPrivilegeRequest {
        this['body'] = body;
        return this;
    }
}