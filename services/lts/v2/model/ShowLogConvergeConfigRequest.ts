

export class ShowLogConvergeConfigRequest {
    private 'member_account_id'?: string;
    private 'Content-Type'?: string;
    public constructor(memberAccountId?: string, contentType?: string) { 
        this['member_account_id'] = memberAccountId;
        this['Content-Type'] = contentType;
    }
    public withMemberAccountId(memberAccountId: string): ShowLogConvergeConfigRequest {
        this['member_account_id'] = memberAccountId;
        return this;
    }
    public set memberAccountId(memberAccountId: string  | undefined) {
        this['member_account_id'] = memberAccountId;
    }
    public get memberAccountId(): string | undefined {
        return this['member_account_id'];
    }
    public withContentType(contentType: string): ShowLogConvergeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}