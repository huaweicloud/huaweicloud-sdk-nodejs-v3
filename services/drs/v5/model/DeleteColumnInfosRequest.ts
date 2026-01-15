import { DeleteColumnInfoReq } from './DeleteColumnInfoReq';


export class DeleteColumnInfosRequest {
    private 'X-Language'?: DeleteColumnInfosRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: DeleteColumnInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: DeleteColumnInfosRequestXLanguageEnum | string): DeleteColumnInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteColumnInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteColumnInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): DeleteColumnInfosRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: DeleteColumnInfoReq): DeleteColumnInfosRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteColumnInfosRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
