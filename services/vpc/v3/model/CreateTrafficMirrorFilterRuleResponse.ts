import { TrafficMirrorFilterRule } from './TrafficMirrorFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrafficMirrorFilterRuleResponse extends SdkResponse {
    private 'traffic_mirror_filter_rule'?: TrafficMirrorFilterRule;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorFilterRule(trafficMirrorFilterRule: TrafficMirrorFilterRule): CreateTrafficMirrorFilterRuleResponse {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
        return this;
    }
    public set trafficMirrorFilterRule(trafficMirrorFilterRule: TrafficMirrorFilterRule  | undefined) {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
    }
    public get trafficMirrorFilterRule(): TrafficMirrorFilterRule | undefined {
        return this['traffic_mirror_filter_rule'];
    }
    public withRequestId(requestId: string): CreateTrafficMirrorFilterRuleResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}