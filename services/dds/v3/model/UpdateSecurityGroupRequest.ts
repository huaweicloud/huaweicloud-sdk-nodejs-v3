import { UpdateSecurityGroupRequestBody } from './UpdateSecurityGroupRequestBody';


export class UpdateSecurityGroupRequest {
    private 'instance_id'?: string;
    public body?: UpdateSecurityGroupRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateSecurityGroupRequestBody): UpdateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}