import { DataProcessReq } from './DataProcessReq';


export class UpdateDataProgressRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateDataProgressRequestXLanguageEnum | string;
    public body?: DataProcessReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateDataProgressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateDataProgressRequestXLanguageEnum | string): UpdateDataProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateDataProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateDataProgressRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DataProcessReq): UpdateDataProgressRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDataProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
