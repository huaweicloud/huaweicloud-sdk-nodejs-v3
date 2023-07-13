

export class ListBackgroundTaskRequest {
    private 'instance_id': string | undefined;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListBackgroundTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListBackgroundTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackgroundTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListBackgroundTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListBackgroundTaskRequest {
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