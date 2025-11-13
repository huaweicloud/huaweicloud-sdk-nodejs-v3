import { BatchDeleteServerGroupMemberReq } from './BatchDeleteServerGroupMemberReq';


export class BatchDeleteServerGroupMemberRequest {
    private 'server_group_id'?: string;
    public body?: BatchDeleteServerGroupMemberReq;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): BatchDeleteServerGroupMemberRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: BatchDeleteServerGroupMemberReq): BatchDeleteServerGroupMemberRequest {
        this['body'] = body;
        return this;
    }
}