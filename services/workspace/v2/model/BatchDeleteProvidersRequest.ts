import { BatchDeleteProvidersReq } from './BatchDeleteProvidersReq';


export class BatchDeleteProvidersRequest {
    private 'group_id'?: string;
    public body?: BatchDeleteProvidersReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): BatchDeleteProvidersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: BatchDeleteProvidersReq): BatchDeleteProvidersRequest {
        this['body'] = body;
        return this;
    }
}