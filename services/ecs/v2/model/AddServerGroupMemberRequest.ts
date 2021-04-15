import { AddServerGroupMemberRequestBody } from './AddServerGroupMemberRequestBody';


export class AddServerGroupMemberRequest {
    private 'server_group_id': string | undefined;
    public body?: AddServerGroupMemberRequestBody;
    public constructor(serverGroupId?: any) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): AddServerGroupMemberRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId() {
        return this['server_group_id'];
    }
    public withBody(body: AddServerGroupMemberRequestBody): AddServerGroupMemberRequest {
        this['body'] = body;
        return this;
    }
}