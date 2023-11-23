import { KillOpRule } from './KillOpRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillOpRuleRuleListResponse extends SdkResponse {
    public rules?: Array<KillOpRule>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<KillOpRule>): ShowKillOpRuleRuleListResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotalCount(totalCount: number): ShowKillOpRuleRuleListResponse {
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