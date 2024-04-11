import { CreateDataLevelTableCompareJobReq } from './CreateDataLevelTableCompareJobReq';


export class CreateDataLevelTableCompareJobRequest {
    private 'X-Language'?: CreateDataLevelTableCompareJobRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: CreateDataLevelTableCompareJobReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: CreateDataLevelTableCompareJobRequestXLanguageEnum | string): CreateDataLevelTableCompareJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateDataLevelTableCompareJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateDataLevelTableCompareJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): CreateDataLevelTableCompareJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: CreateDataLevelTableCompareJobReq): CreateDataLevelTableCompareJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDataLevelTableCompareJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
