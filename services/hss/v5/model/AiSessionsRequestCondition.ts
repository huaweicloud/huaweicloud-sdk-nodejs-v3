

export class AiSessionsRequestCondition {
    private 'session_id'?: string;
    private 'agent_name'?: string;
    private 'agent_id'?: string;
    private 'runtime_name'?: string;
    private 'runtime_id'?: string;
    private 'sdk_status'?: string;
    public source?: string;
    public constructor() { 
    }
    public withSessionId(sessionId: string): AiSessionsRequestCondition {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withAgentName(agentName: string): AiSessionsRequestCondition {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withAgentId(agentId: string): AiSessionsRequestCondition {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withRuntimeName(runtimeName: string): AiSessionsRequestCondition {
        this['runtime_name'] = runtimeName;
        return this;
    }
    public set runtimeName(runtimeName: string  | undefined) {
        this['runtime_name'] = runtimeName;
    }
    public get runtimeName(): string | undefined {
        return this['runtime_name'];
    }
    public withRuntimeId(runtimeId: string): AiSessionsRequestCondition {
        this['runtime_id'] = runtimeId;
        return this;
    }
    public set runtimeId(runtimeId: string  | undefined) {
        this['runtime_id'] = runtimeId;
    }
    public get runtimeId(): string | undefined {
        return this['runtime_id'];
    }
    public withSdkStatus(sdkStatus: string): AiSessionsRequestCondition {
        this['sdk_status'] = sdkStatus;
        return this;
    }
    public set sdkStatus(sdkStatus: string  | undefined) {
        this['sdk_status'] = sdkStatus;
    }
    public get sdkStatus(): string | undefined {
        return this['sdk_status'];
    }
    public withSource(source: string): AiSessionsRequestCondition {
        this['source'] = source;
        return this;
    }
}