import { TrafficMirrorFilterRule } from './TrafficMirrorFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateTrafficMirrorFilterRulesResponse extends SdkResponse {
    private 'traffic_mirror_filter_rules'?: Array<TrafficMirrorFilterRule>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorFilterRules(trafficMirrorFilterRules: Array<TrafficMirrorFilterRule>): BatchCreateTrafficMirrorFilterRulesResponse {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
        return this;
    }
    public set trafficMirrorFilterRules(trafficMirrorFilterRules: Array<TrafficMirrorFilterRule>  | undefined) {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
    }
    public get trafficMirrorFilterRules(): Array<TrafficMirrorFilterRule> | undefined {
        return this['traffic_mirror_filter_rules'];
    }
    public withRequestId(requestId: string): BatchCreateTrafficMirrorFilterRulesResponse {
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