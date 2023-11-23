import { CallbackWorkflowRequestBody } from './CallbackWorkflowRequestBody';


export class CreateCallbackWorkflowRequest {
    private 'workflow_id'?: string;
    private 'X-Workflow-Run-Id'?: string;
    private 'X-Workflow-State-Id'?: string;
    public body?: CallbackWorkflowRequestBody;
    public constructor(workflowId?: string, xWorkflowRunId?: string, xWorkflowStateId?: string) { 
        this['workflow_id'] = workflowId;
        this['X-Workflow-Run-Id'] = xWorkflowRunId;
        this['X-Workflow-State-Id'] = xWorkflowStateId;
    }
    public withWorkflowId(workflowId: string): CreateCallbackWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withXWorkflowRunId(xWorkflowRunId: string): CreateCallbackWorkflowRequest {
        this['X-Workflow-Run-Id'] = xWorkflowRunId;
        return this;
    }
    public set xWorkflowRunId(xWorkflowRunId: string  | undefined) {
        this['X-Workflow-Run-Id'] = xWorkflowRunId;
    }
    public get xWorkflowRunId(): string | undefined {
        return this['X-Workflow-Run-Id'];
    }
    public withXWorkflowStateId(xWorkflowStateId: string): CreateCallbackWorkflowRequest {
        this['X-Workflow-State-Id'] = xWorkflowStateId;
        return this;
    }
    public set xWorkflowStateId(xWorkflowStateId: string  | undefined) {
        this['X-Workflow-State-Id'] = xWorkflowStateId;
    }
    public get xWorkflowStateId(): string | undefined {
        return this['X-Workflow-State-Id'];
    }
    public withBody(body: CallbackWorkflowRequestBody): CreateCallbackWorkflowRequest {
        this['body'] = body;
        return this;
    }
}