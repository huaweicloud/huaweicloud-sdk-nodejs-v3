import { ModifyComparePolicyReq } from './ModifyComparePolicyReq';


export class UpdateComparePolicyRequest {
    private 'X-Language'?: UpdateComparePolicyRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: ModifyComparePolicyReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: UpdateComparePolicyRequestXLanguageEnum | string): UpdateComparePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateComparePolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateComparePolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): UpdateComparePolicyRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ModifyComparePolicyReq): UpdateComparePolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateComparePolicyRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
