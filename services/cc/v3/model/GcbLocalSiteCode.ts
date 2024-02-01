

export class GcbLocalSiteCode {
    private 'local_site_code'?: string;
    public constructor() { 
    }
    public withLocalSiteCode(localSiteCode: string): GcbLocalSiteCode {
        this['local_site_code'] = localSiteCode;
        return this;
    }
    public set localSiteCode(localSiteCode: string  | undefined) {
        this['local_site_code'] = localSiteCode;
    }
    public get localSiteCode(): string | undefined {
        return this['local_site_code'];
    }
}