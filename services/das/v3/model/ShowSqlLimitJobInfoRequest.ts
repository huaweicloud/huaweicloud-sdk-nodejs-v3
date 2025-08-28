

export class ShowSqlLimitJobInfoRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowSqlLimitJobInfoRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public constructor(instanceId?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['job_id'] = jobId;
    }
    public withInstanceId(instanceId: string): ShowSqlLimitJobInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowSqlLimitJobInfoRequestXLanguageEnum | string): ShowSqlLimitJobInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlLimitJobInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlLimitJobInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowSqlLimitJobInfoRequest {
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
export enum ShowSqlLimitJobInfoRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
