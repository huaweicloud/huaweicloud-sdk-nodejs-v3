

export class CVEAllowlistItem {
    private 'cve_id'?: string;
    public constructor() { 
    }
    public withCveId(cveId: string): CVEAllowlistItem {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
}