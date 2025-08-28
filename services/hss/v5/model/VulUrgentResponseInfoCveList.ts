

export class VulUrgentResponseInfoCveList {
    private 'cve_id'?: string;
    public cvss?: number;
    public constructor() { 
    }
    public withCveId(cveId: string): VulUrgentResponseInfoCveList {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvss(cvss: number): VulUrgentResponseInfoCveList {
        this['cvss'] = cvss;
        return this;
    }
}