

export class UpdateAuthInfoRequestBody {
    private 'auth_info_name'?: string;
    private 'user_name'?: string;
    public password?: string;
    private 'krb5_conf'?: string;
    public keytab?: string;
    private 'truststore_location'?: string;
    private 'truststore_password'?: string;
    private 'keystore_location'?: string;
    private 'keystore_password'?: string;
    public constructor(authInfoName?: string) { 
        this['auth_info_name'] = authInfoName;
    }
    public withAuthInfoName(authInfoName: string): UpdateAuthInfoRequestBody {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
    public withUserName(userName: string): UpdateAuthInfoRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): UpdateAuthInfoRequestBody {
        this['password'] = password;
        return this;
    }
    public withKrb5Conf(krb5Conf: string): UpdateAuthInfoRequestBody {
        this['krb5_conf'] = krb5Conf;
        return this;
    }
    public set krb5Conf(krb5Conf: string  | undefined) {
        this['krb5_conf'] = krb5Conf;
    }
    public get krb5Conf(): string | undefined {
        return this['krb5_conf'];
    }
    public withKeytab(keytab: string): UpdateAuthInfoRequestBody {
        this['keytab'] = keytab;
        return this;
    }
    public withTruststoreLocation(truststoreLocation: string): UpdateAuthInfoRequestBody {
        this['truststore_location'] = truststoreLocation;
        return this;
    }
    public set truststoreLocation(truststoreLocation: string  | undefined) {
        this['truststore_location'] = truststoreLocation;
    }
    public get truststoreLocation(): string | undefined {
        return this['truststore_location'];
    }
    public withTruststorePassword(truststorePassword: string): UpdateAuthInfoRequestBody {
        this['truststore_password'] = truststorePassword;
        return this;
    }
    public set truststorePassword(truststorePassword: string  | undefined) {
        this['truststore_password'] = truststorePassword;
    }
    public get truststorePassword(): string | undefined {
        return this['truststore_password'];
    }
    public withKeystoreLocation(keystoreLocation: string): UpdateAuthInfoRequestBody {
        this['keystore_location'] = keystoreLocation;
        return this;
    }
    public set keystoreLocation(keystoreLocation: string  | undefined) {
        this['keystore_location'] = keystoreLocation;
    }
    public get keystoreLocation(): string | undefined {
        return this['keystore_location'];
    }
    public withKeystorePassword(keystorePassword: string): UpdateAuthInfoRequestBody {
        this['keystore_password'] = keystorePassword;
        return this;
    }
    public set keystorePassword(keystorePassword: string  | undefined) {
        this['keystore_password'] = keystorePassword;
    }
    public get keystorePassword(): string | undefined {
        return this['keystore_password'];
    }
}