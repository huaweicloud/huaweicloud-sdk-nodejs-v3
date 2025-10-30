import { ShowRecommendSqlLimitRuleRequestBody } from './ShowRecommendSqlLimitRuleRequestBody';


export class ShowDasRecommendSqlLimitRuleRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowDasRecommendSqlLimitRuleRequestXLanguageEnum | string;
    public body?: ShowRecommendSqlLimitRuleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowDasRecommendSqlLimitRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowDasRecommendSqlLimitRuleRequestXLanguageEnum | string): ShowDasRecommendSqlLimitRuleRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDasRecommendSqlLimitRuleRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDasRecommendSqlLimitRuleRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ShowRecommendSqlLimitRuleRequestBody): ShowDasRecommendSqlLimitRuleRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDasRecommendSqlLimitRuleRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
