

export class CreateAuthInfoReq {
    private 'auth_info_name'?: string;
    private 'user_name'?: string;
    public password?: string;
    private 'krb5_conf'?: string;
    public keytab?: string;
    private 'truststore_location'?: string;
    private 'truststore_password'?: string;
    private 'keystore_location'?: string;
    private 'keystore_password'?: string;
    private 'certificate_location'?: string;
    private 'datasource_type'?: string;
    private 'key_password'?: string;
    public constructor(authInfoName?: string, datasourceType?: string) { 
        this['auth_info_name'] = authInfoName;
        this['datasource_type'] = datasourceType;
    }
    public withAuthInfoName(authInfoName: string): CreateAuthInfoReq {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
    public withUserName(userName: string): CreateAuthInfoReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): CreateAuthInfoReq {
        this['password'] = password;
        return this;
    }
    public withKrb5Conf(krb5Conf: string): CreateAuthInfoReq {
        this['krb5_conf'] = krb5Conf;
        return this;
    }
    public set krb5Conf(krb5Conf: string  | undefined) {
        this['krb5_conf'] = krb5Conf;
    }
    public get krb5Conf(): string | undefined {
        return this['krb5_conf'];
    }
    public withKeytab(keytab: string): CreateAuthInfoReq {
        this['keytab'] = keytab;
        return this;
    }
    public withTruststoreLocation(truststoreLocation: string): CreateAuthInfoReq {
        this['truststore_location'] = truststoreLocation;
        return this;
    }
    public set truststoreLocation(truststoreLocation: string  | undefined) {
        this['truststore_location'] = truststoreLocation;
    }
    public get truststoreLocation(): string | undefined {
        return this['truststore_location'];
    }
    public withTruststorePassword(truststorePassword: string): CreateAuthInfoReq {
        this['truststore_password'] = truststorePassword;
        return this;
    }
    public set truststorePassword(truststorePassword: string  | undefined) {
        this['truststore_password'] = truststorePassword;
    }
    public get truststorePassword(): string | undefined {
        return this['truststore_password'];
    }
    public withKeystoreLocation(keystoreLocation: string): CreateAuthInfoReq {
        this['keystore_location'] = keystoreLocation;
        return this;
    }
    public set keystoreLocation(keystoreLocation: string  | undefined) {
        this['keystore_location'] = keystoreLocation;
    }
    public get keystoreLocation(): string | undefined {
        return this['keystore_location'];
    }
    public withKeystorePassword(keystorePassword: string): CreateAuthInfoReq {
        this['keystore_password'] = keystorePassword;
        return this;
    }
    public set keystorePassword(keystorePassword: string  | undefined) {
        this['keystore_password'] = keystorePassword;
    }
    public get keystorePassword(): string | undefined {
        return this['keystore_password'];
    }
    public withCertificateLocation(certificateLocation: string): CreateAuthInfoReq {
        this['certificate_location'] = certificateLocation;
        return this;
    }
    public set certificateLocation(certificateLocation: string  | undefined) {
        this['certificate_location'] = certificateLocation;
    }
    public get certificateLocation(): string | undefined {
        return this['certificate_location'];
    }
    public withDatasourceType(datasourceType: string): CreateAuthInfoReq {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withKeyPassword(keyPassword: string): CreateAuthInfoReq {
        this['key_password'] = keyPassword;
        return this;
    }
    public set keyPassword(keyPassword: string  | undefined) {
        this['key_password'] = keyPassword;
    }
    public get keyPassword(): string | undefined {
        return this['key_password'];
    }
}