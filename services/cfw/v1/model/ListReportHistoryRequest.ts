

export class ListReportHistoryRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'report_profile_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, limit?: number, offset?: number, reportProfileId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
        this['report_profile_id'] = reportProfileId;
    }
    public withProjectId(projectId: string): ListReportHistoryRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListReportHistoryRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListReportHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReportHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withReportProfileId(reportProfileId: string): ListReportHistoryRequest {
        this['report_profile_id'] = reportProfileId;
        return this;
    }
    public set reportProfileId(reportProfileId: string  | undefined) {
        this['report_profile_id'] = reportProfileId;
    }
    public get reportProfileId(): string | undefined {
        return this['report_profile_id'];
    }
}