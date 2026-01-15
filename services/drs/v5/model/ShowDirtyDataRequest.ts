

export class ShowDirtyDataRequest {
    private 'X-Language'?: ShowDirtyDataRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    private 'anonymize_mode'?: boolean;
    private 'task_mode'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ShowDirtyDataRequestXLanguageEnum | string): ShowDirtyDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDirtyDataRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDirtyDataRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowDirtyDataRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBeginTime(beginTime: string): ShowDirtyDataRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowDirtyDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowDirtyDataRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDirtyDataRequest {
        this['limit'] = limit;
        return this;
    }
    public withAnonymizeMode(anonymizeMode: boolean): ShowDirtyDataRequest {
        this['anonymize_mode'] = anonymizeMode;
        return this;
    }
    public set anonymizeMode(anonymizeMode: boolean  | undefined) {
        this['anonymize_mode'] = anonymizeMode;
    }
    public get anonymizeMode(): boolean | undefined {
        return this['anonymize_mode'];
    }
    public withTaskMode(taskMode: string): ShowDirtyDataRequest {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: string  | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode(): string | undefined {
        return this['task_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDirtyDataRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
