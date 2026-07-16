

export class WorkflowTodo {
    public time?: string;
    public duration?: number;
    private 'workflow_id'?: string;
    private 'workflow_name'?: string;
    private 'execution_id'?: string;
    private 'step_name'?: string;
    private 'step_title'?: string;
    public status?: WorkflowTodoStatusEnum | string;
    public constructor() { 
    }
    public withTime(time: string): WorkflowTodo {
        this['time'] = time;
        return this;
    }
    public withDuration(duration: number): WorkflowTodo {
        this['duration'] = duration;
        return this;
    }
    public withWorkflowId(workflowId: string): WorkflowTodo {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkflowName(workflowName: string): WorkflowTodo {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string  | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName(): string | undefined {
        return this['workflow_name'];
    }
    public withExecutionId(executionId: string): WorkflowTodo {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStepName(stepName: string): WorkflowTodo {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withStepTitle(stepTitle: string): WorkflowTodo {
        this['step_title'] = stepTitle;
        return this;
    }
    public set stepTitle(stepTitle: string  | undefined) {
        this['step_title'] = stepTitle;
    }
    public get stepTitle(): string | undefined {
        return this['step_title'];
    }
    public withStatus(status: WorkflowTodoStatusEnum | string): WorkflowTodo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WorkflowTodoStatusEnum {
    WAIT_INPUTS = 'wait_inputs'
}
