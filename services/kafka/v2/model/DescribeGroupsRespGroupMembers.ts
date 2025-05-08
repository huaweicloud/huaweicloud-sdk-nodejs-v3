

export class DescribeGroupsRespGroupMembers {
    public host?: string;
    private 'member_id'?: string;
    private 'client_id'?: string;
    public constructor() { 
    }
    public withHost(host: string): DescribeGroupsRespGroupMembers {
        this['host'] = host;
        return this;
    }
    public withMemberId(memberId: string): DescribeGroupsRespGroupMembers {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withClientId(clientId: string): DescribeGroupsRespGroupMembers {
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