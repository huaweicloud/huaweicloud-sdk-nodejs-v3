import { MemberInfo } from './MemberInfo';


export class VpcMemberCreate {
    public members?: Array<MemberInfo>;
    public constructor(members?: Array<MemberInfo>) { 
        this['members'] = members;
    }
    public withMembers(members: Array<MemberInfo>): VpcMemberCreate {
        this['members'] = members;
        return this;
    }
}