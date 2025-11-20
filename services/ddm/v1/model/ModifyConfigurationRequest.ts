import { ParaGroupUpdate } from './ParaGroupUpdate';


export class ModifyConfigurationRequest {
    private 'instance_id'?: string;
    public body?: ParaGroupUpdate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyConfigurationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ParaGroupUpdate): ModifyConfigurationRequest {
        this['body'] = body;
        return this;
    }
}