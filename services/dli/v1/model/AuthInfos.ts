

export class AuthInfos {
    private 'auth_info_name'?: string;
    private 'user_name'?: string;
    private 'certificate_location'?: string;
    private 'datasource_type'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'krb5_conf'?: string;
    public keytab?: string;
    private 'truststore_location'?: string;
    private 'keystore_location'?: string;
    public owner?: string;
    public constructor() { 
    }
    public withAuthInfoName(authInfoName: string): AuthInfos {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
    public withUserName(userName: string): AuthInfos {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCertificateLocation(certificateLocation: string): AuthInfos {
        this['certificate_location'] = certificateLocation;
        return this;
    }
    public set certificateLocation(certificateLocation: string  | undefined) {
        this['certificate_location'] = certificateLocation;
    }
    public get certificateLocation(): string | undefined {
        return this['certificate_location'];
    }
    public withDatasourceType(datasourceType: string): AuthInfos {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withCreateTime(createTime: number): AuthInfos {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AuthInfos {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withKrb5Conf(krb5Conf: string): AuthInfos {
        this['krb5_conf'] = krb5Conf;
        return this;
    }
    public set krb5Conf(krb5Conf: string  | undefined) {
        this['krb5_conf'] = krb5Conf;
    }
    public get krb5Conf(): string | undefined {
        return this['krb5_conf'];
    }
    public withKeytab(keytab: string): AuthInfos {
        this['keytab'] = keytab;
        return this;
    }
    public withTruststoreLocation(truststoreLocation: string): AuthInfos {
        this['truststore_location'] = truststoreLocation;
        return this;
    }
    public set truststoreLocation(truststoreLocation: string  | undefined) {
        this['truststore_location'] = truststoreLocation;
    }
    public get truststoreLocation(): string | undefined {
        return this['truststore_location'];
    }
    public withKeystoreLocation(keystoreLocation: string): AuthInfos {
        this['keystore_location'] = keystoreLocation;
        return this;
    }
    public set keystoreLocation(keystoreLocation: string  | undefined) {
        this['keystore_location'] = keystoreLocation;
    }
    public get keystoreLocation(): string | undefined {
        return this['keystore_location'];
    }
    public withOwner(owner: string): AuthInfos {
        this['owner'] = owner;
        return this;
    }
}