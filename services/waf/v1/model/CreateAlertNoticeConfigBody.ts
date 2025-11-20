

export class CreateAlertNoticeConfigBody {
    public enabled?: boolean;
    private 'prefer_html'?: boolean;
    private 'topic_urn'?: string;
    public sendfreq?: number;
    public local?: string;
    public times?: number;
    public name?: string;
    private 'notice_class'?: string;
    private 'nearly_expired_time'?: number;
    private 'is_all_enterprise_project'?: boolean;
    public description?: string;
    public threat?: Array<string>;
    private 'rule_type'?: Array<string>;
    public constructor(enabled?: boolean, preferHtml?: boolean, topicUrn?: string, local?: string, name?: string, noticeClass?: string, isAllEnterpriseProject?: boolean) { 
        this['enabled'] = enabled;
        this['prefer_html'] = preferHtml;
        this['topic_urn'] = topicUrn;
        this['local'] = local;
        this['name'] = name;
        this['notice_class'] = noticeClass;
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public withEnabled(enabled: boolean): CreateAlertNoticeConfigBody {
        this['enabled'] = enabled;
        return this;
    }
    public withPreferHtml(preferHtml: boolean): CreateAlertNoticeConfigBody {
        this['prefer_html'] = preferHtml;
        return this;
    }
    public set preferHtml(preferHtml: boolean  | undefined) {
        this['prefer_html'] = preferHtml;
    }
    public get preferHtml(): boolean | undefined {
        return this['prefer_html'];
    }
    public withTopicUrn(topicUrn: string): CreateAlertNoticeConfigBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSendfreq(sendfreq: number): CreateAlertNoticeConfigBody {
        this['sendfreq'] = sendfreq;
        return this;
    }
    public withLocal(local: string): CreateAlertNoticeConfigBody {
        this['local'] = local;
        return this;
    }
    public withTimes(times: number): CreateAlertNoticeConfigBody {
        this['times'] = times;
        return this;
    }
    public withName(name: string): CreateAlertNoticeConfigBody {
        this['name'] = name;
        return this;
    }
    public withNoticeClass(noticeClass: string): CreateAlertNoticeConfigBody {
        this['notice_class'] = noticeClass;
        return this;
    }
    public set noticeClass(noticeClass: string  | undefined) {
        this['notice_class'] = noticeClass;
    }
    public get noticeClass(): string | undefined {
        return this['notice_class'];
    }
    public withNearlyExpiredTime(nearlyExpiredTime: number): CreateAlertNoticeConfigBody {
        this['nearly_expired_time'] = nearlyExpiredTime;
        return this;
    }
    public set nearlyExpiredTime(nearlyExpiredTime: number  | undefined) {
        this['nearly_expired_time'] = nearlyExpiredTime;
    }
    public get nearlyExpiredTime(): number | undefined {
        return this['nearly_expired_time'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): CreateAlertNoticeConfigBody {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
    public withDescription(description: string): CreateAlertNoticeConfigBody {
        this['description'] = description;
        return this;
    }
    public withThreat(threat: Array<string>): CreateAlertNoticeConfigBody {
        this['threat'] = threat;
        return this;
    }
    public withRuleType(ruleType: Array<string>): CreateAlertNoticeConfigBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: Array<string>  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): Array<string> | undefined {
        return this['rule_type'];
    }
}