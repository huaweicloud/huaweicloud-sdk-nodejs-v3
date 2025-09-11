import { MaskRuleRequest } from './MaskRuleRequest';


export class CreateSensitiveMaskRuleRequest {
    private 'instance_id'?: string;
    public body?: MaskRuleRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSensitiveMaskRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MaskRuleRequest): CreateSensitiveMaskRuleRequest {
        this['body'] = body;
        return this;
    }
}