import { CreateSqlLimitRulesBody } from './CreateSqlLimitRulesBody';


export class CreateSqlLimitRulesRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateSqlLimitRulesRequestXLanguageEnum | string;
    public body?: CreateSqlLimitRulesBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSqlLimitRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateSqlLimitRulesRequestXLanguageEnum | string): CreateSqlLimitRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSqlLimitRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSqlLimitRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateSqlLimitRulesBody): CreateSqlLimitRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlLimitRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
