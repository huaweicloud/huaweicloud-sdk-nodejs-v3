

export class ReportRuleInfo {
    public id?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    public cycle?: string;
    public rule?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'email_title'?: string;
    private 'email_to'?: string;
    private 'email_content'?: string;
    private 'report_file_type'?: string;
    public constructor(cycle?: string, rule?: string) { 
        this['cycle'] = cycle;
        this['rule'] = rule;
    }
    public withId(id: string): ReportRuleInfo {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ReportRuleInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ReportRuleInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCycle(cycle: string): ReportRuleInfo {
        this['cycle'] = cycle;
        return this;
    }
    public withRule(rule: string): ReportRuleInfo {
        this['rule'] = rule;
        return this;
    }
    public withStartTime(startTime: string): ReportRuleInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ReportRuleInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEmailTitle(emailTitle: string): ReportRuleInfo {
        this['email_title'] = emailTitle;
        return this;
    }
    public set emailTitle(emailTitle: string  | undefined) {
        this['email_title'] = emailTitle;
    }
    public get emailTitle(): string | undefined {
        return this['email_title'];
    }
    public withEmailTo(emailTo: string): ReportRuleInfo {
        this['email_to'] = emailTo;
        return this;
    }
    public set emailTo(emailTo: string  | undefined) {
        this['email_to'] = emailTo;
    }
    public get emailTo(): string | undefined {
        return this['email_to'];
    }
    public withEmailContent(emailContent: string): ReportRuleInfo {
        this['email_content'] = emailContent;
        return this;
    }
    public set emailContent(emailContent: string  | undefined) {
        this['email_content'] = emailContent;
    }
    public get emailContent(): string | undefined {
        return this['email_content'];
    }
    public withReportFileType(reportFileType: string): ReportRuleInfo {
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