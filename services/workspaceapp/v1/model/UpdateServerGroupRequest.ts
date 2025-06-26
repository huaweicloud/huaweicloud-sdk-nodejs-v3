import { UpdateServerGroupReq } from './UpdateServerGroupReq';


export class UpdateServerGroupRequest {
    private 'server_group_id'?: string;
    public body?: UpdateServerGroupReq;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): UpdateServerGroupRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: UpdateServerGroupReq): UpdateServerGroupRequest {
        this['body'] = body;
        return this;
    }
}