import { BatchDeleteSessionsReqBody } from './BatchDeleteSessionsReqBody';


export class BatchDeleteSessionsRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    private 'user_id'?: string;
    public body?: BatchDeleteSessionsReqBody;
    public constructor(identityStoreId?: string, userId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['user_id'] = userId;
    }
    public withXSecurityToken(xSecurityToken: string): BatchDeleteSessionsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): BatchDeleteSessionsRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserId(userId: string): BatchDeleteSessionsRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: BatchDeleteSessionsReqBody): BatchDeleteSessionsRequest {
        this['body'] = body;
        return this;
    }
}