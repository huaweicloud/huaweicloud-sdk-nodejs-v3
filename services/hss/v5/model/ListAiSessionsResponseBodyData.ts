

export class ListAiSessionsResponseBodyData {
    private 'session_id'?: string;
    private 'agent_name'?: string;
    private 'agent_id'?: string;
    private 'runtime_name'?: string;
    private 'runtime_id'?: string;
    private 'image_url'?: string;
    private 'sdk_status'?: string;
    private 'start_time'?: number;
    private 'last_chat_time'?: number;
    private 'run_duration'?: number;
    private 'security_tokens'?: number;
    public source?: string;
    public constructor() { 
    }
    public withSessionId(sessionId: string): ListAiSessionsResponseBodyData {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withAgentName(agentName: string): ListAiSessionsResponseBodyData {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withAgentId(agentId: string): ListAiSessionsResponseBodyData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withRuntimeName(runtimeName: string): ListAiSessionsResponseBodyData {
        this['runtime_name'] = runtimeName;
        return this;
    }
    public set runtimeName(runtimeName: string  | undefined) {
        this['runtime_name'] = runtimeName;
    }
    public get runtimeName(): string | undefined {
        return this['runtime_name'];
    }
    public withRuntimeId(runtimeId: string): ListAiSessionsResponseBodyData {
        this['runtime_id'] = runtimeId;
        return this;
    }
    public set runtimeId(runtimeId: string  | undefined) {
        this['runtime_id'] = runtimeId;
    }
    public get runtimeId(): string | undefined {
        return this['runtime_id'];
    }
    public withImageUrl(imageUrl: string): ListAiSessionsResponseBodyData {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withSdkStatus(sdkStatus: string): ListAiSessionsResponseBodyData {
        this['sdk_status'] = sdkStatus;
        return this;
    }
    public set sdkStatus(sdkStatus: string  | undefined) {
        this['sdk_status'] = sdkStatus;
    }
    public get sdkStatus(): string | undefined {
        return this['sdk_status'];
    }
    public withStartTime(startTime: number): ListAiSessionsResponseBodyData {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withLastChatTime(lastChatTime: number): ListAiSessionsResponseBodyData {
        this['last_chat_time'] = lastChatTime;
        return this;
    }
    public set lastChatTime(lastChatTime: number  | undefined) {
        this['last_chat_time'] = lastChatTime;
    }
    public get lastChatTime(): number | undefined {
        return this['last_chat_time'];
    }
    public withRunDuration(runDuration: number): ListAiSessionsResponseBodyData {
        this['run_duration'] = runDuration;
        return this;
    }
    public set runDuration(runDuration: number  | undefined) {
        this['run_duration'] = runDuration;
    }
    public get runDuration(): number | undefined {
        return this['run_duration'];
    }
    public withSecurityTokens(securityTokens: number): ListAiSessionsResponseBodyData {
        this['security_tokens'] = securityTokens;
        return this;
    }
    public set securityTokens(securityTokens: number  | undefined) {
        this['security_tokens'] = securityTokens;
    }
    public get securityTokens(): number | undefined {
        return this['security_tokens'];
    }
    public withSource(source: string): ListAiSessionsResponseBodyData {
        this['source'] = source;
        return this;
    }
}