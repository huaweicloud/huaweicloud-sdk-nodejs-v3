import { ChangeSecurityGroupRequest } from './ChangeSecurityGroupRequest';


export class ChangeDbEncryptSecurityGroupRequest {
    private 'instance_id'?: string;
    public body?: ChangeSecurityGroupRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeDbEncryptSecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeSecurityGroupRequest): ChangeDbEncryptSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}