import { BaseSignature } from './BaseSignature';


export class UpdateSignatureKeyV2Request {
    private 'instance_id'?: string;
    private 'sign_id'?: string;
    public body?: BaseSignature;
    public constructor(instanceId?: string, signId?: string) { 
        this['instance_id'] = instanceId;
        this['sign_id'] = signId;
    }
    public withInstanceId(instanceId: string): UpdateSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSignId(signId: string): UpdateSignatureKeyV2Request {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withBody(body: BaseSignature): UpdateSignatureKeyV2Request {
        this['body'] = body;
        return this;
    }
}