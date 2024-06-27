

export class ListMetricOrEventAlarmRuleRequest {
    public name?: string;
    public limit?: string;
    public offset?: string;
    private 'sort_by'?: string;
    private 'event_source'?: string;
    private 'event_severity'?: string;
    private 'alarm_rule_status'?: ListMetricOrEventAlarmRuleRequestAlarmRuleStatusEnum | string;
    private 'alarm_rule_type'?: ListMetricOrEventAlarmRuleRequestAlarmRuleTypeEnum | string;
    private 'prom_instance_id'?: string;
    private 'bind_notification_rule_id'?: string;
    private 'related_cce_clusters'?: string;
    private 'Enterprise-Project-Id'?: string;
    public constructor() { 
    }
    public withName(name: string): ListMetricOrEventAlarmRuleRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: string): ListMetricOrEventAlarmRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListMetricOrEventAlarmRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListMetricOrEventAlarmRuleRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withEventSource(eventSource: string): ListMetricOrEventAlarmRuleRequest {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withEventSeverity(eventSeverity: string): ListMetricOrEventAlarmRuleRequest {
        this['event_severity'] = eventSeverity;
        return this;
    }
    public set eventSeverity(eventSeverity: string  | undefined) {
        this['event_severity'] = eventSeverity;
    }
    public get eventSeverity(): string | undefined {
        return this['event_severity'];
    }
    public withAlarmRuleStatus(alarmRuleStatus: ListMetricOrEventAlarmRuleRequestAlarmRuleStatusEnum | string): ListMetricOrEventAlarmRuleRequest {
        this['alarm_rule_status'] = alarmRuleStatus;
        return this;
    }
    public set alarmRuleStatus(alarmRuleStatus: ListMetricOrEventAlarmRuleRequestAlarmRuleStatusEnum | string  | undefined) {
        this['alarm_rule_status'] = alarmRuleStatus;
    }
    public get alarmRuleStatus(): ListMetricOrEventAlarmRuleRequestAlarmRuleStatusEnum | string | undefined {
        return this['alarm_rule_status'];
    }
    public withAlarmRuleType(alarmRuleType: ListMetricOrEventAlarmRuleRequestAlarmRuleTypeEnum | string): ListMetricOrEventAlarmRuleRequest {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: ListMetricOrEventAlarmRuleRequestAlarmRuleTypeEnum | string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): ListMetricOrEventAlarmRuleRequestAlarmRuleTypeEnum | string | undefined {
        return this['alarm_rule_type'];
    }
    public withPromInstanceId(promInstanceId: string): ListMetricOrEventAlarmRuleRequest {
        this['prom_instance_id'] = promInstanceId;
        return this;
    }
    public set promInstanceId(promInstanceId: string  | undefined) {
        this['prom_instance_id'] = promInstanceId;
    }
    public get promInstanceId(): string | undefined {
        return this['prom_instance_id'];
    }
    public withBindNotificationRuleId(bindNotificationRuleId: string): ListMetricOrEventAlarmRuleRequest {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
        return this;
    }
    public set bindNotificationRuleId(bindNotificationRuleId: string  | undefined) {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
    }
    public get bindNotificationRuleId(): string | undefined {
        return this['bind_notification_rule_id'];
    }
    public withRelatedCceClusters(relatedCceClusters: string): ListMetricOrEventAlarmRuleRequest {
        this['related_cce_clusters'] = relatedCceClusters;
        return this;
    }
    public set relatedCceClusters(relatedCceClusters: string  | undefined) {
        this['related_cce_clusters'] = relatedCceClusters;
    }
    public get relatedCceClusters(): string | undefined {
        return this['related_cce_clusters'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListMetricOrEventAlarmRuleRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetricOrEventAlarmRuleRequestAlarmRuleStatusEnum {
    OK = 'OK',
    ALARM = 'alarm',
    EFFECTIVE = 'Effective',
    INVALID = 'Invalid'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMetricOrEventAlarmRuleRequestAlarmRuleTypeEnum {
    METRIC = 'metric',
    EVENT = 'event'
}
