import { MemberInfo } from './MemberInfo';


export class VpcMemberModify {
    public members?: Array<MemberInfo>;
    private 'member_group_name'?: string;
    public constructor() { 
    }
    public withMembers(members: Array<MemberInfo>): VpcMemberModify {
        this['members'] = members;
        return this;
    }
    public withMemberGroupName(memberGroupName: string): VpcMemberModify {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
}