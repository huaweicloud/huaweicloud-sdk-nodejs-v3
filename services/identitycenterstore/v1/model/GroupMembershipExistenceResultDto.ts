import { MemberIdDto } from './MemberIdDto';


export class GroupMembershipExistenceResultDto {
    private 'group_id'?: string;
    private 'member_id'?: MemberIdDto;
    private 'membership_exists'?: boolean;
    public constructor() { 
    }
    public withGroupId(groupId: string): GroupMembershipExistenceResultDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMemberId(memberId: MemberIdDto): GroupMembershipExistenceResultDto {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: MemberIdDto  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): MemberIdDto | undefined {
        return this['member_id'];
    }
    public withMembershipExists(membershipExists: boolean): GroupMembershipExistenceResultDto {
        this['membership_exists'] = membershipExists;
        return this;
    }
    public set membershipExists(membershipExists: boolean  | undefined) {
        this['membership_exists'] = membershipExists;
    }
    public get membershipExists(): boolean | undefined {
        return this['membership_exists'];
    }
}