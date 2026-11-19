import { IntrusionInfoRes } from './IntrusionInfoRes';
import { OverviewInfoRes } from './OverviewInfoRes';
import { ScansInfoRes } from './ScansInfoRes';
import { StatPeriodRes } from './StatPeriodRes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityReportResponse extends SdkResponse {
    private 'report_id'?: number;
    private 'report_sub_id'?: number;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'sending_period'?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'logo_type'?: string;
    private 'logo_id'?: string;
    private 'subscription_type'?: string;
    private 'stat_period'?: StatPeriodRes;
    private 'overview_info'?: OverviewInfoRes;
    private 'scans_info'?: ScansInfoRes;
    private 'intrusion_info'?: IntrusionInfoRes;
    public constructor() { 
        super();
    }
    public withReportId(reportId: number): ShowSecurityReportResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportSubId(reportSubId: number): ShowSecurityReportResponse {
        this['report_sub_id'] = reportSubId;
        return this;
    }
    public set reportSubId(reportSubId: number  | undefined) {
        this['report_sub_id'] = reportSubId;
    }
    public get reportSubId(): number | undefined {
        return this['report_sub_id'];
    }
    public withReportName(reportName: string): ShowSecurityReportResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): ShowSecurityReportResponse {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withSendingPeriod(sendingPeriod: string): ShowSecurityReportResponse {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withTopicUrn(topicUrn: string): ShowSecurityReportResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ShowSecurityReportResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withLogoType(logoType: string): ShowSecurityReportResponse {
        this['logo_type'] = logoType;
        return this;
    }
    public set logoType(logoType: string  | undefined) {
        this['logo_type'] = logoType;
    }
    public get logoType(): string | undefined {
        return this['logo_type'];
    }
    public withLogoId(logoId: string): ShowSecurityReportResponse {
        this['logo_id'] = logoId;
        return this;
    }
    public set logoId(logoId: string  | undefined) {
        this['logo_id'] = logoId;
    }
    public get logoId(): string | undefined {
        return this['logo_id'];
    }
    public withSubscriptionType(subscriptionType: string): ShowSecurityReportResponse {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withStatPeriod(statPeriod: StatPeriodRes): ShowSecurityReportResponse {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: StatPeriodRes  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): StatPeriodRes | undefined {
        return this['stat_period'];
    }
    public withOverviewInfo(overviewInfo: OverviewInfoRes): ShowSecurityReportResponse {
        this['overview_info'] = overviewInfo;
        return this;
    }
    public set overviewInfo(overviewInfo: OverviewInfoRes  | undefined) {
        this['overview_info'] = overviewInfo;
    }
    public get overviewInfo(): OverviewInfoRes | undefined {
        return this['overview_info'];
    }
    public withScansInfo(scansInfo: ScansInfoRes): ShowSecurityReportResponse {
        this['scans_info'] = scansInfo;
        return this;
    }
    public set scansInfo(scansInfo: ScansInfoRes  | undefined) {
        this['scans_info'] = scansInfo;
    }
    public get scansInfo(): ScansInfoRes | undefined {
        return this['scans_info'];
    }
    public withIntrusionInfo(intrusionInfo: IntrusionInfoRes): ShowSecurityReportResponse {
        this['intrusion_info'] = intrusionInfo;
        return this;
    }
    public set intrusionInfo(intrusionInfo: IntrusionInfoRes  | undefined) {
        this['intrusion_info'] = intrusionInfo;
    }
    public get intrusionInfo(): IntrusionInfoRes | undefined {
        return this['intrusion_info'];
    }
}