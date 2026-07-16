import { StepExecutionAction } from './StepExecutionAction';


export class CreateWorkflowStepExecutionsActionsRequest {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    private 'step_execution_id'?: string;
    public body?: StepExecutionAction;
    public constructor(workflowId?: string, executionId?: string, stepExecutionId?: string) { 
        this['workflow_id'] = workflowId;
        this['execution_id'] = executionId;
        this['step_execution_id'] = stepExecutionId;
    }
    public withWorkflowId(workflowId: string): CreateWorkflowStepExecutionsActionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): CreateWorkflowStepExecutionsActionsRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStepExecutionId(stepExecutionId: string): CreateWorkflowStepExecutionsActionsRequest {
        this['step_execution_id'] = stepExecutionId;
        return this;
    }
    public set stepExecutionId(stepExecutionId: string  | undefined) {
        this['step_execution_id'] = stepExecutionId;
    }
    public get stepExecutionId(): string | undefined {
        return this['step_execution_id'];
    }
    public withBody(body: StepExecutionAction): CreateWorkflowStepExecutionsActionsRequest {
        this['body'] = body;
        return this;
    }
}