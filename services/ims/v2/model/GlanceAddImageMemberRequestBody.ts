

export class GlanceAddImageMemberRequestBody {
    public member?: string;
    public constructor(member?: string) { 
        this['member'] = member;
    }
    public withMember(member: string): GlanceAddImageMemberRequestBody {
        this['member'] = member;
        return this;
    }
}