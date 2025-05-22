

export class OfflineKeyAnalysisRecord {
    public id?: string;
    public status?: OfflineKeyAnalysisRecordStatusEnum | string;
    private 'created_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public constructor() { 
    }
    public withId(id: string): OfflineKeyAnalysisRecord {
        this['id'] = id;
        return this;
    }
    public withStatus(status: OfflineKeyAnalysisRecordStatusEnum | string): OfflineKeyAnalysisRecord {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): OfflineKeyAnalysisRecord {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): OfflineKeyAnalysisRecord {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): OfflineKeyAnalysisRecord {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OfflineKeyAnalysisRecordStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
