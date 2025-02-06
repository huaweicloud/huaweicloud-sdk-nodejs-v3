

export class DescribeGroupMembershipRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    private 'membership_id'?: string;
    public constructor(identityStoreId?: string, membershipId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['membership_id'] = membershipId;
    }
    public withXSecurityToken(xSecurityToken: string): DescribeGroupMembershipRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): DescribeGroupMembershipRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withMembershipId(membershipId: string): DescribeGroupMembershipRequest {
        this['membership_id'] = membershipId;
        return this;
    }
    public set membershipId(membershipId: string  | undefined) {
        this['membership_id'] = membershipId;
    }
    public get membershipId(): string | undefined {
        return this['membership_id'];
    }
}