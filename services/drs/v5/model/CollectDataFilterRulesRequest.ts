import { QueryDataFilterRuleReq } from './QueryDataFilterRuleReq';


export class CollectDataFilterRulesRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CollectDataFilterRulesRequestXLanguageEnum | string;
    public body?: QueryDataFilterRuleReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CollectDataFilterRulesRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectDataFilterRulesRequestXLanguageEnum | string): CollectDataFilterRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectDataFilterRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectDataFilterRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryDataFilterRuleReq): CollectDataFilterRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectDataFilterRulesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
