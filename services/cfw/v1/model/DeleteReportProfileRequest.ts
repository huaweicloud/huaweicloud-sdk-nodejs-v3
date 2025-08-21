

export class DeleteReportProfileRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'report_profile_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, reportProfileId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['report_profile_id'] = reportProfileId;
    }
    public withProjectId(projectId: string): DeleteReportProfileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteReportProfileRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withReportProfileId(reportProfileId: string): DeleteReportProfileRequest {
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