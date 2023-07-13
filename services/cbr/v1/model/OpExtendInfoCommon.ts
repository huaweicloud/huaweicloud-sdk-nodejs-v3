

export class OpExtendInfoCommon {
    public progress: number;
    private 'request_id': string | undefined;
    private 'task_id'?: string | undefined;
    public constructor(progress?: any, requestId?: any) { 
        this['progress'] = progress;
        this['request_id'] = requestId;
    }
    public withProgress(progress: number): OpExtendInfoCommon {
        this['progress'] = progress;
        return this;
    }
    public withRequestId(requestId: string): OpExtendInfoCommon {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withTaskId(taskId: string): OpExtendInfoCommon {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}