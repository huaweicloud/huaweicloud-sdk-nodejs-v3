

export class AlertNoticeConfig {
    public id?: string;
    public enabled?: boolean;
    private 'topic_urn'?: string;
    public sendfreq?: number;
    public locale?: string;
    public times?: number;
    public name?: string;
    private 'notice_class'?: string;
    private 'nearly_expired_time'?: number;
    private 'is_all_enterprise_project'?: boolean;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): AlertNoticeConfig {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): AlertNoticeConfig {
        this['enabled'] = enabled;
        return this;
    }
    public withTopicUrn(topicUrn: string): AlertNoticeConfig {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSendfreq(sendfreq: number): AlertNoticeConfig {
        this['sendfreq'] = sendfreq;
        return this;
    }
    public withLocale(locale: string): AlertNoticeConfig {
        this['locale'] = locale;
        return this;
    }
    public withTimes(times: number): AlertNoticeConfig {
        this['times'] = times;
        return this;
    }
    public withName(name: string): AlertNoticeConfig {
        this['name'] = name;
        return this;
    }
    public withNoticeClass(noticeClass: string): AlertNoticeConfig {
        this['notice_class'] = noticeClass;
        return this;
    }
    public set noticeClass(noticeClass: string  | undefined) {
        this['notice_class'] = noticeClass;
    }
    public get noticeClass(): string | undefined {
        return this['notice_class'];
    }
    public withNearlyExpiredTime(nearlyExpiredTime: number): AlertNoticeConfig {
        this['nearly_expired_time'] = nearlyExpiredTime;
        return this;
    }
    public set nearlyExpiredTime(nearlyExpiredTime: number  | undefined) {
        this['nearly_expired_time'] = nearlyExpiredTime;
    }
    public get nearlyExpiredTime(): number | undefined {
        return this['nearly_expired_time'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): AlertNoticeConfig {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
    public withDescription(description: string): AlertNoticeConfig {
        this['description'] = description;
        return this;
    }
}