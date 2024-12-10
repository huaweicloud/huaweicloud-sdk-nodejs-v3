

export class CertificateForm {
    public name?: string;
    private 'cert_content'?: string;
    private 'private_key'?: string;
    public type?: CertificateFormTypeEnum | string;
    private 'instance_id'?: string;
    private 'trusted_root_ca'?: string;
    private 'algorithm_type'?: CertificateFormAlgorithmTypeEnum | string;
    private 'cert_content_sign'?: string;
    private 'private_key_sign'?: string;
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
    public withAlgorithmType(algorithmType: CertificateFormAlgorithmTypeEnum | string): CertificateForm {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: CertificateFormAlgorithmTypeEnum | string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): CertificateFormAlgorithmTypeEnum | string | undefined {
        return this['algorithm_type'];
    }
    public withCertContentSign(certContentSign: string): CertificateForm {
        this['cert_content_sign'] = certContentSign;
        return this;
    }
    public set certContentSign(certContentSign: string  | undefined) {
        this['cert_content_sign'] = certContentSign;
    }
    public get certContentSign(): string | undefined {
        return this['cert_content_sign'];
    }
    public withPrivateKeySign(privateKeySign: string): CertificateForm {
        this['private_key_sign'] = privateKeySign;
        return this;
    }
    public set privateKeySign(privateKeySign: string  | undefined) {
        this['private_key_sign'] = privateKeySign;
    }
    public get privateKeySign(): string | undefined {
        return this['private_key_sign'];
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
/**
    * @export
    * @enum {string}
    */
export enum CertificateFormAlgorithmTypeEnum {
    RSA = 'RSA',
    ECC = 'ECC',
    SM2 = 'SM2'
}
