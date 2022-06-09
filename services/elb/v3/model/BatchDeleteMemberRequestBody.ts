import { BatchDeleteMembersOption } from './BatchDeleteMembersOption';


export class BatchDeleteMemberRequestBody {
    public members: Array<BatchDeleteMembersOption>;
    public constructor(members?: any) { 
        this['members'] = members;
    }
    public withMembers(members: Array<BatchDeleteMembersOption>): BatchDeleteMemberRequestBody {
        this['members'] = members;
        return this;
    }
}