

export class ShowVulReportDataResponseInfoCveList {
    private 'cve_id'?: string;
    public cvss?: number;
    public constructor() { 
    }
    public withCveId(cveId: string): ShowVulReportDataResponseInfoCveList {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvss(cvss: number): ShowVulReportDataResponseInfoCveList {
        this['cvss'] = cvss;
        return this;
    }
}