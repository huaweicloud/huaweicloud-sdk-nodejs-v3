

export class ShowReplayExecuteRecordRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowReplayExecuteRecordRequestXLanguageEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string, startTime?: number, endTime?: number) { 
        this['job_id'] = jobId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withJobId(jobId: string): ShowReplayExecuteRecordRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowReplayExecuteRecordRequestXLanguageEnum | string): ShowReplayExecuteRecordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowReplayExecuteRecordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowReplayExecuteRecordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartTime(startTime: number): ShowReplayExecuteRecordRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowReplayExecuteRecordRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowReplayExecuteRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowReplayExecuteRecordRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReplayExecuteRecordRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
