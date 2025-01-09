import { EditUserGroupRequest } from './EditUserGroupRequest';


export class UpdateUserGroupRequest {
    private 'group_id'?: string;
    public body?: EditUserGroupRequest;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateUserGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: EditUserGroupRequest): UpdateUserGroupRequest {
        this['body'] = body;
        return this;
    }
}