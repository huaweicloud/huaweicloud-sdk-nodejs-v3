import { ModifyColumnInfoReq } from './ModifyColumnInfoReq';


export class ModifyColumnInfosRequest {
    private 'X-Language'?: ModifyColumnInfosRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: ModifyColumnInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ModifyColumnInfosRequestXLanguageEnum | string): ModifyColumnInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyColumnInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyColumnInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ModifyColumnInfosRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ModifyColumnInfoReq): ModifyColumnInfosRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyColumnInfosRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
