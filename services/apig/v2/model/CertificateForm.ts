

export class CertificateForm {
    public name?: string;
    private 'cert_content'?: string;
    private 'private_key'?: string;
    public type?: CertificateFormTypeEnum | string;
    private 'instance_id'?: string;
    private 'trusted_root_ca'?: string;
    public constructor(name?: string, certContent?: string, privateKey?: string) { 
        this['name'] = name;
        this['cert_content'] = certContent;
        this['private_key'] = privateKey;
    }
    public withName(name: string): CertificateForm {
        this['name'] = name;
        return this;
    }
    public withCertContent(certContent: string): CertificateForm {
        this['cert_content'] = certContent;
        return this;
    }
    public set certContent(certContent: string  | undefined) {
        this['cert_content'] = certContent;
    }
    public get certContent(): string | undefined {
        return this['cert_content'];
    }
    public withPrivateKey(privateKey: string): CertificateForm {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withType(type: CertificateFormTypeEnum | string): CertificateForm {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): CertificateForm {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTrustedRootCa(trustedRootCa: string): CertificateForm {
        this['trusted_root_ca'] = trustedRootCa;
        return this;
    }
    public set trustedRootCa(trustedRootCa: string  | undefined) {
        this['trusted_root_ca'] = trustedRootCa;
    }
    public get trustedRootCa(): string | undefined {
        return this['trusted_root_ca'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertificateFormTypeEnum {
    INSTANCE = 'instance',
    GLOBAL = 'global'
}
