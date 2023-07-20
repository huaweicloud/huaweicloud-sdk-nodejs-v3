

export class ListRestoreCollectionsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'restore_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string, restoreTime?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['restore_time'] = restoreTime;
    }
    public withXLanguage(xLanguage: string): ListRestoreCollectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListRestoreCollectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListRestoreCollectionsRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withRestoreTime(restoreTime: string): ListRestoreCollectionsRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withOffset(offset: number): ListRestoreCollectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestoreCollectionsRequest {
        this['limit'] = limit;
        return this;
    }
}