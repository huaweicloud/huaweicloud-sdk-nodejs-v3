
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlertNoticeConfigResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public enabled?: boolean;
    private 'topic_urn'?: string | undefined;
    public sendfreq?: number;
    public locale?: string;
    public times?: number;
    public threat?: Array<string>;
    private 'prefer_html'?: boolean | undefined;
    private 'notice_class'?: string | undefined;
    private 'nearly_expired_time'?: string | undefined;
    private 'is_all_enterprise_project'?: boolean | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'update_time'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAlertNoticeConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAlertNoticeConfigResponse {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateAlertNoticeConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withTopicUrn(topicUrn: string): UpdateAlertNoticeConfigResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withSendfreq(sendfreq: number): UpdateAlertNoticeConfigResponse {
        this['sendfreq'] = sendfreq;
        return this;
    }
    public withLocale(locale: string): UpdateAlertNoticeConfigResponse {
        this['locale'] = locale;
        return this;
    }
    public withTimes(times: number): UpdateAlertNoticeConfigResponse {
        this['times'] = times;
        return this;
    }
    public withThreat(threat: Array<string>): UpdateAlertNoticeConfigResponse {
        this['threat'] = threat;
        return this;
    }
    public withPreferHtml(preferHtml: boolean): UpdateAlertNoticeConfigResponse {
        this['prefer_html'] = preferHtml;
        return this;
    }
    public set preferHtml(preferHtml: boolean | undefined) {
        this['prefer_html'] = preferHtml;
    }
    public get preferHtml() {
        return this['prefer_html'];
    }
    public withNoticeClass(noticeClass: string): UpdateAlertNoticeConfigResponse {
        this['notice_class'] = noticeClass;
        return this;
    }
    public set noticeClass(noticeClass: string | undefined) {
        this['notice_class'] = noticeClass;
    }
    public get noticeClass() {
        return this['notice_class'];
    }
    public withNearlyExpiredTime(nearlyExpiredTime: string): UpdateAlertNoticeConfigResponse {
        this['nearly_expired_time'] = nearlyExpiredTime;
        return this;
    }
    public set nearlyExpiredTime(nearlyExpiredTime: string | undefined) {
        this['nearly_expired_time'] = nearlyExpiredTime;
    }
    public get nearlyExpiredTime() {
        return this['nearly_expired_time'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): UpdateAlertNoticeConfigResponse {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject() {
        return this['is_all_enterprise_project'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAlertNoticeConfigResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withUpdateTime(updateTime: number): UpdateAlertNoticeConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}