import { MemberIdDto } from './MemberIdDto';


export class GroupMembershipItem {
    private 'group_id'?: string;
    private 'identity_store_id'?: string;
    private 'member_id'?: MemberIdDto;
    private 'membership_id'?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): GroupMembershipItem {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIdentityStoreId(identityStoreId: string): GroupMembershipItem {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withMemberId(memberId: MemberIdDto): GroupMembershipItem {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: MemberIdDto  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): MemberIdDto | undefined {
        return this['member_id'];
    }
    public withMembershipId(membershipId: string): GroupMembershipItem {
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