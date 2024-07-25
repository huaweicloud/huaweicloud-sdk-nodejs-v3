

export class DeleteOrchestrationRequest {
    private 'instance_id'?: string;
    private 'orchestration_id'?: string;
    public constructor(instanceId?: string, orchestrationId?: string) { 
        this['instance_id'] = instanceId;
        this['orchestration_id'] = orchestrationId;
    }
    public withInstanceId(instanceId: string): DeleteOrchestrationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrchestrationId(orchestrationId: string): DeleteOrchestrationRequest {
        this['orchestration_id'] = orchestrationId;
        return this;
    }
    public set orchestrationId(orchestrationId: string  | undefined) {
        this['orchestration_id'] = orchestrationId;
    }
    public get orchestrationId(): string | undefined {
        return this['orchestration_id'];
    }
}