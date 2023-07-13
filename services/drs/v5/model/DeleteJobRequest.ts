

export class DeleteJobRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: DeleteJobRequestXLanguageEnum | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DeleteJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: DeleteJobRequestXLanguageEnum): DeleteJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
