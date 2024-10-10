

export class ListDDoSFlowRequest {
    private 'instance_id'?: string;
    public ip?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string, ip?: string, type?: string, startTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
        this['type'] = type;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ListDDoSFlowRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ListDDoSFlowRequest {
        this['ip'] = ip;
        return this;
    }
    public withType(type: string): ListDDoSFlowRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ListDDoSFlowRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDDoSFlowRequest {
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