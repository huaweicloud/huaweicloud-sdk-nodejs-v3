

export class ListSecurityReportSendingRecordsRequest {
    private 'Content-Type'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListSecurityReportSendingRecordsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withReportName(reportName: string): ListSecurityReportSendingRecordsRequest {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): ListSecurityReportSendingRecordsRequest {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withLimit(limit: number): ListSecurityReportSendingRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityReportSendingRecordsRequest {
        this['offset'] = offset;
        return this;
    }
}