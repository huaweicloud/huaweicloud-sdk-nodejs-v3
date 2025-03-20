import { SlaEscalationRuleInfo } from './SlaEscalationRuleInfo';
import { SlaPreWarningRuleInfo } from './SlaPreWarningRuleInfo';
import { SlaTriggeringRuleInfo } from './SlaTriggeringRuleInfo';


export class SlaRecord {
    private 'status_type'?: SlaRecordStatusTypeEnum | string;
    private 'sub_trigger_node'?: SlaRecordSubTriggerNodeEnum | string;
    private 'sla_status'?: boolean;
    private 'sla_order_id'?: string;
    public duration?: number;
    private 'triggering_rule_enable'?: boolean;
    private 'triggering_rule'?: SlaTriggeringRuleInfo;
    private 'break_time'?: string;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'notice_time'?: string;
    private 'status_start_time'?: string;
    private 'pre_warning_rule_enable'?: boolean;
    private 'pre_warning_rule'?: SlaPreWarningRuleInfo;
    private 'escalate_rule_enable'?: boolean;
    private 'escalate_rules'?: Array<SlaEscalationRuleInfo>;
    private 'current_node'?: boolean;
    public constructor() { 
    }
    public withStatusType(statusType: SlaRecordStatusTypeEnum | string): SlaRecord {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: SlaRecordStatusTypeEnum | string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): SlaRecordStatusTypeEnum | string | undefined {
        return this['status_type'];
    }
    public withSubTriggerNode(subTriggerNode: SlaRecordSubTriggerNodeEnum | string): SlaRecord {
        this['sub_trigger_node'] = subTriggerNode;
        return this;
    }
    public set subTriggerNode(subTriggerNode: SlaRecordSubTriggerNodeEnum | string  | undefined) {
        this['sub_trigger_node'] = subTriggerNode;
    }
    public get subTriggerNode(): SlaRecordSubTriggerNodeEnum | string | undefined {
        return this['sub_trigger_node'];
    }
    public withSlaStatus(slaStatus: boolean): SlaRecord {
        this['sla_status'] = slaStatus;
        return this;
    }
    public set slaStatus(slaStatus: boolean  | undefined) {
        this['sla_status'] = slaStatus;
    }
    public get slaStatus(): boolean | undefined {
        return this['sla_status'];
    }
    public withSlaOrderId(slaOrderId: string): SlaRecord {
        this['sla_order_id'] = slaOrderId;
        return this;
    }
    public set slaOrderId(slaOrderId: string  | undefined) {
        this['sla_order_id'] = slaOrderId;
    }
    public get slaOrderId(): string | undefined {
        return this['sla_order_id'];
    }
    public withDuration(duration: number): SlaRecord {
        this['duration'] = duration;
        return this;
    }
    public withTriggeringRuleEnable(triggeringRuleEnable: boolean): SlaRecord {
        this['triggering_rule_enable'] = triggeringRuleEnable;
        return this;
    }
    public set triggeringRuleEnable(triggeringRuleEnable: boolean  | undefined) {
        this['triggering_rule_enable'] = triggeringRuleEnable;
    }
    public get triggeringRuleEnable(): boolean | undefined {
        return this['triggering_rule_enable'];
    }
    public withTriggeringRule(triggeringRule: SlaTriggeringRuleInfo): SlaRecord {
        this['triggering_rule'] = triggeringRule;
        return this;
    }
    public set triggeringRule(triggeringRule: SlaTriggeringRuleInfo  | undefined) {
        this['triggering_rule'] = triggeringRule;
    }
    public get triggeringRule(): SlaTriggeringRuleInfo | undefined {
        return this['triggering_rule'];
    }
    public withBreakTime(breakTime: string): SlaRecord {
        this['break_time'] = breakTime;
        return this;
    }
    public set breakTime(breakTime: string  | undefined) {
        this['break_time'] = breakTime;
    }
    public get breakTime(): string | undefined {
        return this['break_time'];
    }
    public withOwnerId(ownerId: string): SlaRecord {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): SlaRecord {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withNoticeTime(noticeTime: string): SlaRecord {
        this['notice_time'] = noticeTime;
        return this;
    }
    public set noticeTime(noticeTime: string  | undefined) {
        this['notice_time'] = noticeTime;
    }
    public get noticeTime(): string | undefined {
        return this['notice_time'];
    }
    public withStatusStartTime(statusStartTime: string): SlaRecord {
        this['status_start_time'] = statusStartTime;
        return this;
    }
    public set statusStartTime(statusStartTime: string  | undefined) {
        this['status_start_time'] = statusStartTime;
    }
    public get statusStartTime(): string | undefined {
        return this['status_start_time'];
    }
    public withPreWarningRuleEnable(preWarningRuleEnable: boolean): SlaRecord {
        this['pre_warning_rule_enable'] = preWarningRuleEnable;
        return this;
    }
    public set preWarningRuleEnable(preWarningRuleEnable: boolean  | undefined) {
        this['pre_warning_rule_enable'] = preWarningRuleEnable;
    }
    public get preWarningRuleEnable(): boolean | undefined {
        return this['pre_warning_rule_enable'];
    }
    public withPreWarningRule(preWarningRule: SlaPreWarningRuleInfo): SlaRecord {
        this['pre_warning_rule'] = preWarningRule;
        return this;
    }
    public set preWarningRule(preWarningRule: SlaPreWarningRuleInfo  | undefined) {
        this['pre_warning_rule'] = preWarningRule;
    }
    public get preWarningRule(): SlaPreWarningRuleInfo | undefined {
        return this['pre_warning_rule'];
    }
    public withEscalateRuleEnable(escalateRuleEnable: boolean): SlaRecord {
        this['escalate_rule_enable'] = escalateRuleEnable;
        return this;
    }
    public set escalateRuleEnable(escalateRuleEnable: boolean  | undefined) {
        this['escalate_rule_enable'] = escalateRuleEnable;
    }
    public get escalateRuleEnable(): boolean | undefined {
        return this['escalate_rule_enable'];
    }
    public withEscalateRules(escalateRules: Array<SlaEscalationRuleInfo>): SlaRecord {
        this['escalate_rules'] = escalateRules;
        return this;
    }
    public set escalateRules(escalateRules: Array<SlaEscalationRuleInfo>  | undefined) {
        this['escalate_rules'] = escalateRules;
    }
    public get escalateRules(): Array<SlaEscalationRuleInfo> | undefined {
        return this['escalate_rules'];
    }
    public withCurrentNode(currentNode: boolean): SlaRecord {
        this['current_node'] = currentNode;
        return this;
    }
    public set currentNode(currentNode: boolean  | undefined) {
        this['current_node'] = currentNode;
    }
    public get currentNode(): boolean | undefined {
        return this['current_node'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SlaRecordStatusTypeEnum {
    EVENT_TICKET_NOT_ACCEPTED = 'EVENT_TICKET_NOT_ACCEPTED',
    EVENT_TICKET_PROCESSING = 'EVENT_TICKET_PROCESSING',
    EVENT_TICKET_NOT_IN_TIME = 'EVENT_TICKET_NOT_IN_TIME',
    EVENT_TICKET_RESOLVED = 'EVENT_TICKET_RESOLVED',
    ALARM_TICKET_RESOLVED = 'ALARM_TICKET_RESOLVED',
    ALARM_TICKET_ALARMING = 'ALARM_TICKET_ALARMING',
    ALARM_TICKET_NOT_IN_TIME = 'ALARM_TICKET_NOT_IN_TIME',
    CHANGE_NOT_IN_TIME = 'CHANGE_NOT_IN_TIME',
    CHANGE_REVIEW = 'CHANGE_REVIEW',
    CHANGE_IMPLEMENTATION = 'CHANGE_IMPLEMENTATION',
    CHANGE_VERIFICATION = 'CHANGE_VERIFICATION',
    TO_DO_TASKS_NOT_IN_TIME = 'TO_DO_TASKS_NOT_IN_TIME',
    TO_DO_TASKS_TO_BE_HANDLED = 'TO_DO_TASKS_TO_BE_HANDLED',
    TO_DO_TASKS_PROCESSING = 'TO_DO_TASKS_PROCESSING',
    TO_DO_TASKS_COMPLETED = 'TO_DO_TASKS_COMPLETED',
    ISSUE_TICKET_NOT_IN_TIME = 'ISSUE_TICKET_NOT_IN_TIME',
    ISSUE_TICKET_NOT_ACCEPTED = 'ISSUE_TICKET_NOT_ACCEPTED',
    ISSUE_TICKET_POSITIONING = 'ISSUE_TICKET_POSITIONING',
    ISSUE_TICKET_WAITING_IMPLEMENT = 'ISSUE_TICKET_WAITING_IMPLEMENT',
    ISSUE_TICKET_RESOLVED = 'ISSUE_TICKET_RESOLVED'
}
/**
    * @export
    * @enum {string}
    */
export enum SlaRecordSubTriggerNodeEnum {
    NORMAL = 'NORMAL',
    FORWARDING = 'FORWARDING',
    RESUBMIT = 'RESUBMIT'
}
