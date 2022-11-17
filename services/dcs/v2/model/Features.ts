

export class Features {
    private 'support_acl'?: boolean | undefined;
    private 'support_transparent_client_ip'?: boolean | undefined;
    private 'support_ssl'?: boolean | undefined;
    public constructor() { 
    }
    public withSupportAcl(supportAcl: boolean): Features {
        this['support_acl'] = supportAcl;
        return this;
    }
    public set supportAcl(supportAcl: boolean | undefined) {
        this['support_acl'] = supportAcl;
    }
    public get supportAcl() {
        return this['support_acl'];
    }
    public withSupportTransparentClientIp(supportTransparentClientIp: boolean): Features {
        this['support_transparent_client_ip'] = supportTransparentClientIp;
        return this;
    }
    public set supportTransparentClientIp(supportTransparentClientIp: boolean | undefined) {
        this['support_transparent_client_ip'] = supportTransparentClientIp;
    }
    public get supportTransparentClientIp() {
        return this['support_transparent_client_ip'];
    }
    public withSupportSsl(supportSsl: boolean): Features {
        this['support_ssl'] = supportSsl;
        return this;
    }
    public set supportSsl(supportSsl: boolean | undefined) {
        this['support_ssl'] = supportSsl;
    }
    public get supportSsl() {
        return this['support_ssl'];
    }
}