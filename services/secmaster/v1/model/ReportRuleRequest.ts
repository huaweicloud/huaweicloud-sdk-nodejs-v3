import { ReportRuleRequestEndTime } from './ReportRuleRequestEndTime';
import { ReportRuleRequestStartTime } from './ReportRuleRequestStartTime';


export class ReportRuleRequest {
    public rule?: string;
    private 'rule_end'?: string;
    private 'start_time'?: ReportRuleRequestStartTime;
    private 'end_time'?: ReportRuleRequestEndTime;
    public constructor() { 
    }
    public withRule(rule: string): ReportRuleRequest {
        this['rule'] = rule;
        return this;
    }
    public withRuleEnd(ruleEnd: string): ReportRuleRequest {
        this['rule_end'] = ruleEnd;
        return this;
    }
    public set ruleEnd(ruleEnd: string  | undefined) {
        this['rule_end'] = ruleEnd;
    }
    public get ruleEnd(): string | undefined {
        return this['rule_end'];
    }
    public withStartTime(startTime: ReportRuleRequestStartTime): ReportRuleRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: ReportRuleRequestStartTime  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): ReportRuleRequestStartTime | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: ReportRuleRequestEndTime): ReportRuleRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: ReportRuleRequestEndTime  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): ReportRuleRequestEndTime | undefined {
        return this['end_time'];
    }
}