

export class SourceKafkaMQParameters {
    public addr?: string;
    public group?: string;
    private 'instance_name'?: string;
    private 'security_protocol'?: string;
    private 'instance_id'?: string;
    public topic?: string;
    private 'seek_to'?: SourceKafkaMQParametersSeekToEnum | string;
    private 'enable_sasl_ssl'?: boolean;
    private 'sasl_mechanism'?: SourceKafkaMQParametersSaslMechanismEnum | string;
    private 'ssl_certificate_url'?: string;
    private 'ssl_certificate_pwd'?: string;
    private 'user_name'?: string;
    public password?: string;
    public constructor(group?: string, topic?: string) { 
        this['group'] = group;
        this['topic'] = topic;
    }
    public withAddr(addr: string): SourceKafkaMQParameters {
        this['addr'] = addr;
        return this;
    }
    public withGroup(group: string): SourceKafkaMQParameters {
        this['group'] = group;
        return this;
    }
    public withInstanceName(instanceName: string): SourceKafkaMQParameters {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withSecurityProtocol(securityProtocol: string): SourceKafkaMQParameters {
        this['security_protocol'] = securityProtocol;
        return this;
    }
    public set securityProtocol(securityProtocol: string  | undefined) {
        this['security_protocol'] = securityProtocol;
    }
    public get securityProtocol(): string | undefined {
        return this['security_protocol'];
    }
    public withInstanceId(instanceId: string): SourceKafkaMQParameters {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): SourceKafkaMQParameters {
        this['topic'] = topic;
        return this;
    }
    public withSeekTo(seekTo: SourceKafkaMQParametersSeekToEnum | string): SourceKafkaMQParameters {
        this['seek_to'] = seekTo;
        return this;
    }
    public set seekTo(seekTo: SourceKafkaMQParametersSeekToEnum | string  | undefined) {
        this['seek_to'] = seekTo;
    }
    public get seekTo(): SourceKafkaMQParametersSeekToEnum | string | undefined {
        return this['seek_to'];
    }
    public withEnableSaslSsl(enableSaslSsl: boolean): SourceKafkaMQParameters {
        this['enable_sasl_ssl'] = enableSaslSsl;
        return this;
    }
    public set enableSaslSsl(enableSaslSsl: boolean  | undefined) {
        this['enable_sasl_ssl'] = enableSaslSsl;
    }
    public get enableSaslSsl(): boolean | undefined {
        return this['enable_sasl_ssl'];
    }
    public withSaslMechanism(saslMechanism: SourceKafkaMQParametersSaslMechanismEnum | string): SourceKafkaMQParameters {
        this['sasl_mechanism'] = saslMechanism;
        return this;
    }
    public set saslMechanism(saslMechanism: SourceKafkaMQParametersSaslMechanismEnum | string  | undefined) {
        this['sasl_mechanism'] = saslMechanism;
    }
    public get saslMechanism(): SourceKafkaMQParametersSaslMechanismEnum | string | undefined {
        return this['sasl_mechanism'];
    }
    public withSslCertificateUrl(sslCertificateUrl: string): SourceKafkaMQParameters {
        this['ssl_certificate_url'] = sslCertificateUrl;
        return this;
    }
    public set sslCertificateUrl(sslCertificateUrl: string  | undefined) {
        this['ssl_certificate_url'] = sslCertificateUrl;
    }
    public get sslCertificateUrl(): string | undefined {
        return this['ssl_certificate_url'];
    }
    public withSslCertificatePwd(sslCertificatePwd: string): SourceKafkaMQParameters {
        this['ssl_certificate_pwd'] = sslCertificatePwd;
        return this;
    }
    public set sslCertificatePwd(sslCertificatePwd: string  | undefined) {
        this['ssl_certificate_pwd'] = sslCertificatePwd;
    }
    public get sslCertificatePwd(): string | undefined {
        return this['ssl_certificate_pwd'];
    }
    public withUserName(userName: string): SourceKafkaMQParameters {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): SourceKafkaMQParameters {
        this['password'] = password;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceKafkaMQParametersSeekToEnum {
    LATEST = 'latest',
    EARLIEST = 'earliest'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceKafkaMQParametersSaslMechanismEnum {
    SCRAM_SHA_512 = 'SCRAM-SHA-512',
    PLAIN = 'PLAIN'
}
