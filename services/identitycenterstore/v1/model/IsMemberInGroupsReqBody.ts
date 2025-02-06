import { MemberIdDto } from './MemberIdDto';


export class IsMemberInGroupsReqBody {
    private 'group_ids'?: Array<string>;
    private 'member_id'?: MemberIdDto;
    public constructor(groupIds?: Array<string>, memberId?: MemberIdDto) { 
        this['group_ids'] = groupIds;
        this['member_id'] = memberId;
    }
    public withGroupIds(groupIds: Array<string>): IsMemberInGroupsReqBody {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
    public withMemberId(memberId: MemberIdDto): IsMemberInGroupsReqBody {
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