

export class RunningTasks {
    private 'task_id'?: string;
    private 'operate_type'?: RunningTasksOperateTypeEnum | string;
    private 'task_time'?: string;
    private 'server_name'?: string;
    private 'server_id'?: string;
    private 'keypair_name'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): RunningTasks {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOperateType(operateType: RunningTasksOperateTypeEnum | string): RunningTasks {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: RunningTasksOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): RunningTasksOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withTaskTime(taskTime: string): RunningTasks {
        this['task_time'] = taskTime;
        return this;
    }
    public set taskTime(taskTime: string  | undefined) {
        this['task_time'] = taskTime;
    }
    public get taskTime(): string | undefined {
        return this['task_time'];
    }
    public withServerName(serverName: string): RunningTasks {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerId(serverId: string): RunningTasks {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withKeypairName(keypairName: string): RunningTasks {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunningTasksOperateTypeEnum {
    FAILED_RESET = 'FAILED_RESET',
    FAILED_REPLACE = 'FAILED_REPLACE',
    FAILED_UNBIND = 'FAILED_UNBIND'
}
