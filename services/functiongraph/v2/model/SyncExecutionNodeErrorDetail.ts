

export class SyncExecutionNodeErrorDetail {
    private 'node_id'?: string | undefined;
    private 'error_message'?: string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
    }
    public withNodeId(nodeId: string): SyncExecutionNodeErrorDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withErrorMessage(errorMessage: string): SyncExecutionNodeErrorDetail {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withBeginTime(beginTime: string): SyncExecutionNodeErrorDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SyncExecutionNodeErrorDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}