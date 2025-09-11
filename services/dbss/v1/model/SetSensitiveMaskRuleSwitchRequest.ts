import { BatchSwitchesRequestNew } from './BatchSwitchesRequestNew';


export class SetSensitiveMaskRuleSwitchRequest {
    private 'instance_id'?: string;
    public body?: BatchSwitchesRequestNew;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSensitiveMaskRuleSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchSwitchesRequestNew): SetSensitiveMaskRuleSwitchRequest {
        this['body'] = body;
        return this;
    }
}