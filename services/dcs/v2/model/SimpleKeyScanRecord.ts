

export class SimpleKeyScanRecord {
    public id?: string;
    private 'instance_id'?: string;
    public status?: SimpleKeyScanRecordStatusEnum | string;
    private 'scan_type'?: string;
    public num?: number;
    private 'created_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public constructor() { 
    }
    public withId(id: string): SimpleKeyScanRecord {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): SimpleKeyScanRecord {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: SimpleKeyScanRecordStatusEnum | string): SimpleKeyScanRecord {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: string): SimpleKeyScanRecord {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withNum(num: number): SimpleKeyScanRecord {
        this['num'] = num;
        return this;
    }
    public withCreatedAt(createdAt: string): SimpleKeyScanRecord {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): SimpleKeyScanRecord {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): SimpleKeyScanRecord {
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
export enum SimpleKeyScanRecordStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
