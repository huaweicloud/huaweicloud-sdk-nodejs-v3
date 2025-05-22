import { DelResourcesReq } from './DelResourcesReq';


export class BatchDeleteResourcesRequest {
    private 'group_id'?: string;
    public body?: DelResourcesReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): BatchDeleteResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: DelResourcesReq): BatchDeleteResourcesRequest {
        this['body'] = body;
        return this;
    }
}