import { Message } from './Message';
import { NodeRunInfoInnerError } from './NodeRunInfoInnerError';
import { Status } from './Status';


export class NodeRunInfo {
    private 'agent_id'?: string;
    private 'node_id'?: string;
    private 'parent_node_id'?: string;
    private 'node_status'?: NodeRunInfoNodeStatusEnum | string;
    private 'parent_workflow_id'?: string;
    private 'loop_index'?: number;
    private 'loop_node_id'?: string;
    public status?: Status;
    private 'node_name'?: string;
    private 'node_type'?: string;
    private 'error_message'?: string;
    public inputs?: { [key: string]: object; };
    public outputs?: { [key: string]: object; };
    public messages?: Array<Message>;
    public metadata?: { [key: string]: object; };
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'startup_time'?: number;
    private 'prefill_time'?: number;
    private 'execution_id'?: string;
    private 'inner_error'?: NodeRunInfoInnerError;
    public memory?: { [key: string]: object; };
    public constructor() { 
    }
    public withAgentId(agentId: string): NodeRunInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withNodeId(nodeId: string): NodeRunInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withParentNodeId(parentNodeId: string): NodeRunInfo {
        this['parent_node_id'] = parentNodeId;
        return this;
    }
    public set parentNodeId(parentNodeId: string  | undefined) {
        this['parent_node_id'] = parentNodeId;
    }
    public get parentNodeId(): string | undefined {
        return this['parent_node_id'];
    }
    public withNodeStatus(nodeStatus: NodeRunInfoNodeStatusEnum | string): NodeRunInfo {
        this['node_status'] = nodeStatus;
        return this;
    }
    public set nodeStatus(nodeStatus: NodeRunInfoNodeStatusEnum | string  | undefined) {
        this['node_status'] = nodeStatus;
    }
    public get nodeStatus(): NodeRunInfoNodeStatusEnum | string | undefined {
        return this['node_status'];
    }
    public withParentWorkflowId(parentWorkflowId: string): NodeRunInfo {
        this['parent_workflow_id'] = parentWorkflowId;
        return this;
    }
    public set parentWorkflowId(parentWorkflowId: string  | undefined) {
        this['parent_workflow_id'] = parentWorkflowId;
    }
    public get parentWorkflowId(): string | undefined {
        return this['parent_workflow_id'];
    }
    public withLoopIndex(loopIndex: number): NodeRunInfo {
        this['loop_index'] = loopIndex;
        return this;
    }
    public set loopIndex(loopIndex: number  | undefined) {
        this['loop_index'] = loopIndex;
    }
    public get loopIndex(): number | undefined {
        return this['loop_index'];
    }
    public withLoopNodeId(loopNodeId: string): NodeRunInfo {
        this['loop_node_id'] = loopNodeId;
        return this;
    }
    public set loopNodeId(loopNodeId: string  | undefined) {
        this['loop_node_id'] = loopNodeId;
    }
    public get loopNodeId(): string | undefined {
        return this['loop_node_id'];
    }
    public withStatus(status: Status): NodeRunInfo {
        this['status'] = status;
        return this;
    }
    public withNodeName(nodeName: string): NodeRunInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeType(nodeType: string): NodeRunInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withErrorMessage(errorMessage: string): NodeRunInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withInputs(inputs: { [key: string]: object; }): NodeRunInfo {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: { [key: string]: object; }): NodeRunInfo {
        this['outputs'] = outputs;
        return this;
    }
    public withMessages(messages: Array<Message>): NodeRunInfo {
        this['messages'] = messages;
        return this;
    }
    public withMetadata(metadata: { [key: string]: object; }): NodeRunInfo {
        this['metadata'] = metadata;
        return this;
    }
    public withStartTime(startTime: number): NodeRunInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): NodeRunInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStartupTime(startupTime: number): NodeRunInfo {
        this['startup_time'] = startupTime;
        return this;
    }
    public set startupTime(startupTime: number  | undefined) {
        this['startup_time'] = startupTime;
    }
    public get startupTime(): number | undefined {
        return this['startup_time'];
    }
    public withPrefillTime(prefillTime: number): NodeRunInfo {
        this['prefill_time'] = prefillTime;
        return this;
    }
    public set prefillTime(prefillTime: number  | undefined) {
        this['prefill_time'] = prefillTime;
    }
    public get prefillTime(): number | undefined {
        return this['prefill_time'];
    }
    public withExecutionId(executionId: string): NodeRunInfo {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withInnerError(innerError: NodeRunInfoInnerError): NodeRunInfo {
        this['inner_error'] = innerError;
        return this;
    }
    public set innerError(innerError: NodeRunInfoInnerError  | undefined) {
        this['inner_error'] = innerError;
    }
    public get innerError(): NodeRunInfoInnerError | undefined {
        return this['inner_error'];
    }
    public withMemory(memory: { [key: string]: object; }): NodeRunInfo {
        this['memory'] = memory;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeRunInfoNodeStatusEnum {
    NODE_STARTED = 'node_started',
    NODE_WAIT = 'node_wait',
    NODE_FINISHED = 'node_finished'
}
