import { RoutingRuleAction } from './RoutingRuleAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleActionsResponse extends SdkResponse {
    public actions?: Array<RoutingRuleAction>;
    public count?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withActions(actions: Array<RoutingRuleAction>): ListRuleActionsResponse {
        this['actions'] = actions;
        return this;
    }
    public withCount(count: number): ListRuleActionsResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListRuleActionsResponse {
        this['marker'] = marker;
        return this;
    }
}