import { RetryTaskGroupReq } from './RetryTaskGroupReq';


export class RetryTaskGroupRequest {
    private 'group_id'?: string;
    public body?: RetryTaskGroupReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): RetryTaskGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: RetryTaskGroupReq): RetryTaskGroupRequest {
        this['body'] = body;
        return this;
    }
}