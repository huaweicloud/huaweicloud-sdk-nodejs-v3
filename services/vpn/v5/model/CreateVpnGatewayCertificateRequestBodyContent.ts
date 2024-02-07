

export class CreateVpnGatewayCertificateRequestBodyContent {
    public name?: string;
    public certificate?: string;
    private 'private_key'?: string;
    private 'certificate_chain'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    public constructor(certificate?: string, privateKey?: string, certificateChain?: string, encCertificate?: string, encPrivateKey?: string) { 
        this['certificate'] = certificate;
        this['private_key'] = privateKey;
        this['certificate_chain'] = certificateChain;
        this['enc_certificate'] = encCertificate;
        this['enc_private_key'] = encPrivateKey;
    }
    public withName(name: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withCertificate(certificate: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificateChain(certificateChain: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['certificate_chain'] = certificateChain;
        return this;
    }
    public set certificateChain(certificateChain: string  | undefined) {
        this['certificate_chain'] = certificateChain;
    }
    public get certificateChain(): string | undefined {
        return this['certificate_chain'];
    }
    public withEncCertificate(encCertificate: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): CreateVpnGatewayCertificateRequestBodyContent {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
}