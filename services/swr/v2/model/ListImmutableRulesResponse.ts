import { ImmutableRule } from './ImmutableRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImmutableRulesResponse extends SdkResponse {
    private 'immutable_rules'?: Array<ImmutableRule>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withImmutableRules(immutableRules: Array<ImmutableRule>): ListImmutableRulesResponse {
        this['immutable_rules'] = immutableRules;
        return this;
    }
    public set immutableRules(immutableRules: Array<ImmutableRule>  | undefined) {
        this['immutable_rules'] = immutableRules;
    }
    public get immutableRules(): Array<ImmutableRule> | undefined {
        return this['immutable_rules'];
    }
    public withTotal(total: number): ListImmutableRulesResponse {
        this['total'] = total;
        return this;
    }
}