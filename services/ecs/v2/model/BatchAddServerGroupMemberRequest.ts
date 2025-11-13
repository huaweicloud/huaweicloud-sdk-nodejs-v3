import { BatchAddServerGroupMemberReq } from './BatchAddServerGroupMemberReq';


export class BatchAddServerGroupMemberRequest {
    private 'server_group_id'?: string;
    public body?: BatchAddServerGroupMemberReq;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): BatchAddServerGroupMemberRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: BatchAddServerGroupMemberReq): BatchAddServerGroupMemberRequest {
        this['body'] = body;
        return this;
    }
}