

export class RunningTasks {
    private 'task_id'?: string | undefined;
    private 'operate_type'?: RunningTasksOperateTypeEnum | undefined;
    private 'task_time'?: string | undefined;
    private 'server_name'?: string | undefined;
    private 'server_id'?: string | undefined;
    private 'keypair_name'?: string | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): RunningTasks {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withOperateType(operateType: RunningTasksOperateTypeEnum): RunningTasks {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: RunningTasksOperateTypeEnum | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType() {
        return this['operate_type'];
    }
    public withTaskTime(taskTime: string): RunningTasks {
        this['task_time'] = taskTime;
        return this;
    }
    public set taskTime(taskTime: string | undefined) {
        this['task_time'] = taskTime;
    }
    public get taskTime() {
        return this['task_time'];
    }
    public withServerName(serverName: string): RunningTasks {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName() {
        return this['server_name'];
    }
    public withServerId(serverId: string): RunningTasks {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withKeypairName(keypairName: string): RunningTasks {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName() {
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
