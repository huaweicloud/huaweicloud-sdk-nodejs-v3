

export class ListRestoreDatabasesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'restore_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, restoreTime?: string) { 
        this['instance_id'] = instanceId;
        this['restore_time'] = restoreTime;
    }
    public withXLanguage(xLanguage: string): ListRestoreDatabasesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListRestoreDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRestoreTime(restoreTime: string): ListRestoreDatabasesRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withOffset(offset: number): ListRestoreDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestoreDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
}