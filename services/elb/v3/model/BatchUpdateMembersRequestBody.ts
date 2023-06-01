import { BatchUpdateMembersOption } from './BatchUpdateMembersOption';


export class BatchUpdateMembersRequestBody {
    public members: Array<BatchUpdateMembersOption>;
    public constructor(members?: any) { 
        this['members'] = members;
    }
    public withMembers(members: Array<BatchUpdateMembersOption>): BatchUpdateMembersRequestBody {
        this['members'] = members;
        return this;
    }
}