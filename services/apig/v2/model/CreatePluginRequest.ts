import { PluginCreate } from './PluginCreate';


export class CreatePluginRequest {
    private 'instance_id'?: string;
    public body?: PluginCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreatePluginRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PluginCreate): CreatePluginRequest {
        this['body'] = body;
        return this;
    }
}