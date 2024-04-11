import { FlowControlPolicyInfo } from './FlowControlPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoutingFlowControlPolicyResponse extends SdkResponse {
    private 'flowcontrol_policies'?: Array<FlowControlPolicyInfo>;
    public count?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withFlowcontrolPolicies(flowcontrolPolicies: Array<FlowControlPolicyInfo>): ListRoutingFlowControlPolicyResponse {
        this['flowcontrol_policies'] = flowcontrolPolicies;
        return this;
    }
    public set flowcontrolPolicies(flowcontrolPolicies: Array<FlowControlPolicyInfo>  | undefined) {
        this['flowcontrol_policies'] = flowcontrolPolicies;
    }
    public get flowcontrolPolicies(): Array<FlowControlPolicyInfo> | undefined {
        return this['flowcontrol_policies'];
    }
    public withCount(count: number): ListRoutingFlowControlPolicyResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListRoutingFlowControlPolicyResponse {
        this['marker'] = marker;
        return this;
    }
}