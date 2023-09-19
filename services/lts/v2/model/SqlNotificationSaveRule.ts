import { Topics } from './Topics';


export class SqlNotificationSaveRule {
    public language?: SqlNotificationSaveRuleLanguageEnum | string;
    public timezone?: string;
    private 'user_name'?: string;
    public topics?: Array<Topics>;
    private 'template_name'?: string;
    public constructor(language?: string, userName?: string, topics?: Array<Topics>, templateName?: string) { 
        this['language'] = language;
        this['user_name'] = userName;
        this['topics'] = topics;
        this['template_name'] = templateName;
    }
    public withLanguage(language: SqlNotificationSaveRuleLanguageEnum | string): SqlNotificationSaveRule {
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
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
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
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
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
