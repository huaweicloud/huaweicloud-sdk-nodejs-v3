

export class PortProtocolsEntity {
    private 'private_plain_enable'?: boolean;
    private 'private_plain_address'?: string;
    private 'private_plain_domain_name'?: string;
    private 'private_sasl_ssl_enable'?: boolean;
    private 'private_sasl_ssl_address'?: string;
    private 'private_sasl_ssl_domain_name'?: string;
    private 'private_sasl_plaintext_enable'?: boolean;
    private 'private_sasl_plaintext_address'?: string;
    private 'private_sasl_plaintext_domain_name'?: string;
    private 'public_plain_enable'?: boolean;
    private 'public_plain_address'?: string;
    private 'public_plain_domain_name'?: string;
    private 'public_sasl_ssl_enable'?: boolean;
    private 'public_sasl_ssl_address'?: string;
    private 'public_sasl_ssl_domain_name'?: string;
    private 'public_sasl_plaintext_enable'?: boolean;
    private 'public_sasl_plaintext_address'?: string;
    private 'public_sasl_plaintext_domain_name'?: string;
    public constructor() { 
    }
    public withPrivatePlainEnable(privatePlainEnable: boolean): PortProtocolsEntity {
        this['private_plain_enable'] = privatePlainEnable;
        return this;
    }
    public set privatePlainEnable(privatePlainEnable: boolean  | undefined) {
        this['private_plain_enable'] = privatePlainEnable;
    }
    public get privatePlainEnable(): boolean | undefined {
        return this['private_plain_enable'];
    }
    public withPrivatePlainAddress(privatePlainAddress: string): PortProtocolsEntity {
        this['private_plain_address'] = privatePlainAddress;
        return this;
    }
    public set privatePlainAddress(privatePlainAddress: string  | undefined) {
        this['private_plain_address'] = privatePlainAddress;
    }
    public get privatePlainAddress(): string | undefined {
        return this['private_plain_address'];
    }
    public withPrivatePlainDomainName(privatePlainDomainName: string): PortProtocolsEntity {
        this['private_plain_domain_name'] = privatePlainDomainName;
        return this;
    }
    public set privatePlainDomainName(privatePlainDomainName: string  | undefined) {
        this['private_plain_domain_name'] = privatePlainDomainName;
    }
    public get privatePlainDomainName(): string | undefined {
        return this['private_plain_domain_name'];
    }
    public withPrivateSaslSslEnable(privateSaslSslEnable: boolean): PortProtocolsEntity {
        this['private_sasl_ssl_enable'] = privateSaslSslEnable;
        return this;
    }
    public set privateSaslSslEnable(privateSaslSslEnable: boolean  | undefined) {
        this['private_sasl_ssl_enable'] = privateSaslSslEnable;
    }
    public get privateSaslSslEnable(): boolean | undefined {
        return this['private_sasl_ssl_enable'];
    }
    public withPrivateSaslSslAddress(privateSaslSslAddress: string): PortProtocolsEntity {
        this['private_sasl_ssl_address'] = privateSaslSslAddress;
        return this;
    }
    public set privateSaslSslAddress(privateSaslSslAddress: string  | undefined) {
        this['private_sasl_ssl_address'] = privateSaslSslAddress;
    }
    public get privateSaslSslAddress(): string | undefined {
        return this['private_sasl_ssl_address'];
    }
    public withPrivateSaslSslDomainName(privateSaslSslDomainName: string): PortProtocolsEntity {
        this['private_sasl_ssl_domain_name'] = privateSaslSslDomainName;
        return this;
    }
    public set privateSaslSslDomainName(privateSaslSslDomainName: string  | undefined) {
        this['private_sasl_ssl_domain_name'] = privateSaslSslDomainName;
    }
    public get privateSaslSslDomainName(): string | undefined {
        return this['private_sasl_ssl_domain_name'];
    }
    public withPrivateSaslPlaintextEnable(privateSaslPlaintextEnable: boolean): PortProtocolsEntity {
        this['private_sasl_plaintext_enable'] = privateSaslPlaintextEnable;
        return this;
    }
    public set privateSaslPlaintextEnable(privateSaslPlaintextEnable: boolean  | undefined) {
        this['private_sasl_plaintext_enable'] = privateSaslPlaintextEnable;
    }
    public get privateSaslPlaintextEnable(): boolean | undefined {
        return this['private_sasl_plaintext_enable'];
    }
    public withPrivateSaslPlaintextAddress(privateSaslPlaintextAddress: string): PortProtocolsEntity {
        this['private_sasl_plaintext_address'] = privateSaslPlaintextAddress;
        return this;
    }
    public set privateSaslPlaintextAddress(privateSaslPlaintextAddress: string  | undefined) {
        this['private_sasl_plaintext_address'] = privateSaslPlaintextAddress;
    }
    public get privateSaslPlaintextAddress(): string | undefined {
        return this['private_sasl_plaintext_address'];
    }
    public withPrivateSaslPlaintextDomainName(privateSaslPlaintextDomainName: string): PortProtocolsEntity {
        this['private_sasl_plaintext_domain_name'] = privateSaslPlaintextDomainName;
        return this;
    }
    public set privateSaslPlaintextDomainName(privateSaslPlaintextDomainName: string  | undefined) {
        this['private_sasl_plaintext_domain_name'] = privateSaslPlaintextDomainName;
    }
    public get privateSaslPlaintextDomainName(): string | undefined {
        return this['private_sasl_plaintext_domain_name'];
    }
    public withPublicPlainEnable(publicPlainEnable: boolean): PortProtocolsEntity {
        this['public_plain_enable'] = publicPlainEnable;
        return this;
    }
    public set publicPlainEnable(publicPlainEnable: boolean  | undefined) {
        this['public_plain_enable'] = publicPlainEnable;
    }
    public get publicPlainEnable(): boolean | undefined {
        return this['public_plain_enable'];
    }
    public withPublicPlainAddress(publicPlainAddress: string): PortProtocolsEntity {
        this['public_plain_address'] = publicPlainAddress;
        return this;
    }
    public set publicPlainAddress(publicPlainAddress: string  | undefined) {
        this['public_plain_address'] = publicPlainAddress;
    }
    public get publicPlainAddress(): string | undefined {
        return this['public_plain_address'];
    }
    public withPublicPlainDomainName(publicPlainDomainName: string): PortProtocolsEntity {
        this['public_plain_domain_name'] = publicPlainDomainName;
        return this;
    }
    public set publicPlainDomainName(publicPlainDomainName: string  | undefined) {
        this['public_plain_domain_name'] = publicPlainDomainName;
    }
    public get publicPlainDomainName(): string | undefined {
        return this['public_plain_domain_name'];
    }
    public withPublicSaslSslEnable(publicSaslSslEnable: boolean): PortProtocolsEntity {
        this['public_sasl_ssl_enable'] = publicSaslSslEnable;
        return this;
    }
    public set publicSaslSslEnable(publicSaslSslEnable: boolean  | undefined) {
        this['public_sasl_ssl_enable'] = publicSaslSslEnable;
    }
    public get publicSaslSslEnable(): boolean | undefined {
        return this['public_sasl_ssl_enable'];
    }
    public withPublicSaslSslAddress(publicSaslSslAddress: string): PortProtocolsEntity {
        this['public_sasl_ssl_address'] = publicSaslSslAddress;
        return this;
    }
    public set publicSaslSslAddress(publicSaslSslAddress: string  | undefined) {
        this['public_sasl_ssl_address'] = publicSaslSslAddress;
    }
    public get publicSaslSslAddress(): string | undefined {
        return this['public_sasl_ssl_address'];
    }
    public withPublicSaslSslDomainName(publicSaslSslDomainName: string): PortProtocolsEntity {
        this['public_sasl_ssl_domain_name'] = publicSaslSslDomainName;
        return this;
    }
    public set publicSaslSslDomainName(publicSaslSslDomainName: string  | undefined) {
        this['public_sasl_ssl_domain_name'] = publicSaslSslDomainName;
    }
    public get publicSaslSslDomainName(): string | undefined {
        return this['public_sasl_ssl_domain_name'];
    }
    public withPublicSaslPlaintextEnable(publicSaslPlaintextEnable: boolean): PortProtocolsEntity {
        this['public_sasl_plaintext_enable'] = publicSaslPlaintextEnable;
        return this;
    }
    public set publicSaslPlaintextEnable(publicSaslPlaintextEnable: boolean  | undefined) {
        this['public_sasl_plaintext_enable'] = publicSaslPlaintextEnable;
    }
    public get publicSaslPlaintextEnable(): boolean | undefined {
        return this['public_sasl_plaintext_enable'];
    }
    public withPublicSaslPlaintextAddress(publicSaslPlaintextAddress: string): PortProtocolsEntity {
        this['public_sasl_plaintext_address'] = publicSaslPlaintextAddress;
        return this;
    }
    public set publicSaslPlaintextAddress(publicSaslPlaintextAddress: string  | undefined) {
        this['public_sasl_plaintext_address'] = publicSaslPlaintextAddress;
    }
    public get publicSaslPlaintextAddress(): string | undefined {
        return this['public_sasl_plaintext_address'];
    }
    public withPublicSaslPlaintextDomainName(publicSaslPlaintextDomainName: string): PortProtocolsEntity {
        this['public_sasl_plaintext_domain_name'] = publicSaslPlaintextDomainName;
        return this;
    }
    public set publicSaslPlaintextDomainName(publicSaslPlaintextDomainName: string  | undefined) {
        this['public_sasl_plaintext_domain_name'] = publicSaslPlaintextDomainName;
    }
    public get publicSaslPlaintextDomainName(): string | undefined {
        return this['public_sasl_plaintext_domain_name'];
    }
}