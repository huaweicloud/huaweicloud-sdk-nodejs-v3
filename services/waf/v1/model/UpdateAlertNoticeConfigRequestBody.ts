

export class UpdateAlertNoticeConfigRequestBody {
    public name?: string;
    public enabled?: boolean;
    private 'topic_urn'?: string;
    public sendfreq?: number;
    public locale?: string;
    public times?: number;
    public threat?: Array<string>;
    private 'notice_class'?: string;
    private 'nearly_expired_time'?: string;
    private 'is_all_enterprise_project'?: boolean;
    public constructor(name?: string, topicUrn?: string, noticeClass?: string) { 
        this['name'] = name;
        this['topic_urn'] = topicUrn;
        this['notice_class'] = noticeClass;
    }
    public withName(name: string): UpdateAlertNoticeConfigRequestBody {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateAlertNoticeConfigRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withTopicUrn(topicUrn: string): UpdateAlertNoticeConfigRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSendfreq(sendfreq: number): UpdateAlertNoticeConfigRequestBody {
        this['sendfreq'] = sendfreq;
        return this;
    }
    public withLocale(locale: string): UpdateAlertNoticeConfigRequestBody {
        this['locale'] = locale;
        return this;
    }
    public withTimes(times: number): UpdateAlertNoticeConfigRequestBody {
        this['times'] = times;
        return this;
    }
    public withThreat(threat: Array<string>): UpdateAlertNoticeConfigRequestBody {
        this['threat'] = threat;
        return this;
    }
    public withNoticeClass(noticeClass: string): UpdateAlertNoticeConfigRequestBody {
        this['notice_class'] = noticeClass;
        return this;
    }
    public set noticeClass(noticeClass: string  | undefined) {
        this['notice_class'] = noticeClass;
    }
    public get noticeClass(): string | undefined {
        return this['notice_class'];
    }
    public withNearlyExpiredTime(nearlyExpiredTime: string): UpdateAlertNoticeConfigRequestBody {
        this['nearly_expired_time'] = nearlyExpiredTime;
        return this;
    }
    public set nearlyExpiredTime(nearlyExpiredTime: string  | undefined) {
        this['nearly_expired_time'] = nearlyExpiredTime;
    }
    public get nearlyExpiredTime(): string | undefined {
        return this['nearly_expired_time'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): UpdateAlertNoticeConfigRequestBody {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
}