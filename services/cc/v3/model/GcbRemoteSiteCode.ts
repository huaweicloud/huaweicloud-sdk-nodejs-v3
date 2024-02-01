

export class GcbRemoteSiteCode {
    private 'remote_site_code'?: string;
    public constructor() { 
    }
    public withRemoteSiteCode(remoteSiteCode: string): GcbRemoteSiteCode {
        this['remote_site_code'] = remoteSiteCode;
        return this;
    }
    public set remoteSiteCode(remoteSiteCode: string  | undefined) {
        this['remote_site_code'] = remoteSiteCode;
    }
    public get remoteSiteCode(): string | undefined {
        return this['remote_site_code'];
    }
}