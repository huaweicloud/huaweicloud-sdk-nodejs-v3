import { RoutingRule } from './RoutingRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoutingRulesResponse extends SdkResponse {
    public rules?: Array<RoutingRule>;
    public count?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<RoutingRule>): ListRoutingRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withCount(count: number): ListRoutingRulesResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListRoutingRulesResponse {
        this['marker'] = marker;
        return this;
    }
}