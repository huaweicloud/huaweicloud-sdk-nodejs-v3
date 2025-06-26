

export class DeleteInstanceLtCredentialRequest {
    private 'instance_id'?: string;
    private 'credential_id'?: string;
    public constructor(instanceId?: string, credentialId?: string) { 
        this['instance_id'] = instanceId;
        this['credential_id'] = credentialId;
    }
    public withInstanceId(instanceId: string): DeleteInstanceLtCredentialRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCredentialId(credentialId: string): DeleteInstanceLtCredentialRequest {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
}