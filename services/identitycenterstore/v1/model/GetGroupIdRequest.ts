import { GetGroupIdReqBody } from './GetGroupIdReqBody';


export class GetGroupIdRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    public body?: GetGroupIdReqBody;
    public constructor(identityStoreId?: string) { 
        this['identity_store_id'] = identityStoreId;
    }
    public withXSecurityToken(xSecurityToken: string): GetGroupIdRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): GetGroupIdRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withBody(body: GetGroupIdReqBody): GetGroupIdRequest {
        this['body'] = body;
        return this;
    }
}