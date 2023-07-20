import { BatchDeleteInstanceUsersReq } from './BatchDeleteInstanceUsersReq';


export class BatchDeleteInstanceUsersRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteInstanceUsersReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteInstanceUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteInstanceUsersReq): BatchDeleteInstanceUsersRequest {
        this['body'] = body;
        return this;
    }
}