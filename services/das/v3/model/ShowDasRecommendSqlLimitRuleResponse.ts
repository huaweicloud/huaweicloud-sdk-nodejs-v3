import { RecommendSqlLimitRuleRespSqlLimitInfos } from './RecommendSqlLimitRuleRespSqlLimitInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDasRecommendSqlLimitRuleResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'sql_limit_infos'?: Array<RecommendSqlLimitRuleRespSqlLimitInfos>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowDasRecommendSqlLimitRuleResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSqlLimitInfos(sqlLimitInfos: Array<RecommendSqlLimitRuleRespSqlLimitInfos>): ShowDasRecommendSqlLimitRuleResponse {
        this['sql_limit_infos'] = sqlLimitInfos;
        return this;
    }
    public set sqlLimitInfos(sqlLimitInfos: Array<RecommendSqlLimitRuleRespSqlLimitInfos>  | undefined) {
        this['sql_limit_infos'] = sqlLimitInfos;
    }
    public get sqlLimitInfos(): Array<RecommendSqlLimitRuleRespSqlLimitInfos> | undefined {
        return this['sql_limit_infos'];
    }
}