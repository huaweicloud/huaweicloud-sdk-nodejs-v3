import { BatchBindProvidersReq } from './BatchBindProvidersReq';


export class BatchBindProvidersRequest {
    private 'group_id'?: string;
    public body?: BatchBindProvidersReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): BatchBindProvidersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: BatchBindProvidersReq): BatchBindProvidersRequest {
        this['body'] = body;
        return this;
    }
}