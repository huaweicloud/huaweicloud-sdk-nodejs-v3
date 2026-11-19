

export class RaspCveInfo {
    private 'cve_id'?: string;
    public cvss?: number;
    public constructor() { 
    }
    public withCveId(cveId: string): RaspCveInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvss(cvss: number): RaspCveInfo {
        this['cvss'] = cvss;
        return this;
    }
}