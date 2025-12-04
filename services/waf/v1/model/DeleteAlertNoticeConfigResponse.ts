
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAlertNoticeConfigResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public enabled?: boolean;
    private 'topic_urn'?: string;
    public sendfreq?: number;
    public locale?: string;
    public times?: number;
    public threat?: Array<string>;
    private 'prefer_html'?: boolean;
    private 'notice_class'?: string;
    private 'nearly_expired_time'?: string;
    private 'is_all_enterprise_project'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteAlertNoticeConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteAlertNoticeConfigResponse {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): DeleteAlertNoticeConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withTopicUrn(topicUrn: string): DeleteAlertNoticeConfigResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSendfreq(sendfreq: number): DeleteAlertNoticeConfigResponse {
        this['sendfreq'] = sendfreq;
        return this;
    }
    public withLocale(locale: string): DeleteAlertNoticeConfigResponse {
        this['locale'] = locale;
        return this;
    }
    public withTimes(times: number): DeleteAlertNoticeConfigResponse {
        this['times'] = times;
        return this;
    }
    public withThreat(threat: Array<string>): DeleteAlertNoticeConfigResponse {
        this['threat'] = threat;
        return this;
    }
    public withPreferHtml(preferHtml: boolean): DeleteAlertNoticeConfigResponse {
        this['prefer_html'] = preferHtml;
        return this;
    }
    public set preferHtml(preferHtml: boolean  | undefined) {
        this['prefer_html'] = preferHtml;
    }
    public get preferHtml(): boolean | undefined {
        return this['prefer_html'];
    }
    public withNoticeClass(noticeClass: string): DeleteAlertNoticeConfigResponse {
        this['notice_class'] = noticeClass;
        return this;
    }
    public set noticeClass(noticeClass: string  | undefined) {
        this['notice_class'] = noticeClass;
    }
    public get noticeClass(): string | undefined {
        return this['notice_class'];
    }
    public withNearlyExpiredTime(nearlyExpiredTime: string): DeleteAlertNoticeConfigResponse {
        this['nearly_expired_time'] = nearlyExpiredTime;
        return this;
    }
    public set nearlyExpiredTime(nearlyExpiredTime: string  | undefined) {
        this['nearly_expired_time'] = nearlyExpiredTime;
    }
    public get nearlyExpiredTime(): string | undefined {
        return this['nearly_expired_time'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): DeleteAlertNoticeConfigResponse {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAlertNoticeConfigResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUpdateTime(updateTime: number): DeleteAlertNoticeConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}