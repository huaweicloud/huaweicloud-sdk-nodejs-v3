import { DataFilterRuleReq } from './DataFilterRuleReq';


export class CheckDataFilterRulesRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CheckDataFilterRulesRequestXLanguageEnum | string;
    public body?: DataFilterRuleReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CheckDataFilterRulesRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CheckDataFilterRulesRequestXLanguageEnum | string): CheckDataFilterRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CheckDataFilterRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CheckDataFilterRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DataFilterRuleReq): CheckDataFilterRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckDataFilterRulesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
