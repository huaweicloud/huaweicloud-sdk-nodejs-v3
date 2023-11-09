

export class ProcessorVo {
    private 'end_time'?: number;
    private 'exec_duration_nano'?: number;
    public id?: string;
    private 'last_step_task_ins_id'?: Array<string>;
    private 'start_time'?: number;
    private 'task_in_record_cnt'?: number;
    private 'task_name'?: string;
    private 'task_out_record_cnt'?: number;
    private 'task_show_info'?: object;
    private 'task_status'?: ProcessorVoTaskStatusEnum | string;
    public constructor(id?: string, taskName?: string) { 
        this['id'] = id;
        this['task_name'] = taskName;
    }
    public withEndTime(endTime: number): ProcessorVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExecDurationNano(execDurationNano: number): ProcessorVo {
        this['exec_duration_nano'] = execDurationNano;
        return this;
    }
    public set execDurationNano(execDurationNano: number  | undefined) {
        this['exec_duration_nano'] = execDurationNano;
    }
    public get execDurationNano(): number | undefined {
        return this['exec_duration_nano'];
    }
    public withId(id: string): ProcessorVo {
        this['id'] = id;
        return this;
    }
    public withLastStepTaskInsId(lastStepTaskInsId: Array<string>): ProcessorVo {
        this['last_step_task_ins_id'] = lastStepTaskInsId;
        return this;
    }
    public set lastStepTaskInsId(lastStepTaskInsId: Array<string>  | undefined) {
        this['last_step_task_ins_id'] = lastStepTaskInsId;
    }
    public get lastStepTaskInsId(): Array<string> | undefined {
        return this['last_step_task_ins_id'];
    }
    public withStartTime(startTime: number): ProcessorVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskInRecordCnt(taskInRecordCnt: number): ProcessorVo {
        this['task_in_record_cnt'] = taskInRecordCnt;
        return this;
    }
    public set taskInRecordCnt(taskInRecordCnt: number  | undefined) {
        this['task_in_record_cnt'] = taskInRecordCnt;
    }
    public get taskInRecordCnt(): number | undefined {
        return this['task_in_record_cnt'];
    }
    public withTaskName(taskName: string): ProcessorVo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskOutRecordCnt(taskOutRecordCnt: number): ProcessorVo {
        this['task_out_record_cnt'] = taskOutRecordCnt;
        return this;
    }
    public set taskOutRecordCnt(taskOutRecordCnt: number  | undefined) {
        this['task_out_record_cnt'] = taskOutRecordCnt;
    }
    public get taskOutRecordCnt(): number | undefined {
        return this['task_out_record_cnt'];
    }
    public withTaskShowInfo(taskShowInfo: object): ProcessorVo {
        this['task_show_info'] = taskShowInfo;
        return this;
    }
    public set taskShowInfo(taskShowInfo: object  | undefined) {
        this['task_show_info'] = taskShowInfo;
    }
    public get taskShowInfo(): object | undefined {
        return this['task_show_info'];
    }
    public withTaskStatus(taskStatus: ProcessorVoTaskStatusEnum | string): ProcessorVo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: ProcessorVoTaskStatusEnum | string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): ProcessorVoTaskStatusEnum | string | undefined {
        return this['task_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProcessorVoTaskStatusEnum {
    ACCEPTED = 'ACCEPTED',
    DEPLOYING = 'DEPLOYING',
    FAILED = 'FAILED',
    NEW = 'NEW',
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    SUBMITING = 'SUBMITING',
    SUCCEEDED = 'SUCCEEDED',
    TERMINATED = 'TERMINATED',
    TERMINATING = 'TERMINATING'
}
