import { UpdateSubscriptionInfoReq } from './UpdateSubscriptionInfoReq';


export class UpdateSubscriptionInfoRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateSubscriptionInfoRequestXLanguageEnum | string;
    public body?: UpdateSubscriptionInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateSubscriptionInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateSubscriptionInfoRequestXLanguageEnum | string): UpdateSubscriptionInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateSubscriptionInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateSubscriptionInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateSubscriptionInfoReq): UpdateSubscriptionInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSubscriptionInfoRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
