
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonthlyOperaReportNotifyInfoResponse extends SdkResponse {
    public status?: string;
    public title?: string;
    private 'report_id'?: string;
    private 'current_month'?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowMonthlyOperaReportNotifyInfoResponse {
        this['status'] = status;
        return this;
    }
    public withTitle(title: string): ShowMonthlyOperaReportNotifyInfoResponse {
        this['title'] = title;
        return this;
    }
    public withReportId(reportId: string): ShowMonthlyOperaReportNotifyInfoResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withCurrentMonth(currentMonth: number): ShowMonthlyOperaReportNotifyInfoResponse {
        this['current_month'] = currentMonth;
        return this;
    }
    public set currentMonth(currentMonth: number  | undefined) {
        this['current_month'] = currentMonth;
    }
    public get currentMonth(): number | undefined {
        return this['current_month'];
    }
}