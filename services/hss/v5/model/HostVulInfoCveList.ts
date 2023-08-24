

export class HostVulInfoCveList {
    private 'cve_id'?: string;
    public cvss?: number;
    public constructor() { 
    }
    public withCveId(cveId: string): HostVulInfoCveList {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvss(cvss: number): HostVulInfoCveList {
        this['cvss'] = cvss;
        return this;
    }
}