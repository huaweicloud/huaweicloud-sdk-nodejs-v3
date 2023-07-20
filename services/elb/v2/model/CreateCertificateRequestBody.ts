

export class CreateCertificateRequestBody {
    public certificate?: string;
    private 'private_key'?: string;
    public description?: string;
    public domain?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public constructor(certificate?: string) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: string): CreateCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): CreateCertificateRequestBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withDescription(description: string): CreateCertificateRequestBody {
        this['description'] = description;
        return this;
    }
    public withDomain(domain: string): CreateCertificateRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): CreateCertificateRequestBody {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateCertificateRequestBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withType(type: string): CreateCertificateRequestBody {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}