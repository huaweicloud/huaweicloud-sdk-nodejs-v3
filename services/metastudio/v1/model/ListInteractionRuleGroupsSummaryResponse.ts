import { InteractionRuleGroupSummary } from './InteractionRuleGroupSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInteractionRuleGroupsSummaryResponse extends SdkResponse {
    public count?: number;
    private 'interaction_rule_groups'?: Array<InteractionRuleGroupSummary>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInteractionRuleGroupsSummaryResponse {
        this['count'] = count;
        return this;
    }
    public withInteractionRuleGroups(interactionRuleGroups: Array<InteractionRuleGroupSummary>): ListInteractionRuleGroupsSummaryResponse {
        this['interaction_rule_groups'] = interactionRuleGroups;
        return this;
    }
    public set interactionRuleGroups(interactionRuleGroups: Array<InteractionRuleGroupSummary>  | undefined) {
        this['interaction_rule_groups'] = interactionRuleGroups;
    }
    public get interactionRuleGroups(): Array<InteractionRuleGroupSummary> | undefined {
        return this['interaction_rule_groups'];
    }
    public withXRequestId(xRequestId: string): ListInteractionRuleGroupsSummaryResponse {
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