

export class LdapConfig {
    public host?: string;
    public port?: number;
    private 'base_dn'?: string;
    private 'administrator_dn'?: string;
    private 'administrator_password'?: string;
    private 'user_dn'?: string;
    private 'use_ssl'?: boolean;
    private 'cert_content'?: string;
    private 'username_attribute'?: string;
    private 'object_class'?: string;
    private 'security_type'?: LdapConfigSecurityTypeEnum | string;
    public constructor() { 
    }
    public withHost(host: string): LdapConfig {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): LdapConfig {
        this['port'] = port;
        return this;
    }
    public withBaseDn(baseDn: string): LdapConfig {
        this['base_dn'] = baseDn;
        return this;
    }
    public set baseDn(baseDn: string  | undefined) {
        this['base_dn'] = baseDn;
    }
    public get baseDn(): string | undefined {
        return this['base_dn'];
    }
    public withAdministratorDn(administratorDn: string): LdapConfig {
        this['administrator_dn'] = administratorDn;
        return this;
    }
    public set administratorDn(administratorDn: string  | undefined) {
        this['administrator_dn'] = administratorDn;
    }
    public get administratorDn(): string | undefined {
        return this['administrator_dn'];
    }
    public withAdministratorPassword(administratorPassword: string): LdapConfig {
        this['administrator_password'] = administratorPassword;
        return this;
    }
    public set administratorPassword(administratorPassword: string  | undefined) {
        this['administrator_password'] = administratorPassword;
    }
    public get administratorPassword(): string | undefined {
        return this['administrator_password'];
    }
    public withUserDn(userDn: string): LdapConfig {
        this['user_dn'] = userDn;
        return this;
    }
    public set userDn(userDn: string  | undefined) {
        this['user_dn'] = userDn;
    }
    public get userDn(): string | undefined {
        return this['user_dn'];
    }
    public withUseSsl(useSsl: boolean): LdapConfig {
        this['use_ssl'] = useSsl;
        return this;
    }
    public set useSsl(useSsl: boolean  | undefined) {
        this['use_ssl'] = useSsl;
    }
    public get useSsl(): boolean | undefined {
        return this['use_ssl'];
    }
    public withCertContent(certContent: string): LdapConfig {
        this['cert_content'] = certContent;
        return this;
    }
    public set certContent(certContent: string  | undefined) {
        this['cert_content'] = certContent;
    }
    public get certContent(): string | undefined {
        return this['cert_content'];
    }
    public withUsernameAttribute(usernameAttribute: string): LdapConfig {
        this['username_attribute'] = usernameAttribute;
        return this;
    }
    public set usernameAttribute(usernameAttribute: string  | undefined) {
        this['username_attribute'] = usernameAttribute;
    }
    public get usernameAttribute(): string | undefined {
        return this['username_attribute'];
    }
    public withObjectClass(objectClass: string): LdapConfig {
        this['object_class'] = objectClass;
        return this;
    }
    public set objectClass(objectClass: string  | undefined) {
        this['object_class'] = objectClass;
    }
    public get objectClass(): string | undefined {
        return this['object_class'];
    }
    public withSecurityType(securityType: LdapConfigSecurityTypeEnum | string): LdapConfig {
        this['security_type'] = securityType;
        return this;
    }
    public set securityType(securityType: LdapConfigSecurityTypeEnum | string  | undefined) {
        this['security_type'] = securityType;
    }
    public get securityType(): LdapConfigSecurityTypeEnum | string | undefined {
        return this['security_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LdapConfigSecurityTypeEnum {
    USE_SSL = 'USE_SSL',
    USE_TLS = 'USE_TLS',
    CLOSE = 'CLOSE'
}
