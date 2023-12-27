import { InteractionRuleGroupDetail } from './InteractionRuleGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInteractionRuleGroupsResponse extends SdkResponse {
    public count?: number;
    private 'interaction_rule_groups'?: Array<InteractionRuleGroupDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInteractionRuleGroupsResponse {
        this['count'] = count;
        return this;
    }
    public withInteractionRuleGroups(interactionRuleGroups: Array<InteractionRuleGroupDetail>): ListInteractionRuleGroupsResponse {
        this['interaction_rule_groups'] = interactionRuleGroups;
        return this;
    }
    public set interactionRuleGroups(interactionRuleGroups: Array<InteractionRuleGroupDetail>  | undefined) {
        this['interaction_rule_groups'] = interactionRuleGroups;
    }
    public get interactionRuleGroups(): Array<InteractionRuleGroupDetail> | undefined {
        return this['interaction_rule_groups'];
    }
    public withXRequestId(xRequestId: string): ListInteractionRuleGroupsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}