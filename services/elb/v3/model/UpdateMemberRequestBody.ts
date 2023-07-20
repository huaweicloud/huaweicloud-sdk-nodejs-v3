import { UpdateMemberOption } from './UpdateMemberOption';


export class UpdateMemberRequestBody {
    public member?: UpdateMemberOption;
    public constructor(member?: UpdateMemberOption) { 
        this['member'] = member;
    }
    public withMember(member: UpdateMemberOption): UpdateMemberRequestBody {
        this['member'] = member;
        return this;
    }
}