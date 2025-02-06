import { UpdateGroupReqBody } from './UpdateGroupReqBody';


export class UpdateGroupRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    private 'group_id'?: string;
    public body?: UpdateGroupReqBody;
    public constructor(identityStoreId?: string, groupId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['group_id'] = groupId;
    }
    public withXSecurityToken(xSecurityToken: string): UpdateGroupRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): UpdateGroupRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withGroupId(groupId: string): UpdateGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateGroupReqBody): UpdateGroupRequest {
        this['body'] = body;
        return this;
    }
}