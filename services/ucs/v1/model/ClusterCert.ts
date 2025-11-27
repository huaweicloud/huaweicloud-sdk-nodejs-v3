

export class ClusterCert {
    public server?: string;
    private 'certificate-authority-data'?: string;
    private 'insecure-skip-tls-verify'?: string;
    public constructor() { 
    }
    public withServer(server: string): ClusterCert {
        this['server'] = server;
        return this;
    }
    public withCertificateAuthorityData(certificateAuthorityData: string): ClusterCert {
        this['certificate-authority-data'] = certificateAuthorityData;
        return this;
    }
    public set certificateAuthorityData(certificateAuthorityData: string  | undefined) {
        this['certificate-authority-data'] = certificateAuthorityData;
    }
    public get certificateAuthorityData(): string | undefined {
        return this['certificate-authority-data'];
    }
    public withInsecureSkipTlsVerify(insecureSkipTlsVerify: string): ClusterCert {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
        return this;
    }
    public set insecureSkipTlsVerify(insecureSkipTlsVerify: string  | undefined) {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
    }
    public get insecureSkipTlsVerify(): string | undefined {
        return this['insecure-skip-tls-verify'];
    }
}