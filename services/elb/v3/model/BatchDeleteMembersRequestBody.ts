import { BatchDeleteMembersOption } from './BatchDeleteMembersOption';


export class BatchDeleteMembersRequestBody {
    public members: Array<BatchDeleteMembersOption>;
    public constructor(members?: any) { 
        this['members'] = members;
    }
    public withMembers(members: Array<BatchDeleteMembersOption>): BatchDeleteMembersRequestBody {
        this['members'] = members;
        return this;
    }
}