import { SwitchStatus } from './SwitchStatus';


export class SetSensitiveResultSwitchRequest {
    private 'instance_id'?: string;
    public body?: SwitchStatus;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSensitiveResultSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchStatus): SetSensitiveResultSwitchRequest {
        this['body'] = body;
        return this;
    }
}