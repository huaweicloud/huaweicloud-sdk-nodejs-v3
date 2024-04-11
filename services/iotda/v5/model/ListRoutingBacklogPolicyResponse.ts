import { BacklogPolicyInfo } from './BacklogPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoutingBacklogPolicyResponse extends SdkResponse {
    private 'backlog_policies'?: Array<BacklogPolicyInfo>;
    public count?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withBacklogPolicies(backlogPolicies: Array<BacklogPolicyInfo>): ListRoutingBacklogPolicyResponse {
        this['backlog_policies'] = backlogPolicies;
        return this;
    }
    public set backlogPolicies(backlogPolicies: Array<BacklogPolicyInfo>  | undefined) {
        this['backlog_policies'] = backlogPolicies;
    }
    public get backlogPolicies(): Array<BacklogPolicyInfo> | undefined {
        return this['backlog_policies'];
    }
    public withCount(count: number): ListRoutingBacklogPolicyResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListRoutingBacklogPolicyResponse {
        this['marker'] = marker;
        return this;
    }
}