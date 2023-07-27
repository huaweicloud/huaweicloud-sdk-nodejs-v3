import { MemberGroupCreate } from './MemberGroupCreate';


export class MemberGroupCreateBatch {
    private 'member_groups'?: Array<MemberGroupCreate>;
    public constructor() { 
    }
    public withMemberGroups(memberGroups: Array<MemberGroupCreate>): MemberGroupCreateBatch {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupCreate>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupCreate> | undefined {
        return this['member_groups'];
    }
}