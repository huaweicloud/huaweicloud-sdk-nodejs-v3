import { ServerGroupMember } from './ServerGroupMember';


export class DeleteServerGroupMemberRequestBody {
    private 'remove_member'?: ServerGroupMember;
    public constructor(removeMember?: ServerGroupMember) { 
        this['remove_member'] = removeMember;
    }
    public withRemoveMember(removeMember: ServerGroupMember): DeleteServerGroupMemberRequestBody {
        this['remove_member'] = removeMember;
        return this;
    }
    public set removeMember(removeMember: ServerGroupMember  | undefined) {
        this['remove_member'] = removeMember;
    }
    public get removeMember(): ServerGroupMember | undefined {
        return this['remove_member'];
    }
}