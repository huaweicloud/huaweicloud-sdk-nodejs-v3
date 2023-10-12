

export class DeleteTrafficMirrorFilterRuleRequest {
    private 'traffic_mirror_filter_rule_id'?: string;
    public constructor(trafficMirrorFilterRuleId?: string) { 
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
    }
    public withTrafficMirrorFilterRuleId(trafficMirrorFilterRuleId: string): DeleteTrafficMirrorFilterRuleRequest {
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
        return this;
    }
    public set trafficMirrorFilterRuleId(trafficMirrorFilterRuleId: string  | undefined) {
        this['traffic_mirror_filter_rule_id'] = trafficMirrorFilterRuleId;
    }
    public get trafficMirrorFilterRuleId(): string | undefined {
        return this['traffic_mirror_filter_rule_id'];
    }
}