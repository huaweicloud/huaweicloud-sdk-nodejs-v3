

export class DeleteExternalIdPCertificateRequest {
    private 'identity_store_id'?: string;
    private 'X-Security-Token'?: string;
    private 'certificate_id'?: string;
    private 'idp_id'?: string;
    public constructor(identityStoreId?: string, certificateId?: string, idpId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['certificate_id'] = certificateId;
        this['idp_id'] = idpId;
    }
    public withIdentityStoreId(identityStoreId: string): DeleteExternalIdPCertificateRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withXSecurityToken(xSecurityToken: string): DeleteExternalIdPCertificateRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withCertificateId(certificateId: string): DeleteExternalIdPCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withIdpId(idpId: string): DeleteExternalIdPCertificateRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
}