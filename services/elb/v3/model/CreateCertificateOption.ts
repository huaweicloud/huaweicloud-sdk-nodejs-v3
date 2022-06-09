

export class CreateCertificateOption {
    private 'admin_state_up'?: boolean | undefined;
    public certificate: string;
    public description?: string;
    public domain?: string;
    public name?: string;
    private 'private_key'?: string | undefined;
    private 'project_id'?: string | undefined;
    public type?: CreateCertificateOptionTypeEnum;
    private 'enterprise_project_id'?: string | undefined;
    private 'enc_certificate'?: string | undefined;
    private 'enc_private_key'?: string | undefined;
    public constructor(certificate?: any) { 
        this['certificate'] = certificate;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateCertificateOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
        return this['private_key'];
    }
    public withProjectId(projectId: string): CreateCertificateOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withType(type: CreateCertificateOptionTypeEnum): CreateCertificateOption {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEncCertificate(encCertificate: string): CreateCertificateOption {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate() {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): CreateCertificateOption {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey() {
        return this['enc_private_key'];
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
