import { EventStreamingCreateReq } from './EventStreamingCreateReq';
import { EventStreamingCreateReqRuleConfig } from './EventStreamingCreateReqRuleConfig';
import { EventStreamingSink } from './EventStreamingSink';
import { EventStreamingSource } from './EventStreamingSource';
import { RunOption } from './RunOption';


export class EventStreamingUpdateReq {
    public name?: string;
    public description?: string;
    public source?: EventStreamingSource;
    public sink?: EventStreamingSink;
    private 'rule_config'?: EventStreamingCreateReqRuleConfig;
    public option?: RunOption;
    public constructor(name?: string, source?: EventStreamingSource, sink?: EventStreamingSink) { 
        this['name'] = name;
        this['source'] = source;
        this['sink'] = sink;
    }
    public withName(name: string): EventStreamingUpdateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EventStreamingUpdateReq {
        this['description'] = description;
        return this;
    }
    public withSource(source: EventStreamingSource): EventStreamingUpdateReq {
        this['source'] = source;
        return this;
    }
    public withSink(sink: EventStreamingSink): EventStreamingUpdateReq {
        this['sink'] = sink;
        return this;
    }
    public withRuleConfig(ruleConfig: EventStreamingCreateReqRuleConfig): EventStreamingUpdateReq {
        this['rule_config'] = ruleConfig;
        return this;
    }
    public set ruleConfig(ruleConfig: EventStreamingCreateReqRuleConfig  | undefined) {
        this['rule_config'] = ruleConfig;
    }
    public get ruleConfig(): EventStreamingCreateReqRuleConfig | undefined {
        return this['rule_config'];
    }
    public withOption(option: RunOption): EventStreamingUpdateReq {
        this['option'] = option;
        return this;
    }
}