import { BatchCreateMembersOption } from './BatchCreateMembersOption';


export class BatchCreateMembersRequestBody {
    public members: Array<BatchCreateMembersOption>;
    public constructor(members?: any) { 
        this['members'] = members;
    }
    public withMembers(members: Array<BatchCreateMembersOption>): BatchCreateMembersRequestBody {
        this['members'] = members;
        return this;
    }
}