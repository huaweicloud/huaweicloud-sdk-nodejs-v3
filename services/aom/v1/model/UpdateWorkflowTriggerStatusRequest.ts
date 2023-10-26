

export class UpdateWorkflowTriggerStatusRequest {
    private 'workflow_id'?: string;
    public action?: UpdateWorkflowTriggerStatusRequestActionEnum | string;
    public constructor(workflowId?: string, action?: string) { 
        this['workflow_id'] = workflowId;
        this['action'] = action;
    }
    public withWorkflowId(workflowId: string): UpdateWorkflowTriggerStatusRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withAction(action: UpdateWorkflowTriggerStatusRequestActionEnum | string): UpdateWorkflowTriggerStatusRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWorkflowTriggerStatusRequestActionEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
