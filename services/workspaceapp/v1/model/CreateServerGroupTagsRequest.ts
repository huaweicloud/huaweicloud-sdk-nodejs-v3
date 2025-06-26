import { CreateResourceTagReq } from './CreateResourceTagReq';


export class CreateServerGroupTagsRequest {
    private 'server_group_id'?: string;
    public body?: CreateResourceTagReq;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): CreateServerGroupTagsRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withBody(body: CreateResourceTagReq): CreateServerGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}