import { SwitchStatus } from './SwitchStatus';


export class SetSensitiveSwitchRequest {
    private 'instance_id'?: string;
    public body?: SwitchStatus;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSensitiveSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchStatus): SetSensitiveSwitchRequest {
        this['body'] = body;
        return this;
    }
}