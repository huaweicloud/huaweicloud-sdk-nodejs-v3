import { CreateMemberReq } from './CreateMemberReq';


export class CreateMemberRequestBody {
    public member: CreateMemberReq;
    public constructor(member?: any) { 
        this['member'] = member;
    }
    public withMember(member: CreateMemberReq): CreateMemberRequestBody {
        this['member'] = member;
        return this;
    }
}