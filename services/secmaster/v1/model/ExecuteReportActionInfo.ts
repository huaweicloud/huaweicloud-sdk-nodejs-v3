import { EmailInfo } from './EmailInfo';
import { PageConfigPx } from './PageConfigPx';


export class ExecuteReportActionInfo {
    private 'report_content'?: string;
    private 'email_title'?: string;
    private 'email_to'?: string;
    private 'email_cc'?: string;
    private 'email_content'?: string;
    private 'report_file_type'?: string;
    public action?: ExecuteReportActionInfoActionEnum | string;
    private 'report_page'?: string;
    private 'page_config'?: PageConfigPx;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withReportContent(reportContent: string): ExecuteReportActionInfo {
        this['report_content'] = reportContent;
        return this;
    }
    public set reportContent(reportContent: string  | undefined) {
        this['report_content'] = reportContent;
    }
    public get reportContent(): string | undefined {
        return this['report_content'];
    }
    public withEmailTitle(emailTitle: string): ExecuteReportActionInfo {
        this['email_title'] = emailTitle;
        return this;
    }
    public set emailTitle(emailTitle: string  | undefined) {
        this['email_title'] = emailTitle;
    }
    public get emailTitle(): string | undefined {
        return this['email_title'];
    }
    public withEmailTo(emailTo: string): ExecuteReportActionInfo {
        this['email_to'] = emailTo;
        return this;
    }
    public set emailTo(emailTo: string  | undefined) {
        this['email_to'] = emailTo;
    }
    public get emailTo(): string | undefined {
        return this['email_to'];
    }
    public withEmailCc(emailCc: string): ExecuteReportActionInfo {
        this['email_cc'] = emailCc;
        return this;
    }
    public set emailCc(emailCc: string  | undefined) {
        this['email_cc'] = emailCc;
    }
    public get emailCc(): string | undefined {
        return this['email_cc'];
    }
    public withEmailContent(emailContent: string): ExecuteReportActionInfo {
        this['email_content'] = emailContent;
        return this;
    }
    public set emailContent(emailContent: string  | undefined) {
        this['email_content'] = emailContent;
    }
    public get emailContent(): string | undefined {
        return this['email_content'];
    }
    public withReportFileType(reportFileType: string): ExecuteReportActionInfo {
        this['report_file_type'] = reportFileType;
        return this;
    }
    public set reportFileType(reportFileType: string  | undefined) {
        this['report_file_type'] = reportFileType;
    }
    public get reportFileType(): string | undefined {
        return this['report_file_type'];
    }
    public withAction(action: ExecuteReportActionInfoActionEnum | string): ExecuteReportActionInfo {
        this['action'] = action;
        return this;
    }
    public withReportPage(reportPage: string): ExecuteReportActionInfo {
        this['report_page'] = reportPage;
        return this;
    }
    public set reportPage(reportPage: string  | undefined) {
        this['report_page'] = reportPage;
    }
    public get reportPage(): string | undefined {
        return this['report_page'];
    }
    public withPageConfig(pageConfig: PageConfigPx): ExecuteReportActionInfo {
        this['page_config'] = pageConfig;
        return this;
    }
    public set pageConfig(pageConfig: PageConfigPx  | undefined) {
        this['page_config'] = pageConfig;
    }
    public get pageConfig(): PageConfigPx | undefined {
        return this['page_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteReportActionInfoActionEnum {
    SEND = 'send',
    DOWNLOAD = 'download'
}
