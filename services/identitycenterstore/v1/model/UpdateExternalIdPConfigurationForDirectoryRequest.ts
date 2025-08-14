import { UpdateExternalIdPConfigurationForDirectoryReqBody } from './UpdateExternalIdPConfigurationForDirectoryReqBody';


export class UpdateExternalIdPConfigurationForDirectoryRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    private 'idp_id'?: string;
    public body?: UpdateExternalIdPConfigurationForDirectoryReqBody;
    public constructor(identityStoreId?: string, idpId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['idp_id'] = idpId;
    }
    public withXSecurityToken(xSecurityToken: string): UpdateExternalIdPConfigurationForDirectoryRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): UpdateExternalIdPConfigurationForDirectoryRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withIdpId(idpId: string): UpdateExternalIdPConfigurationForDirectoryRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withBody(body: UpdateExternalIdPConfigurationForDirectoryReqBody): UpdateExternalIdPConfigurationForDirectoryRequest {
        this['body'] = body;
        return this;
    }
}