

export class NoticeTypeNotificationTemplateList {
    private 'notice_type'?: NoticeTypeNotificationTemplateListNoticeTypeEnum | string;
    private 'alarm_notification_template_id'?: string;
    private 'alarm_notification_template_name'?: string;
    public constructor(noticeType?: string, alarmNotificationTemplateId?: string) { 
        this['notice_type'] = noticeType;
        this['alarm_notification_template_id'] = alarmNotificationTemplateId;
    }
    public withNoticeType(noticeType: NoticeTypeNotificationTemplateListNoticeTypeEnum | string): NoticeTypeNotificationTemplateList {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: NoticeTypeNotificationTemplateListNoticeTypeEnum | string  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): NoticeTypeNotificationTemplateListNoticeTypeEnum | string | undefined {
        return this['notice_type'];
    }
    public withAlarmNotificationTemplateId(alarmNotificationTemplateId: string): NoticeTypeNotificationTemplateList {
        this['alarm_notification_template_id'] = alarmNotificationTemplateId;
        return this;
    }
    public set alarmNotificationTemplateId(alarmNotificationTemplateId: string  | undefined) {
        this['alarm_notification_template_id'] = alarmNotificationTemplateId;
    }
    public get alarmNotificationTemplateId(): string | undefined {
        return this['alarm_notification_template_id'];
    }
    public withAlarmNotificationTemplateName(alarmNotificationTemplateName: string): NoticeTypeNotificationTemplateList {
        this['alarm_notification_template_name'] = alarmNotificationTemplateName;
        return this;
    }
    public set alarmNotificationTemplateName(alarmNotificationTemplateName: string  | undefined) {
        this['alarm_notification_template_name'] = alarmNotificationTemplateName;
    }
    public get alarmNotificationTemplateName(): string | undefined {
        return this['alarm_notification_template_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NoticeTypeNotificationTemplateListNoticeTypeEnum {
    SMS = 'sms',
    EMAIL = 'email',
    HTTP_S = 'http(s)',
    SMN = 'smn',
    WELINK = 'welink',
    DINGDING = 'dingding',
    WECHAT = 'wechat',
    FEISHU = 'feishu',
    WECOMGROUP = 'wecomgroup'
}
