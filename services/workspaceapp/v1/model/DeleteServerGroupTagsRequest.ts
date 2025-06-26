import { DeleteResourceTagReq } from './DeleteResourceTagReq';


export class DeleteServerGroupTagsRequest {
    private 'server_group_id'?: string;
    public body?: DeleteResourceTagReq;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): DeleteServerGroupTagsRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: DeleteResourceTagReq): DeleteServerGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}