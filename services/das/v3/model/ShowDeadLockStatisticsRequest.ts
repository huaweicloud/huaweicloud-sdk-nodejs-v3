

export class ShowDeadLockStatisticsRequest {
    private 'instance_id'?: string;
    private 'current_time'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(instanceId?: string, currentTime?: number, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['current_time'] = currentTime;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowDeadLockStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurrentTime(currentTime: number): ShowDeadLockStatisticsRequest {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: number  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): number | undefined {
        return this['current_time'];
    }
    public withStartTime(startTime: number): ShowDeadLockStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDeadLockStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}