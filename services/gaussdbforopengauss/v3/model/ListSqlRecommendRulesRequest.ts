import { ListSqlRecommendRulesRequestBody } from './ListSqlRecommendRulesRequestBody';


export class ListSqlRecommendRulesRequest {
    private 'X-Language'?: ListSqlRecommendRulesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListSqlRecommendRulesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListSqlRecommendRulesRequestXLanguageEnum | string): ListSqlRecommendRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlRecommendRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlRecommendRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSqlRecommendRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListSqlRecommendRulesRequestBody): ListSqlRecommendRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlRecommendRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
