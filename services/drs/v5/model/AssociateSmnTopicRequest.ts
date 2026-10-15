import { AssociateSmnTopicReqV5 } from './AssociateSmnTopicReqV5';


export class AssociateSmnTopicRequest {
    private 'job_id'?: string;
    private 'X-Language'?: AssociateSmnTopicRequestXLanguageEnum | string;
    public body?: AssociateSmnTopicReqV5;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): AssociateSmnTopicRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: AssociateSmnTopicRequestXLanguageEnum | string): AssociateSmnTopicRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: AssociateSmnTopicRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): AssociateSmnTopicRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: AssociateSmnTopicReqV5): AssociateSmnTopicRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssociateSmnTopicRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
