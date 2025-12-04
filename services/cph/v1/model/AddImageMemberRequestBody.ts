

export class AddImageMemberRequestBody {
    public member?: string;
    public constructor() { 
    }
    public withMember(member: string): AddImageMemberRequestBody {
        this['member'] = member;
        return this;
    }
}