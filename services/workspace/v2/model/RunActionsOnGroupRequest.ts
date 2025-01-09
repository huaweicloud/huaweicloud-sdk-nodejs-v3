import { ActionsOfUsersInGroupRequest } from './ActionsOfUsersInGroupRequest';


export class RunActionsOnGroupRequest {
    private 'group_id'?: string;
    public body?: ActionsOfUsersInGroupRequest;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): RunActionsOnGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: ActionsOfUsersInGroupRequest): RunActionsOnGroupRequest {
        this['body'] = body;
        return this;
    }
}