import { PolicyAction } from './PolicyAction';


export class HighFrequencyScanBlockingConfig {
    public action?: PolicyAction;
    private 'time_range'?: number;
    private 'trigger_threshold'?: number;
    private 'max_num_triggered_rules'?: number;
    private 'blocking_period'?: number;
    public constructor() { 
    }
    public withAction(action: PolicyAction): HighFrequencyScanBlockingConfig {
        this['action'] = action;
        return this;
    }
    public withTimeRange(timeRange: number): HighFrequencyScanBlockingConfig {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: number  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): number | undefined {
        return this['time_range'];
    }
    public withTriggerThreshold(triggerThreshold: number): HighFrequencyScanBlockingConfig {
        this['trigger_threshold'] = triggerThreshold;
        return this;
    }
    public set triggerThreshold(triggerThreshold: number  | undefined) {
        this['trigger_threshold'] = triggerThreshold;
    }
    public get triggerThreshold(): number | undefined {
        return this['trigger_threshold'];
    }
    public withMaxNumTriggeredRules(maxNumTriggeredRules: number): HighFrequencyScanBlockingConfig {
        this['max_num_triggered_rules'] = maxNumTriggeredRules;
        return this;
    }
    public set maxNumTriggeredRules(maxNumTriggeredRules: number  | undefined) {
        this['max_num_triggered_rules'] = maxNumTriggeredRules;
    }
    public get maxNumTriggeredRules(): number | undefined {
        return this['max_num_triggered_rules'];
    }
    public withBlockingPeriod(blockingPeriod: number): HighFrequencyScanBlockingConfig {
        this['blocking_period'] = blockingPeriod;
        return this;
    }
    public set blockingPeriod(blockingPeriod: number  | undefined) {
        this['blocking_period'] = blockingPeriod;
    }
    public get blockingPeriod(): number | undefined {
        return this['blocking_period'];
    }
}