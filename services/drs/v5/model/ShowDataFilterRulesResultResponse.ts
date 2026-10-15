import { DataFilterRuleResp } from './DataFilterRuleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataFilterRulesResultResponse extends SdkResponse {
    private 'total_count'?: number;
    public rules?: Array<DataFilterRuleResp>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowDataFilterRulesResultResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRules(rules: Array<DataFilterRuleResp>): ShowDataFilterRulesResultResponse {
        this['rules'] = rules;
        return this;
    }
    public withStatus(status: string): ShowDataFilterRulesResultResponse {
        this['status'] = status;
        return this;
    }
}