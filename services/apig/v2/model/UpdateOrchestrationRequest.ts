import { OrchestrationCreate } from './OrchestrationCreate';


export class UpdateOrchestrationRequest {
    private 'instance_id'?: string;
    private 'orchestration_id'?: string;
    public body?: OrchestrationCreate;
    public constructor(instanceId?: string, orchestrationId?: string) { 
        this['instance_id'] = instanceId;
        this['orchestration_id'] = orchestrationId;
    }
    public withInstanceId(instanceId: string): UpdateOrchestrationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrchestrationId(orchestrationId: string): UpdateOrchestrationRequest {
        this['orchestration_id'] = orchestrationId;
        return this;
    }
    public set orchestrationId(orchestrationId: string  | undefined) {
        this['orchestration_id'] = orchestrationId;
    }
    public get orchestrationId(): string | undefined {
        return this['orchestration_id'];
    }
    public withBody(body: OrchestrationCreate): UpdateOrchestrationRequest {
        this['body'] = body;
        return this;
    }
}