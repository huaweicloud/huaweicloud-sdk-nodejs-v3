import { SwitchSecondLevelMonitoringRequestBody } from './SwitchSecondLevelMonitoringRequestBody';


export class SwitchSecondLevelMonitoringRequest {
    private 'instance_id'?: string;
    public body?: SwitchSecondLevelMonitoringRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchSecondLevelMonitoringRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchSecondLevelMonitoringRequestBody): SwitchSecondLevelMonitoringRequest {
        this['body'] = body;
        return this;
    }
}