

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
}