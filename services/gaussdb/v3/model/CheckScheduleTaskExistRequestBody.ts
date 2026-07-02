

export class CheckScheduleTaskExistRequestBody {
    private 'schedule_type'?: string;
    private 'proxy_id'?: string;
    public constructor(scheduleType?: string) { 
        this['schedule_type'] = scheduleType;
    }
    public withScheduleType(scheduleType: string): CheckScheduleTaskExistRequestBody {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withProxyId(proxyId: string): CheckScheduleTaskExistRequestBody {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
}