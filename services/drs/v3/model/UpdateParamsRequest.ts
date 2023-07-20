import { ModifyTargetParamsReq } from './ModifyTargetParamsReq';


export class UpdateParamsRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateParamsRequestXLanguageEnum | string;
    public body?: ModifyTargetParamsReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateParamsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateParamsRequestXLanguageEnum | string): UpdateParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateParamsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateParamsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyTargetParamsReq): UpdateParamsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateParamsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
