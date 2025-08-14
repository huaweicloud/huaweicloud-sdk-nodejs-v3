

export class DeleteSpCertificateRequest {
    private 'identity_store_id'?: string;
    private 'X-Security-Token'?: string;
    private 'certificate_id'?: string;
    public constructor(identityStoreId?: string, certificateId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['certificate_id'] = certificateId;
    }
    public withIdentityStoreId(identityStoreId: string): DeleteSpCertificateRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withXSecurityToken(xSecurityToken: string): DeleteSpCertificateRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withCertificateId(certificateId: string): DeleteSpCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}