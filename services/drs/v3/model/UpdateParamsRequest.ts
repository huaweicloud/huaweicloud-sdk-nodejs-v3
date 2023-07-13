import { ModifyTargetParamsReq } from './ModifyTargetParamsReq';


export class UpdateParamsRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: UpdateParamsRequestXLanguageEnum | undefined;
    public body?: ModifyTargetParamsReq;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateParamsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateParamsRequestXLanguageEnum): UpdateParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateParamsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
