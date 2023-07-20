import { DeleteServerGroupMemberRequestBody } from './DeleteServerGroupMemberRequestBody';


export class DeleteServerGroupMemberRequest {
    private 'server_group_id'?: string;
    public body?: DeleteServerGroupMemberRequestBody;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): DeleteServerGroupMemberRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: DeleteServerGroupMemberRequestBody): DeleteServerGroupMemberRequest {
        this['body'] = body;
        return this;
    }
}