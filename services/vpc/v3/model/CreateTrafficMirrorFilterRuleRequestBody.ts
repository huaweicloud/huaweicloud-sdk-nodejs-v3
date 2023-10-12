import { CreateTrafficMirrorFilterRuleOption } from './CreateTrafficMirrorFilterRuleOption';


export class CreateTrafficMirrorFilterRuleRequestBody {
    private 'traffic_mirror_filter_rule'?: CreateTrafficMirrorFilterRuleOption;
    public constructor(trafficMirrorFilterRule?: CreateTrafficMirrorFilterRuleOption) { 
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
    }
    public withTrafficMirrorFilterRule(trafficMirrorFilterRule: CreateTrafficMirrorFilterRuleOption): CreateTrafficMirrorFilterRuleRequestBody {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
        return this;
    }
    public set trafficMirrorFilterRule(trafficMirrorFilterRule: CreateTrafficMirrorFilterRuleOption  | undefined) {
        this['traffic_mirror_filter_rule'] = trafficMirrorFilterRule;
    }
    public get trafficMirrorFilterRule(): CreateTrafficMirrorFilterRuleOption | undefined {
        return this['traffic_mirror_filter_rule'];
    }
}