import { RedisModifyDBUserPrivilegeRequest } from './RedisModifyDBUserPrivilegeRequest';


export class ModifyDbUserPrivilegeRequest {
    private 'instance_id'?: string;
    public body?: RedisModifyDBUserPrivilegeRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyDbUserPrivilegeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RedisModifyDBUserPrivilegeRequest): ModifyDbUserPrivilegeRequest {
        this['body'] = body;
        return this;
    }
}