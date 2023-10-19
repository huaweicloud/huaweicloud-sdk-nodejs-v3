

export class ShowGaussMySqlIncrementalBackupListRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public offset?: string;
    public limit?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlIncrementalBackupListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowGaussMySqlIncrementalBackupListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: string): ShowGaussMySqlIncrementalBackupListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowGaussMySqlIncrementalBackupListRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ShowGaussMySqlIncrementalBackupListRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowGaussMySqlIncrementalBackupListRequest {
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