

export class ListAspInfosRequest {
    private 'X-Language'?: ListAspInfosRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListAspInfosRequestXLanguageEnum | string): ListAspInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAspInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAspInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListAspInfosRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAspInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAspInfosRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListAspInfosRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAspInfosRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): ListAspInfosRequest {
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
export enum ListAspInfosRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
