import { CreateLongTermCredentialRequestBody } from './CreateLongTermCredentialRequestBody';


export class CreateInstanceLtCredentialRequest {
    private 'instance_id'?: string;
    public body?: CreateLongTermCredentialRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceLtCredentialRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateLongTermCredentialRequestBody): CreateInstanceLtCredentialRequest {
        this['body'] = body;
        return this;
    }
}