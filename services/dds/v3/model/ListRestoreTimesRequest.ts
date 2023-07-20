

export class ListRestoreTimesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public date?: string;
    public constructor(instanceId?: string, date?: string) { 
        this['instance_id'] = instanceId;
        this['date'] = date;
    }
    public withXLanguage(xLanguage: string): ListRestoreTimesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListRestoreTimesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDate(date: string): ListRestoreTimesRequest {
        this['date'] = date;
        return this;
    }
}