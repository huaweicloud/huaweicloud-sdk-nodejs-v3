import { MemberIdDto } from './MemberIdDto';


export class GetGroupMembershipIdReqBody {
    private 'group_id'?: string;
    private 'member_id'?: MemberIdDto;
    public constructor(groupId?: string, memberId?: MemberIdDto) { 
        this['group_id'] = groupId;
        this['member_id'] = memberId;
    }
    public withGroupId(groupId: string): GetGroupMembershipIdReqBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withMemberId(memberId: MemberIdDto): GetGroupMembershipIdReqBody {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: MemberIdDto  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): MemberIdDto | undefined {
        return this['member_id'];
    }
}