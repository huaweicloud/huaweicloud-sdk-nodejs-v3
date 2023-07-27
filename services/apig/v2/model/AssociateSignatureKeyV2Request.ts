import { SignApiBinding } from './SignApiBinding';


export class AssociateSignatureKeyV2Request {
    private 'instance_id'?: string;
    public body?: SignApiBinding;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AssociateSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SignApiBinding): AssociateSignatureKeyV2Request {
        this['body'] = body;
        return this;
    }
}