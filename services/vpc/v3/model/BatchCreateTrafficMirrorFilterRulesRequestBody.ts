import { BatchCreateTrafficMirrorFilterRuleOption } from './BatchCreateTrafficMirrorFilterRuleOption';


export class BatchCreateTrafficMirrorFilterRulesRequestBody {
    private 'traffic_mirror_filter_rules'?: Array<BatchCreateTrafficMirrorFilterRuleOption>;
    public constructor(trafficMirrorFilterRules?: Array<BatchCreateTrafficMirrorFilterRuleOption>) { 
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
    }
    public withTrafficMirrorFilterRules(trafficMirrorFilterRules: Array<BatchCreateTrafficMirrorFilterRuleOption>): BatchCreateTrafficMirrorFilterRulesRequestBody {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
        return this;
    }
    public set trafficMirrorFilterRules(trafficMirrorFilterRules: Array<BatchCreateTrafficMirrorFilterRuleOption>  | undefined) {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
    }
    public get trafficMirrorFilterRules(): Array<BatchCreateTrafficMirrorFilterRuleOption> | undefined {
        return this['traffic_mirror_filter_rules'];
    }
}