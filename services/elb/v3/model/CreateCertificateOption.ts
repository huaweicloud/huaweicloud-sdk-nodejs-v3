

export class CreateCertificateOption {
    private 'admin_state_up'?: boolean;
    public certificate?: string;
    public description?: string;
    public domain?: string;
    public name?: string;
    private 'private_key'?: string;
    private 'project_id'?: string;
    public type?: CreateCertificateOptionTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    private 'scm_certificate_id'?: string;
    public source?: string;
    private 'protection_status'?: CreateCertificateOptionProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): CreateCertificateOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCertificate(certificate: string): CreateCertificateOption {
        this['certificate'] = certificate;
        return this;
    }
    public withDescription(description: string): CreateCertificateOption {
        this['description'] = description;
        return this;
    }
    public withDomain(domain: string): CreateCertificateOption {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): CreateCertificateOption {
        this['name'] = name;
        return this;
    }
    public withPrivateKey(privateKey: string): CreateCertificateOption {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withProjectId(projectId: string): CreateCertificateOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: CreateCertificateOptionTypeEnum | string): CreateCertificateOption {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEncCertificate(encCertificate: string): CreateCertificateOption {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): CreateCertificateOption {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
    public withScmCertificateId(scmCertificateId: string): CreateCertificateOption {
        this['scm_certificate_id'] = scmCertificateId;
        return this;
    }
    public set scmCertificateId(scmCertificateId: string  | undefined) {
        this['scm_certificate_id'] = scmCertificateId;
    }
    public get scmCertificateId(): string | undefined {
        return this['scm_certificate_id'];
    }
    public withSource(source: string): CreateCertificateOption {
        this['source'] = source;
        return this;
    }
    public withProtectionStatus(protectionStatus: CreateCertificateOptionProtectionStatusEnum | string): CreateCertificateOption {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CreateCertificateOptionProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CreateCertificateOptionProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CreateCertificateOption {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCertificateOptionTypeEnum {
    SERVER = 'server',
    CLIENT = 'client'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateCertificateOptionProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
