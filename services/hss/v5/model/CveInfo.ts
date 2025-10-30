

export class CveInfo {
    private 'cve_id'?: string;
    private 'cvss_score'?: number;
    private 'publish_time'?: number;
    public description?: string;
    public constructor() { 
    }
    public withCveId(cveId: string): CveInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCvssScore(cvssScore: number): CveInfo {
        this['cvss_score'] = cvssScore;
        return this;
    }
    public set cvssScore(cvssScore: number  | undefined) {
        this['cvss_score'] = cvssScore;
    }
    public get cvssScore(): number | undefined {
        return this['cvss_score'];
    }
    public withPublishTime(publishTime: number): CveInfo {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: number  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): number | undefined {
        return this['publish_time'];
    }
    public withDescription(description: string): CveInfo {
        this['description'] = description;
        return this;
    }
}