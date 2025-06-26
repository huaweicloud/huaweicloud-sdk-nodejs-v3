import { UpdateLongTermCredentialRequestBody } from './UpdateLongTermCredentialRequestBody';


export class UpdateInstanceLtCredentialRequest {
    private 'instance_id'?: string;
    private 'credential_id'?: string;
    public body?: UpdateLongTermCredentialRequestBody;
    public constructor(instanceId?: string, credentialId?: string) { 
        this['instance_id'] = instanceId;
        this['credential_id'] = credentialId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceLtCredentialRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCredentialId(credentialId: string): UpdateInstanceLtCredentialRequest {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
    public withBody(body: UpdateLongTermCredentialRequestBody): UpdateInstanceLtCredentialRequest {
        this['body'] = body;
        return this;
    }
}