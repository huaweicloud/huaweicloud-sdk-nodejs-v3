import { BatchAddMemberRequestV4 } from './BatchAddMemberRequestV4';


export class BatchAddMembersV4RequestBody {
    public users?: Array<BatchAddMemberRequestV4>;
    public constructor(users?: Array<BatchAddMemberRequestV4>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<BatchAddMemberRequestV4>): BatchAddMembersV4RequestBody {
        this['users'] = users;
        return this;
    }
}