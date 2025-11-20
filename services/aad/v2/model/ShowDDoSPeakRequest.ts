

export class ShowDDoSPeakRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'instance_id'?: string;
    public ip?: string;
    public constructor(startTime?: string, endTime?: string, instanceId?: string, ip?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['instance_id'] = instanceId;
        this['ip'] = ip;
    }
    public withStartTime(startTime: string): ShowDDoSPeakRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowDDoSPeakRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInstanceId(instanceId: string): ShowDDoSPeakRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ShowDDoSPeakRequest {
        this['ip'] = ip;
        return this;
    }
}