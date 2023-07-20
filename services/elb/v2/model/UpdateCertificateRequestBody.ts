

export class UpdateCertificateRequestBody {
    public certificate?: string;
    private 'private_key'?: string;
    public description?: string;
    public domain?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    public constructor() { 
    }
    public withCertificate(certificate: string): UpdateCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
    public withPrivateKey(privateKey: string): UpdateCertificateRequestBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withDescription(description: string): UpdateCertificateRequestBody {
        this['description'] = description;
        return this;
    }
    public withDomain(domain: string): UpdateCertificateRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): UpdateCertificateRequestBody {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateCertificateRequestBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
}