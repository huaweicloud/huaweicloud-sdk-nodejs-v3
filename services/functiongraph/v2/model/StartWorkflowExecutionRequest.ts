import { FlowExecuteBody } from './FlowExecuteBody';


export class StartWorkflowExecutionRequest {
    private 'workflow_id'?: string;
    private 'X-Create-Time'?: string;
    private 'X-WorkflowRun-ID'?: string;
    private 'X-WorkflowRun-MergeFnParameters'?: string;
    public body?: FlowExecuteBody;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): StartWorkflowExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withXCreateTime(xCreateTime: string): StartWorkflowExecutionRequest {
        this['X-Create-Time'] = xCreateTime;
        return this;
    }
    public set xCreateTime(xCreateTime: string  | undefined) {
        this['X-Create-Time'] = xCreateTime;
    }
    public get xCreateTime(): string | undefined {
        return this['X-Create-Time'];
    }
    public withXWorkflowRunID(xWorkflowRunID: string): StartWorkflowExecutionRequest {
        this['X-WorkflowRun-ID'] = xWorkflowRunID;
        return this;
    }
    public set xWorkflowRunID(xWorkflowRunID: string  | undefined) {
        this['X-WorkflowRun-ID'] = xWorkflowRunID;
    }
    public get xWorkflowRunID(): string | undefined {
        return this['X-WorkflowRun-ID'];
    }
    public withXWorkflowRunMergeFnParameters(xWorkflowRunMergeFnParameters: string): StartWorkflowExecutionRequest {
        this['X-WorkflowRun-MergeFnParameters'] = xWorkflowRunMergeFnParameters;
        return this;
    }
    public set xWorkflowRunMergeFnParameters(xWorkflowRunMergeFnParameters: string  | undefined) {
        this['X-WorkflowRun-MergeFnParameters'] = xWorkflowRunMergeFnParameters;
    }
    public get xWorkflowRunMergeFnParameters(): string | undefined {
        return this['X-WorkflowRun-MergeFnParameters'];
    }
    public withBody(body: FlowExecuteBody): StartWorkflowExecutionRequest {
        this['body'] = body;
        return this;
    }
}