

export class Features {
    private 'support_acl'?: boolean;
    private 'support_transparent_client_ip'?: boolean;
    private 'support_ssl'?: boolean;
    public constructor() { 
    }
    public withSupportAcl(supportAcl: boolean): Features {
        this['support_acl'] = supportAcl;
        return this;
    }
    public set supportAcl(supportAcl: boolean  | undefined) {
        this['support_acl'] = supportAcl;
    }
    public get supportAcl(): boolean | undefined {
        return this['support_acl'];
    }
    public withSupportTransparentClientIp(supportTransparentClientIp: boolean): Features {
        this['support_transparent_client_ip'] = supportTransparentClientIp;
        return this;
    }
    public set supportTransparentClientIp(supportTransparentClientIp: boolean  | undefined) {
        this['support_transparent_client_ip'] = supportTransparentClientIp;
    }
    public get supportTransparentClientIp(): boolean | undefined {
        return this['support_transparent_client_ip'];
    }
    public withSupportSsl(supportSsl: boolean): Features {
        this['support_ssl'] = supportSsl;
        return this;
    }
    public set supportSsl(supportSsl: boolean  | undefined) {
        this['support_ssl'] = supportSsl;
    }
    public get supportSsl(): boolean | undefined {
        return this['support_ssl'];
    }
}