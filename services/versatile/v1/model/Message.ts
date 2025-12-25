import { FeedbackReason } from './FeedbackReason';


export class Message {
    public role?: string;
    public content?: string;
    private 'create_time'?: number;
    public name?: object;
    private 'function_call'?: object;
    private 'tool_calls'?: object;
    private 'tool_call_id'?: object;
    private 'enable_history'?: boolean;
    public intent?: Array<string>;
    private 'execution_id'?: string;
    private 'node_id'?: string;
    private 'agent_id'?: string;
    public rating?: number;
    public files?: Array<object>;
    public reason?: FeedbackReason;
    public constructor() { 
    }
    public withRole(role: string): Message {
        this['role'] = role;
        return this;
    }
    public withContent(content: string): Message {
        this['content'] = content;
        return this;
    }
    public withCreateTime(createTime: number): Message {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withName(name: object): Message {
        this['name'] = name;
        return this;
    }
    public withFunctionCall(functionCall: object): Message {
        this['function_call'] = functionCall;
        return this;
    }
    public set functionCall(functionCall: object  | undefined) {
        this['function_call'] = functionCall;
    }
    public get functionCall(): object | undefined {
        return this['function_call'];
    }
    public withToolCalls(toolCalls: object): Message {
        this['tool_calls'] = toolCalls;
        return this;
    }
    public set toolCalls(toolCalls: object  | undefined) {
        this['tool_calls'] = toolCalls;
    }
    public get toolCalls(): object | undefined {
        return this['tool_calls'];
    }
    public withToolCallId(toolCallId: object): Message {
        this['tool_call_id'] = toolCallId;
        return this;
    }
    public set toolCallId(toolCallId: object  | undefined) {
        this['tool_call_id'] = toolCallId;
    }
    public get toolCallId(): object | undefined {
        return this['tool_call_id'];
    }
    public withEnableHistory(enableHistory: boolean): Message {
        this['enable_history'] = enableHistory;
        return this;
    }
    public set enableHistory(enableHistory: boolean  | undefined) {
        this['enable_history'] = enableHistory;
    }
    public get enableHistory(): boolean | undefined {
        return this['enable_history'];
    }
    public withIntent(intent: Array<string>): Message {
        this['intent'] = intent;
        return this;
    }
    public withExecutionId(executionId: string): Message {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withNodeId(nodeId: string): Message {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withAgentId(agentId: string): Message {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withRating(rating: number): Message {
        this['rating'] = rating;
        return this;
    }
    public withFiles(files: Array<object>): Message {
        this['files'] = files;
        return this;
    }
    public withReason(reason: FeedbackReason): Message {
        this['reason'] = reason;
        return this;
    }
}