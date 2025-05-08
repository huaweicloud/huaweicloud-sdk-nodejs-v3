

export class PlainSslEnableRequest {
    public protocol?: PlainSslEnableRequestProtocolEnum | string;
    public enable?: boolean;
    private 'user_name'?: string;
    private 'pass_word'?: string;
    private 'sasl_enabled_mechanisms'?: Array<PlainSslEnableRequestSaslEnabledMechanismsEnum> | Array<string>;
    public constructor() { 
    }
    public withProtocol(protocol: PlainSslEnableRequestProtocolEnum | string): PlainSslEnableRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withEnable(enable: boolean): PlainSslEnableRequest {
        this['enable'] = enable;
        return this;
    }
    public withUserName(userName: string): PlainSslEnableRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassWord(passWord: string): PlainSslEnableRequest {
        this['pass_word'] = passWord;
        return this;
    }
    public set passWord(passWord: string  | undefined) {
        this['pass_word'] = passWord;
    }
    public get passWord(): string | undefined {
        return this['pass_word'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<PlainSslEnableRequestSaslEnabledMechanismsEnum> | Array<string>): PlainSslEnableRequest {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<PlainSslEnableRequestSaslEnabledMechanismsEnum> | Array<string>  | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms(): Array<PlainSslEnableRequestSaslEnabledMechanismsEnum> | Array<string> | undefined {
        return this['sasl_enabled_mechanisms'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PlainSslEnableRequestProtocolEnum {
    PRIVATE_PLAIN_ENABLE = 'private_plain_enable',
    PRIVATE_SASL_SSL_ENABLE = 'private_sasl_ssl_enable',
    PRIVATE_SASL_PLAINTEXT_ENABLE = 'private_sasl_plaintext_enable',
    PUBLIC_PLAIN_ENABLE = 'public_plain_enable',
    PUBLIC_SASL_SSL_ENABLE = 'public_sasl_ssl_enable',
    PUBLIC_SASL_PLAINTEXT_ENABLE = 'public_sasl_plaintext_enable'
}
/**
    * @export
    * @enum {string}
    */
export enum PlainSslEnableRequestSaslEnabledMechanismsEnum {
    SCRAM_SHA_512 = 'SCRAM-SHA-512',
    PLAIN = 'PLAIN'
}
