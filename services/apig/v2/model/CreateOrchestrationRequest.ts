import { OrchestrationCreate } from './OrchestrationCreate';


export class CreateOrchestrationRequest {
    private 'instance_id'?: string;
    public body?: OrchestrationCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateOrchestrationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: OrchestrationCreate): CreateOrchestrationRequest {
        this['body'] = body;
        return this;
    }
}