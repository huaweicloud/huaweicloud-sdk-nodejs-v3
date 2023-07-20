import { ShowGroupsRespGroupAssignment } from './ShowGroupsRespGroupAssignment';


export class ShowGroupsRespGroupMembers {
    public host?: string;
    public assignment?: Array<ShowGroupsRespGroupAssignment>;
    private 'member_id'?: string;
    private 'client_id'?: string;
    public constructor() { 
    }
    public withHost(host: string): ShowGroupsRespGroupMembers {
        this['host'] = host;
        return this;
    }
    public withAssignment(assignment: Array<ShowGroupsRespGroupAssignment>): ShowGroupsRespGroupMembers {
        this['assignment'] = assignment;
        return this;
    }
    public withMemberId(memberId: string): ShowGroupsRespGroupMembers {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withClientId(clientId: string): ShowGroupsRespGroupMembers {
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