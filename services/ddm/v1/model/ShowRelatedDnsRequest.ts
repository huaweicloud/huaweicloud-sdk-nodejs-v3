

export class ShowRelatedDnsRequest {
    private 'instance_id'?: string;
    private 'restore_time'?: string;
    public constructor(instanceId?: string, restoreTime?: string) { 
        this['instance_id'] = instanceId;
        this['restore_time'] = restoreTime;
    }
    public withInstanceId(instanceId: string): ShowRelatedDnsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRestoreTime(restoreTime: string): ShowRelatedDnsRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
}