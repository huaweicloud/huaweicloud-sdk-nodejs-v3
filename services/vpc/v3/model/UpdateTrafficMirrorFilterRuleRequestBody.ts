import { UpdateTrafficMirrorFilterRuleOption } from './UpdateTrafficMirrorFilterRuleOption';


export class UpdateTrafficMirrorFilterRuleRequestBody {
    private 'traffic_mirror_filter_rule'?: UpdateTrafficMirrorFilterRuleOption;
    public constructor(trafficMirrorFilterRule?: UpdateTrafficMirrorFilterRuleOption) { 
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
    }
    public withTrafficMirrorFilterRule(trafficMirrorFilterRule: UpdateTrafficMirrorFilterRuleOption): UpdateTrafficMirrorFilterRuleRequestBody {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
        return this;
    }
    public set trafficMirrorFilterRule(trafficMirrorFilterRule: UpdateTrafficMirrorFilterRuleOption  | undefined) {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
    }
    public get trafficMirrorFilterRule(): UpdateTrafficMirrorFilterRuleOption | undefined {
        return this['traffic_mirror_filter_rule'];
    }
}