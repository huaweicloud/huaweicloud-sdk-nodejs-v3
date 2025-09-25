

export class ExportSecurityCheckReportRequest {
    private 'enterprise_project_id'?: string;
    private 'group_id'?: string;
    private 'host_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'scan_result'?: string;
    public severity?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportSecurityCheckReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): ExportSecurityCheckReportRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): ExportSecurityCheckReportRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withCheckName(checkName: string): ExportSecurityCheckReportRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ExportSecurityCheckReportRequest {
        this['standard'] = standard;
        return this;
    }
    public withScanResult(scanResult: string): ExportSecurityCheckReportRequest {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
    public withSeverity(severity: string): ExportSecurityCheckReportRequest {
        this['severity'] = severity;
        return this;
    }
}