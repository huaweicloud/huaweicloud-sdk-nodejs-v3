

export class MemberPolicyItem {
    private 'member_id'?: string;
    private 'member_name'?: string;
    private 'member_type'?: MemberPolicyItemMemberTypeEnum | string;
    public constructor(memberId?: string, memberName?: string) { 
        this['member_id'] = memberId;
        this['member_name'] = memberName;
    }
    public withMemberId(memberId: string): MemberPolicyItem {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withMemberName(memberName: string): MemberPolicyItem {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withMemberType(memberType: MemberPolicyItemMemberTypeEnum | string): MemberPolicyItem {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: MemberPolicyItemMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): MemberPolicyItemMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberPolicyItemMemberTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    WORKSPACE_ROLE = 'WORKSPACE_ROLE'
}
