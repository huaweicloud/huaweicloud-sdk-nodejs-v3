import { AgentRunReq } from './AgentRunReq';


export class RunAgentRequest {
    private 'agent_id'?: string;
    private 'conversation_id'?: string;
    private 'workspace_id'?: string;
    public version?: string;
    public type?: string;
    public stream?: boolean;
    public body?: AgentRunReq;
    public constructor(agentId?: string, conversationId?: string) { 
        this['agent_id'] = agentId;
        this['conversation_id'] = conversationId;
    }
    public withAgentId(agentId: string): RunAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withConversationId(conversationId: string): RunAgentRequest {
        this['conversation_id'] = conversationId;
        return this;
    }
    public set conversationId(conversationId: string  | undefined) {
        this['conversation_id'] = conversationId;
    }
    public get conversationId(): string | undefined {
        return this['conversation_id'];
    }
    public withWorkspaceId(workspaceId: string): RunAgentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersion(version: string): RunAgentRequest {
        this['version'] = version;
        return this;
    }
    public withType(type: string): RunAgentRequest {
        this['type'] = type;
        return this;
    }
    public withStream(stream: boolean): RunAgentRequest {
        this['stream'] = stream;
        return this;
    }
    public withBody(body: AgentRunReq): RunAgentRequest {
        this['body'] = body;
        return this;
    }
}