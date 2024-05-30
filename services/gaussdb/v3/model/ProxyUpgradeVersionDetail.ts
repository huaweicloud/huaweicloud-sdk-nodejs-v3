

export class ProxyUpgradeVersionDetail {
    private 'instance_id'?: string;
    private 'workflow_id'?: string;
    public state?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ProxyUpgradeVersionDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkflowId(workflowId: string): ProxyUpgradeVersionDetail {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withState(state: string): ProxyUpgradeVersionDetail {
        this['state'] = state;
        return this;
    }
    public withErrorMessage(errorMessage: string): ProxyUpgradeVersionDetail {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}