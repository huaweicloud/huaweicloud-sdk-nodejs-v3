import { BaseSignature } from './BaseSignature';


export class CreateSignatureKeyV2Request {
    private 'instance_id'?: string;
    public body?: BaseSignature;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BaseSignature): CreateSignatureKeyV2Request {
        this['body'] = body;
        return this;
    }
}