

export class ListWdrSnapshotsCollectResultsRequest {
    private 'X-Language'?: ListWdrSnapshotsCollectResultsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListWdrSnapshotsCollectResultsRequestXLanguageEnum | string): ListWdrSnapshotsCollectResultsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListWdrSnapshotsCollectResultsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListWdrSnapshotsCollectResultsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListWdrSnapshotsCollectResultsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListWdrSnapshotsCollectResultsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWdrSnapshotsCollectResultsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListWdrSnapshotsCollectResultsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWdrSnapshotsCollectResultsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): ListWdrSnapshotsCollectResultsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWdrSnapshotsCollectResultsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
