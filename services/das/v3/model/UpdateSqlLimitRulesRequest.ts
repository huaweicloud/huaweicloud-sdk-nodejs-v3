import { UpdateSqlLimitRulesBody } from './UpdateSqlLimitRulesBody';


export class UpdateSqlLimitRulesRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: UpdateSqlLimitRulesRequestXLanguageEnum | string;
    public body?: UpdateSqlLimitRulesBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSqlLimitRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: UpdateSqlLimitRulesRequestXLanguageEnum | string): UpdateSqlLimitRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateSqlLimitRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateSqlLimitRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateSqlLimitRulesBody): UpdateSqlLimitRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlLimitRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
