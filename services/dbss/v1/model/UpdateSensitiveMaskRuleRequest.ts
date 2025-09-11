import { MaskRuleRequest } from './MaskRuleRequest';


export class UpdateSensitiveMaskRuleRequest {
    private 'instance_id'?: string;
    public id?: string;
    public body?: MaskRuleRequest;
    public constructor(instanceId?: string, id?: string) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): UpdateSensitiveMaskRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): UpdateSensitiveMaskRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: MaskRuleRequest): UpdateSensitiveMaskRuleRequest {
        this['body'] = body;
        return this;
    }
}