import { CreateIDPReqBody } from './CreateIDPReqBody';


export class CreateExternalIdPConfigurationForDirectoryRequest {
    private 'identity_store_id'?: string;
    private 'X-Security-Token'?: string;
    public body?: CreateIDPReqBody;
    public constructor(identityStoreId?: string) { 
        this['identity_store_id'] = identityStoreId;
    }
    public withIdentityStoreId(identityStoreId: string): CreateExternalIdPConfigurationForDirectoryRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withXSecurityToken(xSecurityToken: string): CreateExternalIdPConfigurationForDirectoryRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateIDPReqBody): CreateExternalIdPConfigurationForDirectoryRequest {
        this['body'] = body;
        return this;
    }
}