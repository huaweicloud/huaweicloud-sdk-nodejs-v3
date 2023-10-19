

export class SiteCode {
    private 'site_code'?: string;
    public constructor(siteCode?: string) { 
        this['site_code'] = siteCode;
    }
    public withSiteCode(siteCode: string): SiteCode {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
}