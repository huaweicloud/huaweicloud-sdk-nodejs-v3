

export class ShowLinuxVulDetailRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_id'?: string;
    private 'cve_id'?: string;
    private 'handle_status'?: string;
    public constructor(limit?: number, offset?: number, vulId?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['vul_id'] = vulId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowLinuxVulDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ShowLinuxVulDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowLinuxVulDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulId(vulId: string): ShowLinuxVulDetailRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withCveId(cveId: string): ShowLinuxVulDetailRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withHandleStatus(handleStatus: string): ShowLinuxVulDetailRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
}