import { CheckCredentialRequestBody } from './CheckCredentialRequestBody';


export class CheckCredentialRequest {
    private 'instance_id'?: string;
    public body?: CheckCredentialRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckCredentialRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CheckCredentialRequestBody): CheckCredentialRequest {
        this['body'] = body;
        return this;
    }
}