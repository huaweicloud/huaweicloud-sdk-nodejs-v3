import { SmartConnectTaskEntity } from './SmartConnectTaskEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectorTasksResponse extends SdkResponse {
    public tasks?: Array<SmartConnectTaskEntity>;
    private 'total_number'?: number;
    private 'max_tasks'?: number;
    private 'quota_tasks'?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SmartConnectTaskEntity>): ListConnectorTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotalNumber(totalNumber: number): ListConnectorTasksResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withMaxTasks(maxTasks: number): ListConnectorTasksResponse {
        this['max_tasks'] = maxTasks;
        return this;
    }
    public set maxTasks(maxTasks: number  | undefined) {
        this['max_tasks'] = maxTasks;
    }
    public get maxTasks(): number | undefined {
        return this['max_tasks'];
    }
    public withQuotaTasks(quotaTasks: number): ListConnectorTasksResponse {
        this['quota_tasks'] = quotaTasks;
        return this;
    }
    public set quotaTasks(quotaTasks: number  | undefined) {
        this['quota_tasks'] = quotaTasks;
    }
    public get quotaTasks(): number | undefined {
        return this['quota_tasks'];
    }
}