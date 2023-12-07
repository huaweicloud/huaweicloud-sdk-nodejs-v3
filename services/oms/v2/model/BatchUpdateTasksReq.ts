import { BandwidthPolicyDto } from './BandwidthPolicyDto';


export class BatchUpdateTasksReq {
    private 'group_id'?: string;
    public ids?: Array<number>;
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto>;
    private 'task_priority'?: BatchUpdateTasksReqTaskPriorityEnum | string;
    public constructor(bandwidthPolicy?: Array<BandwidthPolicyDto>) { 
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public withGroupId(groupId: string): BatchUpdateTasksReq {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIds(ids: Array<number>): BatchUpdateTasksReq {
        this['ids'] = ids;
        return this;
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): BatchUpdateTasksReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>  | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy(): Array<BandwidthPolicyDto> | undefined {
        return this['bandwidth_policy'];
    }
    public withTaskPriority(taskPriority: BatchUpdateTasksReqTaskPriorityEnum | string): BatchUpdateTasksReq {
        this['task_priority'] = taskPriority;
        return this;
    }
    public set taskPriority(taskPriority: BatchUpdateTasksReqTaskPriorityEnum | string  | undefined) {
        this['task_priority'] = taskPriority;
    }
    public get taskPriority(): BatchUpdateTasksReqTaskPriorityEnum | string | undefined {
        return this['task_priority'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateTasksReqTaskPriorityEnum {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
