import { Topics } from './Topics';


export class NotificationSaveRule {
    public language: NotificationSaveRuleLanguageEnum;
    public timezone?: string;
    private 'user_name': string | undefined;
    public topics: Array<Topics>;
    public constructor(language?: any, userName?: any, topics?: any) { 
        this['language'] = language;
        this['user_name'] = userName;
        this['topics'] = topics;
    }
    public withLanguage(language: NotificationSaveRuleLanguageEnum): NotificationSaveRule {
        this['language'] = language;
        return this;
    }
    public withTimezone(timezone: string): NotificationSaveRule {
        this['timezone'] = timezone;
        return this;
    }
    public withUserName(userName: string): NotificationSaveRule {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withTopics(topics: Array<Topics>): NotificationSaveRule {
        this['topics'] = topics;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationSaveRuleLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
