

export class ShowReplicationJobRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowReplicationJobRequestXLanguageEnum | string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowReplicationJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowReplicationJobRequestXLanguageEnum | string): ShowReplicationJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowReplicationJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowReplicationJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReplicationJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
