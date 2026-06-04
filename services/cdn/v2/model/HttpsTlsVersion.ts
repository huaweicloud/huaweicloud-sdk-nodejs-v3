

export class HttpsTlsVersion {
    private 'tls_version'?: string;
    private 'cipher_suite_group'?: string;
    private 'cipher_suite'?: string;
    public constructor(tlsVersion?: string, cipherSuiteGroup?: string) { 
        this['tls_version'] = tlsVersion;
        this['cipher_suite_group'] = cipherSuiteGroup;
    }
    public withTlsVersion(tlsVersion: string): HttpsTlsVersion {
        this['tls_version'] = tlsVersion;
        return this;
    }
    public set tlsVersion(tlsVersion: string  | undefined) {
        this['tls_version'] = tlsVersion;
    }
    public get tlsVersion(): string | undefined {
        return this['tls_version'];
    }
    public withCipherSuiteGroup(cipherSuiteGroup: string): HttpsTlsVersion {
        this['cipher_suite_group'] = cipherSuiteGroup;
        return this;
    }
    public set cipherSuiteGroup(cipherSuiteGroup: string  | undefined) {
        this['cipher_suite_group'] = cipherSuiteGroup;
    }
    public get cipherSuiteGroup(): string | undefined {
        return this['cipher_suite_group'];
    }
    public withCipherSuite(cipherSuite: string): HttpsTlsVersion {
        this['cipher_suite'] = cipherSuite;
        return this;
    }
    public set cipherSuite(cipherSuite: string  | undefined) {
        this['cipher_suite'] = cipherSuite;
    }
    public get cipherSuite(): string | undefined {
        return this['cipher_suite'];
    }
}