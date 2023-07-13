

export class FailedTasks {
    private 'task_id'?: string | undefined;
    private 'operate_type'?: FailedTasksOperateTypeEnum | undefined;
    private 'task_time'?: string | undefined;
    private 'task_error_code'?: string | undefined;
    private 'task_error_msg'?: string | undefined;
    private 'server_name'?: string | undefined;
    private 'server_id'?: string | undefined;
    private 'keypair_name'?: string | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): FailedTasks {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withOperateType(operateType: FailedTasksOperateTypeEnum): FailedTasks {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: FailedTasksOperateTypeEnum | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType() {
        return this['operate_type'];
    }
    public withTaskTime(taskTime: string): FailedTasks {
        this['task_time'] = taskTime;
        return this;
    }
    public set taskTime(taskTime: string | undefined) {
        this['task_time'] = taskTime;
    }
    public get taskTime() {
        return this['task_time'];
    }
    public withTaskErrorCode(taskErrorCode: string): FailedTasks {
        this['task_error_code'] = taskErrorCode;
        return this;
    }
    public set taskErrorCode(taskErrorCode: string | undefined) {
        this['task_error_code'] = taskErrorCode;
    }
    public get taskErrorCode() {
        return this['task_error_code'];
    }
    public withTaskErrorMsg(taskErrorMsg: string): FailedTasks {
        this['task_error_msg'] = taskErrorMsg;
        return this;
    }
    public set taskErrorMsg(taskErrorMsg: string | undefined) {
        this['task_error_msg'] = taskErrorMsg;
    }
    public get taskErrorMsg() {
        return this['task_error_msg'];
    }
    public withServerName(serverName: string): FailedTasks {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName() {
        return this['server_name'];
    }
    public withServerId(serverId: string): FailedTasks {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withKeypairName(keypairName: string): FailedTasks {
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
export enum FailedTasksOperateTypeEnum {
    FAILED_RESET = 'FAILED_RESET',
    FAILED_REPLACE = 'FAILED_REPLACE',
    FAILED_UNBIND = 'FAILED_UNBIND'
}
