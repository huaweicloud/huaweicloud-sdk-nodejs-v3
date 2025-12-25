

export class EmailInfo {
    private 'report_content'?: string;
    private 'email_title'?: string;
    private 'email_to'?: string;
    private 'email_cc'?: string;
    private 'email_content'?: string;
    private 'report_file_type'?: string;
    public constructor() { 
    }
    public withReportContent(reportContent: string): EmailInfo {
        this['report_content'] = reportContent;
        return this;
    }
    public set reportContent(reportContent: string  | undefined) {
        this['report_content'] = reportContent;
    }
    public get reportContent(): string | undefined {
        return this['report_content'];
    }
    public withEmailTitle(emailTitle: string): EmailInfo {
        this['email_title'] = emailTitle;
        return this;
    }
    public set emailTitle(emailTitle: string  | undefined) {
        this['email_title'] = emailTitle;
    }
    public get emailTitle(): string | undefined {
        return this['email_title'];
    }
    public withEmailTo(emailTo: string): EmailInfo {
        this['email_to'] = emailTo;
        return this;
    }
    public set emailTo(emailTo: string  | undefined) {
        this['email_to'] = emailTo;
    }
    public get emailTo(): string | undefined {
        return this['email_to'];
    }
    public withEmailCc(emailCc: string): EmailInfo {
        this['email_cc'] = emailCc;
        return this;
    }
    public set emailCc(emailCc: string  | undefined) {
        this['email_cc'] = emailCc;
    }
    public get emailCc(): string | undefined {
        return this['email_cc'];
    }
    public withEmailContent(emailContent: string): EmailInfo {
        this['email_content'] = emailContent;
        return this;
    }
    public set emailContent(emailContent: string  | undefined) {
        this['email_content'] = emailContent;
    }
    public get emailContent(): string | undefined {
        return this['email_content'];
    }
    public withReportFileType(reportFileType: string): EmailInfo {
        this['report_file_type'] = reportFileType;
        return this;
    }
    public set reportFileType(reportFileType: string  | undefined) {
        this['report_file_type'] = reportFileType;
    }
    public get reportFileType(): string | undefined {
        return this['report_file_type'];
    }
}