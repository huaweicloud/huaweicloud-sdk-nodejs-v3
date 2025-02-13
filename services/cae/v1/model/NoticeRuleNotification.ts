

export class NoticeRuleNotification {
    public protocol?: NoticeRuleNotificationProtocolEnum | string;
    public endpoint?: string;
    public template?: NoticeRuleNotificationTemplateEnum | string;
    public constructor(protocol?: string, endpoint?: string) { 
        this['protocol'] = protocol;
        this['endpoint'] = endpoint;
    }
    public withProtocol(protocol: NoticeRuleNotificationProtocolEnum | string): NoticeRuleNotification {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): NoticeRuleNotification {
        this['endpoint'] = endpoint;
        return this;
    }
    public withTemplate(template: NoticeRuleNotificationTemplateEnum | string): NoticeRuleNotification {
        this['template'] = template;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NoticeRuleNotificationProtocolEnum {
    EMAIL = 'email',
    SMS = 'sms',
    WECHAT = 'wechat'
}
/**
    * @export
    * @enum {string}
    */
export enum NoticeRuleNotificationTemplateEnum {
    ZH = 'ZH',
    EN = 'EN'
}
