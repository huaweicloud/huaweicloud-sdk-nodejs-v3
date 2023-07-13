import { UpdateMemberReq } from './UpdateMemberReq';


export class UpdateMemberRequestBody {
    public member: UpdateMemberReq;
    public constructor(member?: any) { 
        this['member'] = member;
    }
    public withMember(member: UpdateMemberReq): UpdateMemberRequestBody {
        this['member'] = member;
        return this;
    }
}