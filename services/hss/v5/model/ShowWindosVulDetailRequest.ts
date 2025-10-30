

export class ShowWindosVulDetailRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_id'?: string;
    private 'cve_id'?: string;
    private 'handle_status'?: string;
    public constructor(vulId?: string) { 
        this['vul_id'] = vulId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowWindosVulDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ShowWindosVulDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowWindosVulDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulId(vulId: string): ShowWindosVulDetailRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withCveId(cveId: string): ShowWindosVulDetailRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withHandleStatus(handleStatus: string): ShowWindosVulDetailRequest {
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