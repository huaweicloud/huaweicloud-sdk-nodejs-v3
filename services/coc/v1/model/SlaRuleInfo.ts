import { SlaEscalationRuleInfo } from './SlaEscalationRuleInfo';
import { SlaPreWarningRuleInfo } from './SlaPreWarningRuleInfo';
import { SlaTriggeringRuleInfo } from './SlaTriggeringRuleInfo';


export class SlaRuleInfo {
    private 'status_type'?: SlaRuleInfoStatusTypeEnum | string;
    private 'triggering_rule_enable'?: boolean;
    private 'pre_warning_rule_enable'?: boolean;
    private 'escalate_rule_enable'?: boolean;
    private 'triggering_rule'?: SlaTriggeringRuleInfo;
    private 'pre_warning_rule'?: SlaPreWarningRuleInfo;
    private 'escalate_rules'?: Array<SlaEscalationRuleInfo>;
    public constructor(statusType?: string, triggeringRuleEnable?: boolean, preWarningRuleEnable?: boolean) { 
        this['status_type'] = statusType;
        this['triggering_rule_enable'] = triggeringRuleEnable;
        this['pre_warning_rule_enable'] = preWarningRuleEnable;
    }
    public withStatusType(statusType: SlaRuleInfoStatusTypeEnum | string): SlaRuleInfo {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: SlaRuleInfoStatusTypeEnum | string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): SlaRuleInfoStatusTypeEnum | string | undefined {
        return this['status_type'];
    }
    public withTriggeringRuleEnable(triggeringRuleEnable: boolean): SlaRuleInfo {
        this['triggering_rule_enable'] = triggeringRuleEnable;
        return this;
    }
    public set triggeringRuleEnable(triggeringRuleEnable: boolean  | undefined) {
        this['triggering_rule_enable'] = triggeringRuleEnable;
    }
    public get triggeringRuleEnable(): boolean | undefined {
        return this['triggering_rule_enable'];
    }
    public withPreWarningRuleEnable(preWarningRuleEnable: boolean): SlaRuleInfo {
        this['pre_warning_rule_enable'] = preWarningRuleEnable;
        return this;
    }
    public set preWarningRuleEnable(preWarningRuleEnable: boolean  | undefined) {
        this['pre_warning_rule_enable'] = preWarningRuleEnable;
    }
    public get preWarningRuleEnable(): boolean | undefined {
        return this['pre_warning_rule_enable'];
    }
    public withEscalateRuleEnable(escalateRuleEnable: boolean): SlaRuleInfo {
        this['escalate_rule_enable'] = escalateRuleEnable;
        return this;
    }
    public set escalateRuleEnable(escalateRuleEnable: boolean  | undefined) {
        this['escalate_rule_enable'] = escalateRuleEnable;
    }
    public get escalateRuleEnable(): boolean | undefined {
        return this['escalate_rule_enable'];
    }
    public withTriggeringRule(triggeringRule: SlaTriggeringRuleInfo): SlaRuleInfo {
        this['triggering_rule'] = triggeringRule;
        return this;
    }
    public set triggeringRule(triggeringRule: SlaTriggeringRuleInfo  | undefined) {
        this['triggering_rule'] = triggeringRule;
    }
    public get triggeringRule(): SlaTriggeringRuleInfo | undefined {
        return this['triggering_rule'];
    }
    public withPreWarningRule(preWarningRule: SlaPreWarningRuleInfo): SlaRuleInfo {
        this['pre_warning_rule'] = preWarningRule;
        return this;
    }
    public set preWarningRule(preWarningRule: SlaPreWarningRuleInfo  | undefined) {
        this['pre_warning_rule'] = preWarningRule;
    }
    public get preWarningRule(): SlaPreWarningRuleInfo | undefined {
        return this['pre_warning_rule'];
    }
    public withEscalateRules(escalateRules: Array<SlaEscalationRuleInfo>): SlaRuleInfo {
        this['escalate_rules'] = escalateRules;
        return this;
    }
    public set escalateRules(escalateRules: Array<SlaEscalationRuleInfo>  | undefined) {
        this['escalate_rules'] = escalateRules;
    }
    public get escalateRules(): Array<SlaEscalationRuleInfo> | undefined {
        return this['escalate_rules'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SlaRuleInfoStatusTypeEnum {
    EVENT_TICKET_NOT_ACCEPTED = 'EVENT_TICKET_NOT_ACCEPTED',
    EVENT_TICKET_PROCESSING = 'EVENT_TICKET_PROCESSING',
    EVENT_TICKET_RESOLVED = 'EVENT_TICKET_RESOLVED',
    ALARM_TICKET_ALARMING = 'ALARM_TICKET_ALARMING',
    CHANGE_REVIEW = 'CHANGE_REVIEW',
    CHANGE_IMPLEMENTATION = 'CHANGE_IMPLEMENTATION',
    CHANGE_VERIFICATION = 'CHANGE_VERIFICATION',
    TO_DO_TASKS_TO_BE_HANDLED = 'TO_DO_TASKS_TO_BE_HANDLED',
    TO_DO_TASKS_PROCESSING = 'TO_DO_TASKS_PROCESSING',
    ISSUE_TICKET_NOT_ACCEPTED = 'ISSUE_TICKET_NOT_ACCEPTED',
    ISSUE_TICKET_POSITIONING = 'ISSUE_TICKET_POSITIONING',
    ISSUE_TICKET_WAITING_IMPLEMENT = 'ISSUE_TICKET_WAITING_IMPLEMENT',
    ISSUE_TICKET_RESOLVED = 'ISSUE_TICKET_RESOLVED'
}
