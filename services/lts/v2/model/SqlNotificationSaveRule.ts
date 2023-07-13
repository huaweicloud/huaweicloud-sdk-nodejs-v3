import { Topics } from './Topics';


export class SqlNotificationSaveRule {
    public language: SqlNotificationSaveRuleLanguageEnum;
    public timezone?: string;
    private 'user_name': string | undefined;
    public topics: Array<Topics>;
    private 'template_name': string | undefined;
    public constructor(language?: any, userName?: any, topics?: any, templateName?: any) { 
        this['language'] = language;
        this['user_name'] = userName;
        this['topics'] = topics;
        this['template_name'] = templateName;
    }
    public withLanguage(language: SqlNotificationSaveRuleLanguageEnum): SqlNotificationSaveRule {
        this['language'] = language;
        return this;
    }
    public withTimezone(timezone: string): SqlNotificationSaveRule {
        this['timezone'] = timezone;
        return this;
    }
    public withUserName(userName: string): SqlNotificationSaveRule {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withTopics(topics: Array<Topics>): SqlNotificationSaveRule {
        this['topics'] = topics;
        return this;
    }
    public withTemplateName(templateName: string): SqlNotificationSaveRule {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlNotificationSaveRuleLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
