

export class FrontAlarmNotifyResult {
    public id?: number;
    private 'gmt_create'?: string;
    private 'notify_type'?: string;
    private 'alarm_rule_id'?: number;
    private 'template_id'?: number;
    private 'alarm_data_event_id'?: number;
    private 'notify_status'?: boolean;
    private 'alarm_content'?: string;
    public constructor() { 
    }
    public withId(id: number): FrontAlarmNotifyResult {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): FrontAlarmNotifyResult {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withNotifyType(notifyType: string): FrontAlarmNotifyResult {
        this['notify_type'] = notifyType;
        return this;
    }
    public set notifyType(notifyType: string  | undefined) {
        this['notify_type'] = notifyType;
    }
    public get notifyType(): string | undefined {
        return this['notify_type'];
    }
    public withAlarmRuleId(alarmRuleId: number): FrontAlarmNotifyResult {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
    public withTemplateId(templateId: number): FrontAlarmNotifyResult {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withAlarmDataEventId(alarmDataEventId: number): FrontAlarmNotifyResult {
        this['alarm_data_event_id'] = alarmDataEventId;
        return this;
    }
    public set alarmDataEventId(alarmDataEventId: number  | undefined) {
        this['alarm_data_event_id'] = alarmDataEventId;
    }
    public get alarmDataEventId(): number | undefined {
        return this['alarm_data_event_id'];
    }
    public withNotifyStatus(notifyStatus: boolean): FrontAlarmNotifyResult {
        this['notify_status'] = notifyStatus;
        return this;
    }
    public set notifyStatus(notifyStatus: boolean  | undefined) {
        this['notify_status'] = notifyStatus;
    }
    public get notifyStatus(): boolean | undefined {
        return this['notify_status'];
    }
    public withAlarmContent(alarmContent: string): FrontAlarmNotifyResult {
        this['alarm_content'] = alarmContent;
        return this;
    }
    public set alarmContent(alarmContent: string  | undefined) {
        this['alarm_content'] = alarmContent;
    }
    public get alarmContent(): string | undefined {
        return this['alarm_content'];
    }
}