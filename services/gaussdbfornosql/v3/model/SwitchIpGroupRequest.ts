import { SwitchIpGroupRequestBody } from './SwitchIpGroupRequestBody';


export class SwitchIpGroupRequest {
    private 'instance_id'?: string;
    public body?: SwitchIpGroupRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchIpGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchIpGroupRequestBody): SwitchIpGroupRequest {
        this['body'] = body;
        return this;
    }
}