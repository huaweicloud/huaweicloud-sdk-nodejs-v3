

export class CertificateLocalPathDTO {
    private 'cert_path'?: string;
    private 'key_path'?: string;
    public constructor(certPath?: string, keyPath?: string) { 
        this['cert_path'] = certPath;
        this['key_path'] = keyPath;
    }
    public withCertPath(certPath: string): CertificateLocalPathDTO {
        this['cert_path'] = certPath;
        return this;
    }
    public set certPath(certPath: string  | undefined) {
        this['cert_path'] = certPath;
    }
    public get certPath(): string | undefined {
        return this['cert_path'];
    }
    public withKeyPath(keyPath: string): CertificateLocalPathDTO {
        this['key_path'] = keyPath;
        return this;
    }
    public set keyPath(keyPath: string  | undefined) {
        this['key_path'] = keyPath;
    }
    public get keyPath(): string | undefined {
        return this['key_path'];
    }
}