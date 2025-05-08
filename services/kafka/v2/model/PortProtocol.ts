

export class PortProtocol {
    private 'private_plain_enable'?: boolean;
    private 'private_sasl_ssl_enable'?: boolean;
    private 'private_sasl_plaintext_enable'?: boolean;
    private 'public_plain_enable'?: boolean;
    private 'public_sasl_ssl_enable'?: boolean;
    private 'public_sasl_plaintext_enable'?: boolean;
    public constructor() { 
    }
    public withPrivatePlainEnable(privatePlainEnable: boolean): PortProtocol {
        this['private_plain_enable'] = privatePlainEnable;
        return this;
    }
    public set privatePlainEnable(privatePlainEnable: boolean  | undefined) {
        this['private_plain_enable'] = privatePlainEnable;
    }
    public get privatePlainEnable(): boolean | undefined {
        return this['private_plain_enable'];
    }
    public withPrivateSaslSslEnable(privateSaslSslEnable: boolean): PortProtocol {
        this['private_sasl_ssl_enable'] = privateSaslSslEnable;
        return this;
    }
    public set privateSaslSslEnable(privateSaslSslEnable: boolean  | undefined) {
        this['private_sasl_ssl_enable'] = privateSaslSslEnable;
    }
    public get privateSaslSslEnable(): boolean | undefined {
        return this['private_sasl_ssl_enable'];
    }
    public withPrivateSaslPlaintextEnable(privateSaslPlaintextEnable: boolean): PortProtocol {
        this['private_sasl_plaintext_enable'] = privateSaslPlaintextEnable;
        return this;
    }
    public set privateSaslPlaintextEnable(privateSaslPlaintextEnable: boolean  | undefined) {
        this['private_sasl_plaintext_enable'] = privateSaslPlaintextEnable;
    }
    public get privateSaslPlaintextEnable(): boolean | undefined {
        return this['private_sasl_plaintext_enable'];
    }
    public withPublicPlainEnable(publicPlainEnable: boolean): PortProtocol {
        this['public_plain_enable'] = publicPlainEnable;
        return this;
    }
    public set publicPlainEnable(publicPlainEnable: boolean  | undefined) {
        this['public_plain_enable'] = publicPlainEnable;
    }
    public get publicPlainEnable(): boolean | undefined {
        return this['public_plain_enable'];
    }
    public withPublicSaslSslEnable(publicSaslSslEnable: boolean): PortProtocol {
        this['public_sasl_ssl_enable'] = publicSaslSslEnable;
        return this;
    }
    public set publicSaslSslEnable(publicSaslSslEnable: boolean  | undefined) {
        this['public_sasl_ssl_enable'] = publicSaslSslEnable;
    }
    public get publicSaslSslEnable(): boolean | undefined {
        return this['public_sasl_ssl_enable'];
    }
    public withPublicSaslPlaintextEnable(publicSaslPlaintextEnable: boolean): PortProtocol {
        this['public_sasl_plaintext_enable'] = publicSaslPlaintextEnable;
        return this;
    }
    public set publicSaslPlaintextEnable(publicSaslPlaintextEnable: boolean  | undefined) {
        this['public_sasl_plaintext_enable'] = publicSaslPlaintextEnable;
    }
    public get publicSaslPlaintextEnable(): boolean | undefined {
        return this['public_sasl_plaintext_enable'];
    }
}