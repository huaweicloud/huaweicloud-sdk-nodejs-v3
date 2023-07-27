

export class DisassociateSignatureKeyV2Request {
    private 'instance_id'?: string;
    private 'sign_bindings_id'?: string;
    public constructor(instanceId?: string, signBindingsId?: string) { 
        this['instance_id'] = instanceId;
        this['sign_bindings_id'] = signBindingsId;
    }
    public withInstanceId(instanceId: string): DisassociateSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSignBindingsId(signBindingsId: string): DisassociateSignatureKeyV2Request {
        this['sign_bindings_id'] = signBindingsId;
        return this;
    }
    public set signBindingsId(signBindingsId: string  | undefined) {
        this['sign_bindings_id'] = signBindingsId;
    }
    public get signBindingsId(): string | undefined {
        return this['sign_bindings_id'];
    }
}