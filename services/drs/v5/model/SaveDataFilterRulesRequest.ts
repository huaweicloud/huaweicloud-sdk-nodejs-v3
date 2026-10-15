import { DataFilterRuleReq } from './DataFilterRuleReq';


export class SaveDataFilterRulesRequest {
    private 'job_id'?: string;
    private 'X-Language'?: SaveDataFilterRulesRequestXLanguageEnum | string;
    public body?: DataFilterRuleReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): SaveDataFilterRulesRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: SaveDataFilterRulesRequestXLanguageEnum | string): SaveDataFilterRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SaveDataFilterRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SaveDataFilterRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DataFilterRuleReq): SaveDataFilterRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SaveDataFilterRulesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
