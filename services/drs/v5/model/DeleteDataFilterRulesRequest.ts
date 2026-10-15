import { DeleteDataFilterRuleReq } from './DeleteDataFilterRuleReq';


export class DeleteDataFilterRulesRequest {
    private 'job_id'?: string;
    private 'X-Language'?: DeleteDataFilterRulesRequestXLanguageEnum | string;
    public body?: DeleteDataFilterRuleReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DeleteDataFilterRulesRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: DeleteDataFilterRulesRequestXLanguageEnum | string): DeleteDataFilterRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteDataFilterRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteDataFilterRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteDataFilterRuleReq): DeleteDataFilterRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDataFilterRulesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
