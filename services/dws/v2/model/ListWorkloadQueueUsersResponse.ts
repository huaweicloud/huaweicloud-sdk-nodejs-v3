import { WorkloadQueueUser } from './WorkloadQueueUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadQueueUsersResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'queue_name'?: string;
    private 'user_list'?: Array<WorkloadQueueUser>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ListWorkloadQueueUsersResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ListWorkloadQueueUsersResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withQueueName(queueName: string): ListWorkloadQueueUsersResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withUserList(userList: Array<WorkloadQueueUser>): ListWorkloadQueueUsersResponse {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<WorkloadQueueUser>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<WorkloadQueueUser> | undefined {
        return this['user_list'];
    }
    public withCount(count: number): ListWorkloadQueueUsersResponse {
        this['count'] = count;
        return this;
    }
}