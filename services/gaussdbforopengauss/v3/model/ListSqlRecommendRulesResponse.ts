import { ListSqlRecommendRulesResponseResult } from './ListSqlRecommendRulesResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlRecommendRulesResponse extends SdkResponse {
    private 'recommend_rules'?: Array<ListSqlRecommendRulesResponseResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRecommendRules(recommendRules: Array<ListSqlRecommendRulesResponseResult>): ListSqlRecommendRulesResponse {
        this['recommend_rules'] = recommendRules;
        return this;
    }
    public set recommendRules(recommendRules: Array<ListSqlRecommendRulesResponseResult>  | undefined) {
        this['recommend_rules'] = recommendRules;
    }
    public get recommendRules(): Array<ListSqlRecommendRulesResponseResult> | undefined {
        return this['recommend_rules'];
    }
    public withTotalCount(totalCount: number): ListSqlRecommendRulesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}