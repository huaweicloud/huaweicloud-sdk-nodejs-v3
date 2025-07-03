

export class AlarmDataVO {
    public id?: number;
    private 'gmt_create'?: string;
    private 'region_alarm_event_id'?: number;
    private 'business_name'?: string;
    private 'app_name'?: string;
    private 'version_number'?: number;
    private 'alarm_rule_type'?: string;
    private 'gmt_modify'?: string;
    private 'process_unit'?: string;
    public region?: string;
    private 'instance_id'?: number;
    private 'ip_address'?: string;
    private 'instance_name'?: string;
    private 'env_id'?: number;
    private 'business_id'?: number;
    private 'template_id'?: number;
    private 'alarm_rule_id'?: number;
    private 'monitor_item_id'?: number;
    private 'collector_id'?: number;
    private 'collector_name'?: string;
    private 'alarm_rule_name'?: string;
    private 'alarm_rule_expression'?: string;
    private 'alarm_first_time'?: string;
    private 'alarm_last_time'?: string;
    private 'alarm_level'?: string;
    private 'restrain_key'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: number): AlarmDataVO {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): AlarmDataVO {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withRegionAlarmEventId(regionAlarmEventId: number): AlarmDataVO {
        this['region_alarm_event_id'] = regionAlarmEventId;
        return this;
    }
    public set regionAlarmEventId(regionAlarmEventId: number  | undefined) {
        this['region_alarm_event_id'] = regionAlarmEventId;
    }
    public get regionAlarmEventId(): number | undefined {
        return this['region_alarm_event_id'];
    }
    public withBusinessName(businessName: string): AlarmDataVO {
        this['business_name'] = businessName;
        return this;
    }
    public set businessName(businessName: string  | undefined) {
        this['business_name'] = businessName;
    }
    public get businessName(): string | undefined {
        return this['business_name'];
    }
    public withAppName(appName: string): AlarmDataVO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVersionNumber(versionNumber: number): AlarmDataVO {
        this['version_number'] = versionNumber;
        return this;
    }
    public set versionNumber(versionNumber: number  | undefined) {
        this['version_number'] = versionNumber;
    }
    public get versionNumber(): number | undefined {
        return this['version_number'];
    }
    public withAlarmRuleType(alarmRuleType: string): AlarmDataVO {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): string | undefined {
        return this['alarm_rule_type'];
    }
    public withGmtModify(gmtModify: string): AlarmDataVO {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withProcessUnit(processUnit: string): AlarmDataVO {
        this['process_unit'] = processUnit;
        return this;
    }
    public set processUnit(processUnit: string  | undefined) {
        this['process_unit'] = processUnit;
    }
    public get processUnit(): string | undefined {
        return this['process_unit'];
    }
    public withRegion(region: string): AlarmDataVO {
        this['region'] = region;
        return this;
    }
    public withInstanceId(instanceId: number): AlarmDataVO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withIpAddress(ipAddress: string): AlarmDataVO {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withInstanceName(instanceName: string): AlarmDataVO {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEnvId(envId: number): AlarmDataVO {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withBusinessId(businessId: number): AlarmDataVO {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withTemplateId(templateId: number): AlarmDataVO {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withAlarmRuleId(alarmRuleId: number): AlarmDataVO {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
    public withMonitorItemId(monitorItemId: number): AlarmDataVO {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withCollectorId(collectorId: number): AlarmDataVO {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withCollectorName(collectorName: string): AlarmDataVO {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withAlarmRuleName(alarmRuleName: string): AlarmDataVO {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withAlarmRuleExpression(alarmRuleExpression: string): AlarmDataVO {
        this['alarm_rule_expression'] = alarmRuleExpression;
        return this;
    }
    public set alarmRuleExpression(alarmRuleExpression: string  | undefined) {
        this['alarm_rule_expression'] = alarmRuleExpression;
    }
    public get alarmRuleExpression(): string | undefined {
        return this['alarm_rule_expression'];
    }
    public withAlarmFirstTime(alarmFirstTime: string): AlarmDataVO {
        this['alarm_first_time'] = alarmFirstTime;
        return this;
    }
    public set alarmFirstTime(alarmFirstTime: string  | undefined) {
        this['alarm_first_time'] = alarmFirstTime;
    }
    public get alarmFirstTime(): string | undefined {
        return this['alarm_first_time'];
    }
    public withAlarmLastTime(alarmLastTime: string): AlarmDataVO {
        this['alarm_last_time'] = alarmLastTime;
        return this;
    }
    public set alarmLastTime(alarmLastTime: string  | undefined) {
        this['alarm_last_time'] = alarmLastTime;
    }
    public get alarmLastTime(): string | undefined {
        return this['alarm_last_time'];
    }
    public withAlarmLevel(alarmLevel: string): AlarmDataVO {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withRestrainKey(restrainKey: string): AlarmDataVO {
        this['restrain_key'] = restrainKey;
        return this;
    }
    public set restrainKey(restrainKey: string  | undefined) {
        this['restrain_key'] = restrainKey;
    }
    public get restrainKey(): string | undefined {
        return this['restrain_key'];
    }
    public withStatus(status: string): AlarmDataVO {
        this['status'] = status;
        return this;
    }
}