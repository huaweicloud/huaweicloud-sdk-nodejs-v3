import { WorkflowRunReq } from './WorkflowRunReq';


export class RunWorkflowRequest {
    private 'workflow_id'?: string;
    private 'conversation_id'?: string;
    private 'workspace_id'?: string;
    public version?: string;
    public stream?: boolean;
    public body?: WorkflowRunReq;
    public constructor(workflowId?: string, conversationId?: string) { 
        this['workflow_id'] = workflowId;
        this['conversation_id'] = conversationId;
    }
    public withWorkflowId(workflowId: string): RunWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withConversationId(conversationId: string): RunWorkflowRequest {
        this['conversation_id'] = conversationId;
        return this;
    }
    public set conversationId(conversationId: string  | undefined) {
        this['conversation_id'] = conversationId;
    }
    public get conversationId(): string | undefined {
        return this['conversation_id'];
    }
    public withWorkspaceId(workspaceId: string): RunWorkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersion(version: string): RunWorkflowRequest {
        this['version'] = version;
        return this;
    }
    public withStream(stream: boolean): RunWorkflowRequest {
        this['stream'] = stream;
        return this;
    }
    public withBody(body: WorkflowRunReq): RunWorkflowRequest {
        this['body'] = body;
        return this;
    }
}