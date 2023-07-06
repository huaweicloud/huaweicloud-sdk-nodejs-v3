

export class KerberosVO {
    private 'krb5_conf_file'?: string | undefined;
    private 'key_tab_file'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'user_principal'?: string | undefined;
    public constructor() { 
    }
    public withKrb5ConfFile(krb5ConfFile: string): KerberosVO {
        this['krb5_conf_file'] = krb5ConfFile;
        return this;
    }
    public set krb5ConfFile(krb5ConfFile: string | undefined) {
        this['krb5_conf_file'] = krb5ConfFile;
    }
    public get krb5ConfFile() {
        return this['krb5_conf_file'];
    }
    public withKeyTabFile(keyTabFile: string): KerberosVO {
        this['key_tab_file'] = keyTabFile;
        return this;
    }
    public set keyTabFile(keyTabFile: string | undefined) {
        this['key_tab_file'] = keyTabFile;
    }
    public get keyTabFile() {
        return this['key_tab_file'];
    }
    public withDomainName(domainName: string): KerberosVO {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withUserPrincipal(userPrincipal: string): KerberosVO {
        this['user_principal'] = userPrincipal;
        return this;
    }
    public set userPrincipal(userPrincipal: string | undefined) {
        this['user_principal'] = userPrincipal;
    }
    public get userPrincipal() {
        return this['user_principal'];
    }
}