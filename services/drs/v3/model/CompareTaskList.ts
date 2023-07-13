

export class CompareTaskList {
    private 'compare_task_id': string | undefined;
    private 'compare_type': string | undefined;
    private 'compare_task_status': CompareTaskListCompareTaskStatusEnum | undefined;
    private 'create_time': string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(compareTaskId?: any, compareType?: any, compareTaskStatus?: any, createTime?: any) { 
        this['compare_task_id'] = compareTaskId;
        this['compare_type'] = compareType;
        this['compare_task_status'] = compareTaskStatus;
        this['create_time'] = createTime;
    }
    public withCompareTaskId(compareTaskId: string): CompareTaskList {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId() {
        return this['compare_task_id'];
    }
    public withCompareType(compareType: string): CompareTaskList {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withCompareTaskStatus(compareTaskStatus: CompareTaskListCompareTaskStatusEnum): CompareTaskList {
        this['compare_task_status'] = compareTaskStatus;
        return this;
    }
    public set compareTaskStatus(compareTaskStatus: CompareTaskListCompareTaskStatusEnum | undefined) {
        this['compare_task_status'] = compareTaskStatus;
    }
    public get compareTaskStatus() {
        return this['compare_task_status'];
    }
    public withCreateTime(createTime: string): CompareTaskList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEndTime(endTime: string): CompareTaskList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CompareTaskListCompareTaskStatusEnum {
    RUNNING = 'RUNNING',
    WAITING_FOR_RUNNING = 'WAITING_FOR_RUNNING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED',
    TIMEOUT_INTERRUPT = 'TIMEOUT_INTERRUPT',
    FULL_DOING = 'FULL_DOING',
    INCRE_DOING = 'INCRE_DOING'
}
