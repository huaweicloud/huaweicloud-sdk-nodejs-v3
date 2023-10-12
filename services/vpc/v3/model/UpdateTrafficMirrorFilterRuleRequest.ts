import { UpdateTrafficMirrorFilterRuleRequestBody } from './UpdateTrafficMirrorFilterRuleRequestBody';


export class UpdateTrafficMirrorFilterRuleRequest {
    private 'traffic_mirror_filter_rule_id'?: string;
    public body?: UpdateTrafficMirrorFilterRuleRequestBody;
    public constructor(trafficMirrorFilterRuleId?: string) { 
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
    }
    public withTrafficMirrorFilterRuleId(trafficMirrorFilterRuleId: string): UpdateTrafficMirrorFilterRuleRequest {
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
        return this;
    }
    public set trafficMirrorFilterRuleId(trafficMirrorFilterRuleId: string  | undefined) {
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
    }
    public get trafficMirrorFilterRuleId(): string | undefined {
        return this['traffic_mirror_filter_rule_id'];
    }
    public withBody(body: UpdateTrafficMirrorFilterRuleRequestBody): UpdateTrafficMirrorFilterRuleRequest {
        this['body'] = body;
        return this;
    }
}