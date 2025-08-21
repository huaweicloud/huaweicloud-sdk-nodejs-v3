

export class ShowFirewallReportRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'report_profile_id'?: string;
    private 'report_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, reportProfileId?: string, reportId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['report_profile_id'] = reportProfileId;
        this['report_id'] = reportId;
    }
    public withProjectId(projectId: string): ShowFirewallReportRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowFirewallReportRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withReportProfileId(reportProfileId: string): ShowFirewallReportRequest {
        this['report_profile_id'] = reportProfileId;
        return this;
    }
    public set reportProfileId(reportProfileId: string  | undefined) {
        this['report_profile_id'] = reportProfileId;
    }
    public get reportProfileId(): string | undefined {
        return this['report_profile_id'];
    }
    public withReportId(reportId: string): ShowFirewallReportRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
}