

export class ListPeakRequest {
    private 'instance_id'?: string;
    public ip?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string, ip?: string, startTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ListPeakRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ListPeakRequest {
        this['ip'] = ip;
        return this;
    }
    public withStartTime(startTime: string): ListPeakRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPeakRequest {
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