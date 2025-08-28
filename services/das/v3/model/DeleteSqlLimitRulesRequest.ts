import { DeleteSqlLimitRulesBody } from './DeleteSqlLimitRulesBody';


export class DeleteSqlLimitRulesRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: DeleteSqlLimitRulesRequestXLanguageEnum | string;
    public body?: DeleteSqlLimitRulesBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteSqlLimitRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: DeleteSqlLimitRulesRequestXLanguageEnum | string): DeleteSqlLimitRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteSqlLimitRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteSqlLimitRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteSqlLimitRulesBody): DeleteSqlLimitRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSqlLimitRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
