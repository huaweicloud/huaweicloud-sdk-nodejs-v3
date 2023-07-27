

export class DeleteSignatureKeyV2Request {
    private 'instance_id'?: string;
    private 'sign_id'?: string;
    public constructor(instanceId?: string, signId?: string) { 
        this['instance_id'] = instanceId;
        this['sign_id'] = signId;
    }
    public withInstanceId(instanceId: string): DeleteSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSignId(signId: string): DeleteSignatureKeyV2Request {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
}