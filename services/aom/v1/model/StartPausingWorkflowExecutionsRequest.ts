

export class StartPausingWorkflowExecutionsRequest {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    public action?: StartPausingWorkflowExecutionsRequestActionEnum | string;
    private 'node_id'?: string;
    public constructor(workflowId?: string, executionId?: string, action?: string, nodeId?: string) { 
        this['workflow_id'] = workflowId;
        this['execution_id'] = executionId;
        this['action'] = action;
        this['node_id'] = nodeId;
    }
    public withWorkflowId(workflowId: string): StartPausingWorkflowExecutionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): StartPausingWorkflowExecutionsRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withAction(action: StartPausingWorkflowExecutionsRequestActionEnum | string): StartPausingWorkflowExecutionsRequest {
        this['action'] = action;
        return this;
    }
    public withNodeId(nodeId: string): StartPausingWorkflowExecutionsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartPausingWorkflowExecutionsRequestActionEnum {
    RESTART = 'restart',
    SKIP = 'skip',
    CONTINUE = 'continue'
}
