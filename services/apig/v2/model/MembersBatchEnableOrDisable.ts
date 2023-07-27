

export class MembersBatchEnableOrDisable {
    private 'member_ids'?: Array<string>;
    public constructor() { 
    }
    public withMemberIds(memberIds: Array<string>): MembersBatchEnableOrDisable {
        this['member_ids'] = memberIds;
        return this;
    }
    public set memberIds(memberIds: Array<string>  | undefined) {
        this['member_ids'] = memberIds;
    }
    public get memberIds(): Array<string> | undefined {
        return this['member_ids'];
    }
}