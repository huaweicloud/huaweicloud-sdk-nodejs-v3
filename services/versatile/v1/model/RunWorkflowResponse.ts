import { NodeMessage } from './NodeMessage';
import { NodeRunInfo } from './NodeRunInfo';
import { Status } from './Status';
import { WorkflowRunStreamRsp } from './WorkflowRunStreamRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunWorkflowResponse extends SdkResponse {
    private 'conversation_id'?: string;
    public outputs?: { [key: string]: object; };
    public messages?: Array<NodeMessage>;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public metadata?: { [key: string]: object; };
    public status?: Status;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'node_info'?: Array<NodeRunInfo>;
    public events?: Array<WorkflowRunStreamRsp>;
    public constructor() { 
        super();
    }
    public withConversationId(conversationId: string): RunWorkflowResponse {
        this['conversation_id'] = conversationId;
        return this;
    }
    public set conversationId(conversationId: string  | undefined) {
        this['conversation_id'] = conversationId;
    }
    public get conversationId(): string | undefined {
        return this['conversation_id'];
    }
    public withOutputs(outputs: { [key: string]: object; }): RunWorkflowResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withMessages(messages: Array<NodeMessage>): RunWorkflowResponse {
        this['messages'] = messages;
        return this;
    }
    public withErrorCode(errorCode: string): RunWorkflowResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): RunWorkflowResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withMetadata(metadata: { [key: string]: object; }): RunWorkflowResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatus(status: Status): RunWorkflowResponse {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): RunWorkflowResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): RunWorkflowResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withNodeInfo(nodeInfo: Array<NodeRunInfo>): RunWorkflowResponse {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: Array<NodeRunInfo>  | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo(): Array<NodeRunInfo> | undefined {
        return this['node_info'];
    }
    public withEvents(events: Array<WorkflowRunStreamRsp>): RunWorkflowResponse {
        this['events'] = events;
        return this;
    }
}