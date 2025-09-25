

export class ShowSecurityCheckHostReportRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'scan_time'?: number;
    public constructor(hostId?: string, scanTime?: number) { 
        this['host_id'] = hostId;
        this['scan_time'] = scanTime;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSecurityCheckHostReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ShowSecurityCheckHostReportRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withScanTime(scanTime: number): ShowSecurityCheckHostReportRequest {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
}