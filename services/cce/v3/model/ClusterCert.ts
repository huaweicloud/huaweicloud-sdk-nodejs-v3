

export class ClusterCert {
    private 'certificate-authority-data'?: string | undefined;
    private 'insecure-skip-tls-verify'?: boolean | undefined;
    public server?: string;
    public constructor() { 
    }
    public withCertificateAuthorityData(certificateAuthorityData: string): ClusterCert {
        this['certificate-authority-data'] = certificateAuthorityData;
        return this;
    }
    public set certificateAuthorityData(certificateAuthorityData: string | undefined) {
        this['certificate-authority-data'] = certificateAuthorityData;
    }
    public get certificateAuthorityData() {
        return this['certificate-authority-data'];
    }
    public withInsecureSkipTlsVerify(insecureSkipTlsVerify: boolean): ClusterCert {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
        return this;
    }
    public set insecureSkipTlsVerify(insecureSkipTlsVerify: boolean | undefined) {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
    }
    public get insecureSkipTlsVerify() {
        return this['insecure-skip-tls-verify'];
    }
    public withServer(server: string): ClusterCert {
        this['server'] = server;
        return this;
    }
}