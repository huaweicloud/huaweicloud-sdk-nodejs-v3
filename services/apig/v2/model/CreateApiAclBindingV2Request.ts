import { AclApiBindingCreate } from './AclApiBindingCreate';


export class CreateApiAclBindingV2Request {
    private 'instance_id'?: string;
    public body?: AclApiBindingCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateApiAclBindingV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AclApiBindingCreate): CreateApiAclBindingV2Request {
        this['body'] = body;
        return this;
    }
}