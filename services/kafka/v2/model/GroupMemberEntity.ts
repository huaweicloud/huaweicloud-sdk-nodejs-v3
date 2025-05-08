

export class GroupMemberEntity {
    private 'member_id'?: string;
    private 'client_id'?: string;
    public constructor() { 
    }
    public withMemberId(memberId: string): GroupMemberEntity {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withClientId(clientId: string): GroupMemberEntity {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}