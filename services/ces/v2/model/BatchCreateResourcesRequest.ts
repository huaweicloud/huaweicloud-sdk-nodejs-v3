import { AddResourcesReq } from './AddResourcesReq';


export class BatchCreateResourcesRequest {
    private 'group_id'?: string;
    public body?: AddResourcesReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): BatchCreateResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: AddResourcesReq): BatchCreateResourcesRequest {
        this['body'] = body;
        return this;
    }
}