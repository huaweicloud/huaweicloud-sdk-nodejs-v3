import { ParseSqlLimitRulesReq } from './ParseSqlLimitRulesReq';


export class ParseSqlLimitRulesRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ParseSqlLimitRulesRequestXLanguageEnum | string;
    public body?: ParseSqlLimitRulesReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ParseSqlLimitRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ParseSqlLimitRulesRequestXLanguageEnum | string): ParseSqlLimitRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ParseSqlLimitRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ParseSqlLimitRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ParseSqlLimitRulesReq): ParseSqlLimitRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ParseSqlLimitRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
