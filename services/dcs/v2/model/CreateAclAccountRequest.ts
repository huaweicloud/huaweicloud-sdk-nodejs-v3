import { CreateAclAccountRequestBody } from './CreateAclAccountRequestBody';


export class CreateAclAccountRequest {
    private 'instance_id'?: string;
    public body?: CreateAclAccountRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAclAccountRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateAclAccountRequestBody): CreateAclAccountRequest {
        this['body'] = body;
        return this;
    }
}