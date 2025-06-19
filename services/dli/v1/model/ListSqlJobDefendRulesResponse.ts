import { SqlJobDefendRule } from './SqlJobDefendRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlJobDefendRulesResponse extends SdkResponse {
    public rules?: Array<SqlJobDefendRule>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<SqlJobDefendRule>): ListSqlJobDefendRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotalCount(totalCount: number): ListSqlJobDefendRulesResponse {
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