

export class ListBackgroundTasksRequest {
    private 'instance_id'?: string;
    public start?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListBackgroundTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStart(start: number): ListBackgroundTasksRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListBackgroundTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ListBackgroundTasksRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListBackgroundTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}