

export class ListenerInsertHeaders {
    private 'X-Forwarded-ELB-IP'?: boolean;
    private 'X-Forwarded-Port'?: boolean;
    private 'X-Forwarded-For-Port'?: boolean;
    private 'X-Forwarded-Host'?: boolean;
    private 'X-Forwarded-Proto'?: boolean;
    private 'X-Real-IP'?: boolean;
    private 'X-Forwarded-ELB-ID'?: boolean;
    private 'X-Forwarded-TLS-Certificate-ID'?: boolean;
    private 'X-Forwarded-TLS-Protocol'?: boolean;
    private 'X-Forwarded-TLS-Cipher'?: boolean;
    private 'X-Forwarded-TLS-Protocol-alias'?: string;
    private 'X-Forwarded-TLS-Cipher-alias'?: string;
    private 'X-Forwarded-For-Processing-Mode'?: ListenerInsertHeadersXForwardedForProcessingModeEnum | string;
    private 'X-Forwarded-Clientcert-subjectdn-enable'?: boolean;
    private 'X-Forwarded-Clientcert-subjectdn-alias'?: string;
    private 'X-Forwarded-Clientcert-issuerdn-enable'?: boolean;
    private 'X-Forwarded-Clientcert-issuerdn-alias'?: string;
    private 'X-Forwarded-Clientcert-fingerprint-enable'?: boolean;
    private 'X-Forwarded-Clientcert-fingerprint-alias'?: string;
    private 'X-Forwarded-Clientcert-clientverify-enable'?: boolean;
    private 'X-Forwarded-Clientcert-clientverify-alias'?: string;
    private 'X-Forwarded-Clientcert-serialnumber-enable'?: boolean;
    private 'X-Forwarded-Clientcert-serialnumber-alias'?: string;
    private 'X-Forwarded-Clientcert-enable'?: boolean;
    private 'X-Forwarded-Clientcert-alias'?: string;
    private 'X-Forwarded-Clientcert-ciphers-enable'?: boolean;
    private 'X-Forwarded-Clientcert-ciphers-alias'?: string;
    private 'X-Forwarded-Clientcert-end-enable'?: boolean;
    private 'X-Forwarded-Clientcert-end-alias'?: string;
    private 'X-Forwarded-Tls-Alpn-Protocol-enable'?: boolean;
    private 'X-Forwarded-Tls-Alpn-Protocol-alias'?: string;
    private 'X-Forwarded-Tls-Sni-enable'?: boolean;
    private 'X-Forwarded-Tls-Sni-alias'?: string;
    private 'X-Forwarded-Tls-Ja3-enable'?: boolean;
    private 'X-Forwarded-Tls-Ja3-alias'?: string;
    private 'X-Forwarded-Tls-Ja4-enable'?: boolean;
    private 'X-Forwarded-Tls-Ja4-alias'?: string;
    public constructor() { 
    }
    public withXForwardedELBIP(xForwardedELBIP: boolean): ListenerInsertHeaders {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
        return this;
    }
    public set xForwardedELBIP(xForwardedELBIP: boolean  | undefined) {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
    }
    public get xForwardedELBIP(): boolean | undefined {
        return this['X-Forwarded-ELB-IP'];
    }
    public withXForwardedPort(xForwardedPort: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Port'] = xForwardedPort;
        return this;
    }
    public set xForwardedPort(xForwardedPort: boolean  | undefined) {
        this['X-Forwarded-Port'] = xForwardedPort;
    }
    public get xForwardedPort(): boolean | undefined {
        return this['X-Forwarded-Port'];
    }
    public withXForwardedForPort(xForwardedForPort: boolean): ListenerInsertHeaders {
        this['X-Forwarded-For-Port'] = xForwardedForPort;
        return this;
    }
    public set xForwardedForPort(xForwardedForPort: boolean  | undefined) {
        this['X-Forwarded-For-Port'] = xForwardedForPort;
    }
    public get xForwardedForPort(): boolean | undefined {
        return this['X-Forwarded-For-Port'];
    }
    public withXForwardedHost(xForwardedHost: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Host'] = xForwardedHost;
        return this;
    }
    public set xForwardedHost(xForwardedHost: boolean  | undefined) {
        this['X-Forwarded-Host'] = xForwardedHost;
    }
    public get xForwardedHost(): boolean | undefined {
        return this['X-Forwarded-Host'];
    }
    public withXForwardedProto(xForwardedProto: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Proto'] = xForwardedProto;
        return this;
    }
    public set xForwardedProto(xForwardedProto: boolean  | undefined) {
        this['X-Forwarded-Proto'] = xForwardedProto;
    }
    public get xForwardedProto(): boolean | undefined {
        return this['X-Forwarded-Proto'];
    }
    public withXRealIP(xRealIP: boolean): ListenerInsertHeaders {
        this['X-Real-IP'] = xRealIP;
        return this;
    }
    public set xRealIP(xRealIP: boolean  | undefined) {
        this['X-Real-IP'] = xRealIP;
    }
    public get xRealIP(): boolean | undefined {
        return this['X-Real-IP'];
    }
    public withXForwardedELBID(xForwardedELBID: boolean): ListenerInsertHeaders {
        this['X-Forwarded-ELB-ID'] = xForwardedELBID;
        return this;
    }
    public set xForwardedELBID(xForwardedELBID: boolean  | undefined) {
        this['X-Forwarded-ELB-ID'] = xForwardedELBID;
    }
    public get xForwardedELBID(): boolean | undefined {
        return this['X-Forwarded-ELB-ID'];
    }
    public withXForwardedTLSCertificateID(xForwardedTLSCertificateID: boolean): ListenerInsertHeaders {
        this['X-Forwarded-TLS-Certificate-ID'] = xForwardedTLSCertificateID;
        return this;
    }
    public set xForwardedTLSCertificateID(xForwardedTLSCertificateID: boolean  | undefined) {
        this['X-Forwarded-TLS-Certificate-ID'] = xForwardedTLSCertificateID;
    }
    public get xForwardedTLSCertificateID(): boolean | undefined {
        return this['X-Forwarded-TLS-Certificate-ID'];
    }
    public withXForwardedTLSProtocol(xForwardedTLSProtocol: boolean): ListenerInsertHeaders {
        this['X-Forwarded-TLS-Protocol'] = xForwardedTLSProtocol;
        return this;
    }
    public set xForwardedTLSProtocol(xForwardedTLSProtocol: boolean  | undefined) {
        this['X-Forwarded-TLS-Protocol'] = xForwardedTLSProtocol;
    }
    public get xForwardedTLSProtocol(): boolean | undefined {
        return this['X-Forwarded-TLS-Protocol'];
    }
    public withXForwardedTLSCipher(xForwardedTLSCipher: boolean): ListenerInsertHeaders {
        this['X-Forwarded-TLS-Cipher'] = xForwardedTLSCipher;
        return this;
    }
    public set xForwardedTLSCipher(xForwardedTLSCipher: boolean  | undefined) {
        this['X-Forwarded-TLS-Cipher'] = xForwardedTLSCipher;
    }
    public get xForwardedTLSCipher(): boolean | undefined {
        return this['X-Forwarded-TLS-Cipher'];
    }
    public withXForwardedTLSProtocolAlias(xForwardedTLSProtocolAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-TLS-Protocol-alias'] = xForwardedTLSProtocolAlias;
        return this;
    }
    public set xForwardedTLSProtocolAlias(xForwardedTLSProtocolAlias: string  | undefined) {
        this['X-Forwarded-TLS-Protocol-alias'] = xForwardedTLSProtocolAlias;
    }
    public get xForwardedTLSProtocolAlias(): string | undefined {
        return this['X-Forwarded-TLS-Protocol-alias'];
    }
    public withXForwardedTLSCipherAlias(xForwardedTLSCipherAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-TLS-Cipher-alias'] = xForwardedTLSCipherAlias;
        return this;
    }
    public set xForwardedTLSCipherAlias(xForwardedTLSCipherAlias: string  | undefined) {
        this['X-Forwarded-TLS-Cipher-alias'] = xForwardedTLSCipherAlias;
    }
    public get xForwardedTLSCipherAlias(): string | undefined {
        return this['X-Forwarded-TLS-Cipher-alias'];
    }
    public withXForwardedForProcessingMode(xForwardedForProcessingMode: ListenerInsertHeadersXForwardedForProcessingModeEnum | string): ListenerInsertHeaders {
        this['X-Forwarded-For-Processing-Mode'] = xForwardedForProcessingMode;
        return this;
    }
    public set xForwardedForProcessingMode(xForwardedForProcessingMode: ListenerInsertHeadersXForwardedForProcessingModeEnum | string  | undefined) {
        this['X-Forwarded-For-Processing-Mode'] = xForwardedForProcessingMode;
    }
    public get xForwardedForProcessingMode(): ListenerInsertHeadersXForwardedForProcessingModeEnum | string | undefined {
        return this['X-Forwarded-For-Processing-Mode'];
    }
    public withXForwardedClientcertSubjectdnEnable(xForwardedClientcertSubjectdnEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-subjectdn-enable'] = xForwardedClientcertSubjectdnEnable;
        return this;
    }
    public set xForwardedClientcertSubjectdnEnable(xForwardedClientcertSubjectdnEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-subjectdn-enable'] = xForwardedClientcertSubjectdnEnable;
    }
    public get xForwardedClientcertSubjectdnEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-subjectdn-enable'];
    }
    public withXForwardedClientcertSubjectdnAlias(xForwardedClientcertSubjectdnAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-subjectdn-alias'] = xForwardedClientcertSubjectdnAlias;
        return this;
    }
    public set xForwardedClientcertSubjectdnAlias(xForwardedClientcertSubjectdnAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-subjectdn-alias'] = xForwardedClientcertSubjectdnAlias;
    }
    public get xForwardedClientcertSubjectdnAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-subjectdn-alias'];
    }
    public withXForwardedClientcertIssuerdnEnable(xForwardedClientcertIssuerdnEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-issuerdn-enable'] = xForwardedClientcertIssuerdnEnable;
        return this;
    }
    public set xForwardedClientcertIssuerdnEnable(xForwardedClientcertIssuerdnEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-issuerdn-enable'] = xForwardedClientcertIssuerdnEnable;
    }
    public get xForwardedClientcertIssuerdnEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-issuerdn-enable'];
    }
    public withXForwardedClientcertIssuerdnAlias(xForwardedClientcertIssuerdnAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-issuerdn-alias'] = xForwardedClientcertIssuerdnAlias;
        return this;
    }
    public set xForwardedClientcertIssuerdnAlias(xForwardedClientcertIssuerdnAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-issuerdn-alias'] = xForwardedClientcertIssuerdnAlias;
    }
    public get xForwardedClientcertIssuerdnAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-issuerdn-alias'];
    }
    public withXForwardedClientcertFingerprintEnable(xForwardedClientcertFingerprintEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-fingerprint-enable'] = xForwardedClientcertFingerprintEnable;
        return this;
    }
    public set xForwardedClientcertFingerprintEnable(xForwardedClientcertFingerprintEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-fingerprint-enable'] = xForwardedClientcertFingerprintEnable;
    }
    public get xForwardedClientcertFingerprintEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-fingerprint-enable'];
    }
    public withXForwardedClientcertFingerprintAlias(xForwardedClientcertFingerprintAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-fingerprint-alias'] = xForwardedClientcertFingerprintAlias;
        return this;
    }
    public set xForwardedClientcertFingerprintAlias(xForwardedClientcertFingerprintAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-fingerprint-alias'] = xForwardedClientcertFingerprintAlias;
    }
    public get xForwardedClientcertFingerprintAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-fingerprint-alias'];
    }
    public withXForwardedClientcertClientverifyEnable(xForwardedClientcertClientverifyEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-clientverify-enable'] = xForwardedClientcertClientverifyEnable;
        return this;
    }
    public set xForwardedClientcertClientverifyEnable(xForwardedClientcertClientverifyEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-clientverify-enable'] = xForwardedClientcertClientverifyEnable;
    }
    public get xForwardedClientcertClientverifyEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-clientverify-enable'];
    }
    public withXForwardedClientcertClientverifyAlias(xForwardedClientcertClientverifyAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-clientverify-alias'] = xForwardedClientcertClientverifyAlias;
        return this;
    }
    public set xForwardedClientcertClientverifyAlias(xForwardedClientcertClientverifyAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-clientverify-alias'] = xForwardedClientcertClientverifyAlias;
    }
    public get xForwardedClientcertClientverifyAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-clientverify-alias'];
    }
    public withXForwardedClientcertSerialnumberEnable(xForwardedClientcertSerialnumberEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-serialnumber-enable'] = xForwardedClientcertSerialnumberEnable;
        return this;
    }
    public set xForwardedClientcertSerialnumberEnable(xForwardedClientcertSerialnumberEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-serialnumber-enable'] = xForwardedClientcertSerialnumberEnable;
    }
    public get xForwardedClientcertSerialnumberEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-serialnumber-enable'];
    }
    public withXForwardedClientcertSerialnumberAlias(xForwardedClientcertSerialnumberAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-serialnumber-alias'] = xForwardedClientcertSerialnumberAlias;
        return this;
    }
    public set xForwardedClientcertSerialnumberAlias(xForwardedClientcertSerialnumberAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-serialnumber-alias'] = xForwardedClientcertSerialnumberAlias;
    }
    public get xForwardedClientcertSerialnumberAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-serialnumber-alias'];
    }
    public withXForwardedClientcertEnable(xForwardedClientcertEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-enable'] = xForwardedClientcertEnable;
        return this;
    }
    public set xForwardedClientcertEnable(xForwardedClientcertEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-enable'] = xForwardedClientcertEnable;
    }
    public get xForwardedClientcertEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-enable'];
    }
    public withXForwardedClientcertAlias(xForwardedClientcertAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-alias'] = xForwardedClientcertAlias;
        return this;
    }
    public set xForwardedClientcertAlias(xForwardedClientcertAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-alias'] = xForwardedClientcertAlias;
    }
    public get xForwardedClientcertAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-alias'];
    }
    public withXForwardedClientcertCiphersEnable(xForwardedClientcertCiphersEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-ciphers-enable'] = xForwardedClientcertCiphersEnable;
        return this;
    }
    public set xForwardedClientcertCiphersEnable(xForwardedClientcertCiphersEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-ciphers-enable'] = xForwardedClientcertCiphersEnable;
    }
    public get xForwardedClientcertCiphersEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-ciphers-enable'];
    }
    public withXForwardedClientcertCiphersAlias(xForwardedClientcertCiphersAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-ciphers-alias'] = xForwardedClientcertCiphersAlias;
        return this;
    }
    public set xForwardedClientcertCiphersAlias(xForwardedClientcertCiphersAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-ciphers-alias'] = xForwardedClientcertCiphersAlias;
    }
    public get xForwardedClientcertCiphersAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-ciphers-alias'];
    }
    public withXForwardedClientcertEndEnable(xForwardedClientcertEndEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-end-enable'] = xForwardedClientcertEndEnable;
        return this;
    }
    public set xForwardedClientcertEndEnable(xForwardedClientcertEndEnable: boolean  | undefined) {
        this['X-Forwarded-Clientcert-end-enable'] = xForwardedClientcertEndEnable;
    }
    public get xForwardedClientcertEndEnable(): boolean | undefined {
        return this['X-Forwarded-Clientcert-end-enable'];
    }
    public withXForwardedClientcertEndAlias(xForwardedClientcertEndAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Clientcert-end-alias'] = xForwardedClientcertEndAlias;
        return this;
    }
    public set xForwardedClientcertEndAlias(xForwardedClientcertEndAlias: string  | undefined) {
        this['X-Forwarded-Clientcert-end-alias'] = xForwardedClientcertEndAlias;
    }
    public get xForwardedClientcertEndAlias(): string | undefined {
        return this['X-Forwarded-Clientcert-end-alias'];
    }
    public withXForwardedTlsAlpnProtocolEnable(xForwardedTlsAlpnProtocolEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Alpn-Protocol-enable'] = xForwardedTlsAlpnProtocolEnable;
        return this;
    }
    public set xForwardedTlsAlpnProtocolEnable(xForwardedTlsAlpnProtocolEnable: boolean  | undefined) {
        this['X-Forwarded-Tls-Alpn-Protocol-enable'] = xForwardedTlsAlpnProtocolEnable;
    }
    public get xForwardedTlsAlpnProtocolEnable(): boolean | undefined {
        return this['X-Forwarded-Tls-Alpn-Protocol-enable'];
    }
    public withXForwardedTlsAlpnProtocolAlias(xForwardedTlsAlpnProtocolAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Alpn-Protocol-alias'] = xForwardedTlsAlpnProtocolAlias;
        return this;
    }
    public set xForwardedTlsAlpnProtocolAlias(xForwardedTlsAlpnProtocolAlias: string  | undefined) {
        this['X-Forwarded-Tls-Alpn-Protocol-alias'] = xForwardedTlsAlpnProtocolAlias;
    }
    public get xForwardedTlsAlpnProtocolAlias(): string | undefined {
        return this['X-Forwarded-Tls-Alpn-Protocol-alias'];
    }
    public withXForwardedTlsSniEnable(xForwardedTlsSniEnable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Sni-enable'] = xForwardedTlsSniEnable;
        return this;
    }
    public set xForwardedTlsSniEnable(xForwardedTlsSniEnable: boolean  | undefined) {
        this['X-Forwarded-Tls-Sni-enable'] = xForwardedTlsSniEnable;
    }
    public get xForwardedTlsSniEnable(): boolean | undefined {
        return this['X-Forwarded-Tls-Sni-enable'];
    }
    public withXForwardedTlsSniAlias(xForwardedTlsSniAlias: string): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Sni-alias'] = xForwardedTlsSniAlias;
        return this;
    }
    public set xForwardedTlsSniAlias(xForwardedTlsSniAlias: string  | undefined) {
        this['X-Forwarded-Tls-Sni-alias'] = xForwardedTlsSniAlias;
    }
    public get xForwardedTlsSniAlias(): string | undefined {
        return this['X-Forwarded-Tls-Sni-alias'];
    }
    public withXForwardedTlsJa3Enable(xForwardedTlsJa3Enable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Ja3-enable'] = xForwardedTlsJa3Enable;
        return this;
    }
    public set xForwardedTlsJa3Enable(xForwardedTlsJa3Enable: boolean  | undefined) {
        this['X-Forwarded-Tls-Ja3-enable'] = xForwardedTlsJa3Enable;
    }
    public get xForwardedTlsJa3Enable(): boolean | undefined {
        return this['X-Forwarded-Tls-Ja3-enable'];
    }
    public withXForwardedTlsJa3Alias(xForwardedTlsJa3Alias: string): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Ja3-alias'] = xForwardedTlsJa3Alias;
        return this;
    }
    public set xForwardedTlsJa3Alias(xForwardedTlsJa3Alias: string  | undefined) {
        this['X-Forwarded-Tls-Ja3-alias'] = xForwardedTlsJa3Alias;
    }
    public get xForwardedTlsJa3Alias(): string | undefined {
        return this['X-Forwarded-Tls-Ja3-alias'];
    }
    public withXForwardedTlsJa4Enable(xForwardedTlsJa4Enable: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Ja4-enable'] = xForwardedTlsJa4Enable;
        return this;
    }
    public set xForwardedTlsJa4Enable(xForwardedTlsJa4Enable: boolean  | undefined) {
        this['X-Forwarded-Tls-Ja4-enable'] = xForwardedTlsJa4Enable;
    }
    public get xForwardedTlsJa4Enable(): boolean | undefined {
        return this['X-Forwarded-Tls-Ja4-enable'];
    }
    public withXForwardedTlsJa4Alias(xForwardedTlsJa4Alias: string): ListenerInsertHeaders {
        this['X-Forwarded-Tls-Ja4-alias'] = xForwardedTlsJa4Alias;
        return this;
    }
    public set xForwardedTlsJa4Alias(xForwardedTlsJa4Alias: string  | undefined) {
        this['X-Forwarded-Tls-Ja4-alias'] = xForwardedTlsJa4Alias;
    }
    public get xForwardedTlsJa4Alias(): string | undefined {
        return this['X-Forwarded-Tls-Ja4-alias'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListenerInsertHeadersXForwardedForProcessingModeEnum {
    APPENDREMOVEPRESERVE = 'append、remove、preserve'
}
