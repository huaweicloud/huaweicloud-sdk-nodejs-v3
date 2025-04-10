

export class VulCveInfo {
    private 'cve_id'?: string;
    public cvss?: number;
    private 'vul_id'?: string;
    public constructor() { 
    }
    public withCveId(cveId: string): VulCveInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvss(cvss: number): VulCveInfo {
        this['cvss'] = cvss;
        return this;
    }
    public withVulId(vulId: string): VulCveInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
}