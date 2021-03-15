import { RuleResponse } from './RuleResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRulesResponse extends SdkResponse {
    public marker?: string;
    public count?: number;
    public rules?: Array<RuleResponse>;
    public constructor() { 
        super();
    }
    public withMarker(marker: string): ListRulesResponse {
        this['marker'] = marker;
        return this;
    }
    public withCount(count: number): ListRulesResponse {
        this['count'] = count;
        return this;
    }
    public withRules(rules: Array<RuleResponse>): ListRulesResponse {
        this['rules'] = rules;
        return this;
    }
}