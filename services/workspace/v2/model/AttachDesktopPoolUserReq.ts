

export class AttachDesktopPoolUserReq {
    public username?: string;
    private 'domain_name'?: string;
    public constructor(username?: string) { 
        this['username'] = username;
    }
    public withUsername(username: string): AttachDesktopPoolUserReq {
        this['username'] = username;
        return this;
    }
    public withDomainName(domainName: string): AttachDesktopPoolUserReq {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}