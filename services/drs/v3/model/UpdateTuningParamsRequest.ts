import { ModifyTuningParamsReq } from './ModifyTuningParamsReq';


export class UpdateTuningParamsRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: UpdateTuningParamsRequestXLanguageEnum | undefined;
    public body?: ModifyTuningParamsReq;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateTuningParamsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateTuningParamsRequestXLanguageEnum): UpdateTuningParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateTuningParamsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: ModifyTuningParamsReq): UpdateTuningParamsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTuningParamsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
