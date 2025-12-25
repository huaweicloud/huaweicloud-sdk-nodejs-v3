import { CreateReportRequestBodyReportRange } from './CreateReportRequestBodyReportRange';
import { ReportRuleInfo } from './ReportRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportInfoResponse extends SdkResponse {
    public id?: string;
    private 'report_name'?: string;
    private 'report_period'?: ShowReportInfoResponseReportPeriodEnum | string;
    private 'report_range'?: CreateReportRequestBodyReportRange;
    public language?: string;
    private 'notification_task'?: string;
    private 'layout_id'?: string;
    public status?: ShowReportInfoResponseStatusEnum | string;
    private 'is_generated'?: boolean;
    private 'report_rule_infos'?: Array<ReportRuleInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowReportInfoResponse {
        this['id'] = id;
        return this;
    }
    public withReportName(reportName: string): ShowReportInfoResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportPeriod(reportPeriod: ShowReportInfoResponseReportPeriodEnum | string): ShowReportInfoResponse {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: ShowReportInfoResponseReportPeriodEnum | string  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): ShowReportInfoResponseReportPeriodEnum | string | undefined {
        return this['report_period'];
    }
    public withReportRange(reportRange: CreateReportRequestBodyReportRange): ShowReportInfoResponse {
        this['report_range'] = reportRange;
        return this;
    }
    public set reportRange(reportRange: CreateReportRequestBodyReportRange  | undefined) {
        this['report_range'] = reportRange;
    }
    public get reportRange(): CreateReportRequestBodyReportRange | undefined {
        return this['report_range'];
    }
    public withLanguage(language: string): ShowReportInfoResponse {
        this['language'] = language;
        return this;
    }
    public withNotificationTask(notificationTask: string): ShowReportInfoResponse {
        this['notification_task'] = notificationTask;
        return this;
    }
    public set notificationTask(notificationTask: string  | undefined) {
        this['notification_task'] = notificationTask;
    }
    public get notificationTask(): string | undefined {
        return this['notification_task'];
    }
    public withLayoutId(layoutId: string): ShowReportInfoResponse {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withStatus(status: ShowReportInfoResponseStatusEnum | string): ShowReportInfoResponse {
        this['status'] = status;
        return this;
    }
    public withIsGenerated(isGenerated: boolean): ShowReportInfoResponse {
        this['is_generated'] = isGenerated;
        return this;
    }
    public set isGenerated(isGenerated: boolean  | undefined) {
        this['is_generated'] = isGenerated;
    }
    public get isGenerated(): boolean | undefined {
        return this['is_generated'];
    }
    public withReportRuleInfos(reportRuleInfos: Array<ReportRuleInfo>): ShowReportInfoResponse {
        this['report_rule_infos'] = reportRuleInfos;
        return this;
    }
    public set reportRuleInfos(reportRuleInfos: Array<ReportRuleInfo>  | undefined) {
        this['report_rule_infos'] = reportRuleInfos;
    }
    public get reportRuleInfos(): Array<ReportRuleInfo> | undefined {
        return this['report_rule_infos'];
    }
    public withXRequestId(xRequestId: string): ShowReportInfoResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReportInfoResponseReportPeriodEnum {
    WEEKLY = 'weekly',
    DAILY = 'daily',
    ANNUAL = 'annual',
    MONTHLY = 'monthly'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowReportInfoResponseStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
