import { SwitchSlowlogDesensitizationRequestBody } from './SwitchSlowlogDesensitizationRequestBody';


export class SwitchSlowlogDesensitizationRequest {
    private 'instance_id'?: string;
    public body?: SwitchSlowlogDesensitizationRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchSlowlogDesensitizationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchSlowlogDesensitizationRequestBody): SwitchSlowlogDesensitizationRequest {
        this['body'] = body;
        return this;
    }
}