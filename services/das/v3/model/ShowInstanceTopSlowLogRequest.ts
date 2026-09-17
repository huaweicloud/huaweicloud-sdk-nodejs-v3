

export class ShowInstanceTopSlowLogRequest {
    private 'instance_id'?: string;
    public num?: number;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(instanceId?: string, num?: number, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['num'] = num;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ShowInstanceTopSlowLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNum(num: number): ShowInstanceTopSlowLogRequest {
        this['num'] = num;
        return this;
    }
    public withStartAt(startAt: number): ShowInstanceTopSlowLogRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowInstanceTopSlowLogRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}