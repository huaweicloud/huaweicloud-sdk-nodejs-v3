import { WorkloadQueueUserReqUserList } from './WorkloadQueueUserReqUserList';


export class WorkloadQueueUserReq {
    private 'queue_name'?: string;
    private 'user_list'?: Array<WorkloadQueueUserReqUserList>;
    public constructor(queueName?: string, userList?: Array<WorkloadQueueUserReqUserList>) { 
        this['queue_name'] = queueName;
        this['user_list'] = userList;
    }
    public withQueueName(queueName: string): WorkloadQueueUserReq {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withUserList(userList: Array<WorkloadQueueUserReqUserList>): WorkloadQueueUserReq {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<WorkloadQueueUserReqUserList>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<WorkloadQueueUserReqUserList> | undefined {
        return this['user_list'];
    }
}