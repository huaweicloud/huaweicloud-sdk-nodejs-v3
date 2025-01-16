

export class SecretTask {
    private 'task_id'?: string;
    private 'secret_name'?: string;
    private 'rotation_func_urn'?: string;
    private 'task_status'?: string;
    private 'operate_type'?: string;
    private 'task_time'?: number;
    private 'attempt_nums'?: number;
    private 'task_error_code'?: string;
    private 'task_error_msg'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): SecretTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSecretName(secretName: string): SecretTask {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withRotationFuncUrn(rotationFuncUrn: string): SecretTask {
        this['rotation_func_urn'] = rotationFuncUrn;
        return this;
    }
    public set rotationFuncUrn(rotationFuncUrn: string  | undefined) {
        this['rotation_func_urn'] = rotationFuncUrn;
    }
    public get rotationFuncUrn(): string | undefined {
        return this['rotation_func_urn'];
    }
    public withTaskStatus(taskStatus: string): SecretTask {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withOperateType(operateType: string): SecretTask {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withTaskTime(taskTime: number): SecretTask {
        this['task_time'] = taskTime;
        return this;
    }
    public set taskTime(taskTime: number  | undefined) {
        this['task_time'] = taskTime;
    }
    public get taskTime(): number | undefined {
        return this['task_time'];
    }
    public withAttemptNums(attemptNums: number): SecretTask {
        this['attempt_nums'] = attemptNums;
        return this;
    }
    public set attemptNums(attemptNums: number  | undefined) {
        this['attempt_nums'] = attemptNums;
    }
    public get attemptNums(): number | undefined {
        return this['attempt_nums'];
    }
    public withTaskErrorCode(taskErrorCode: string): SecretTask {
        this['task_error_code'] = taskErrorCode;
        return this;
    }
    public set taskErrorCode(taskErrorCode: string  | undefined) {
        this['task_error_code'] = taskErrorCode;
    }
    public get taskErrorCode(): string | undefined {
        return this['task_error_code'];
    }
    public withTaskErrorMsg(taskErrorMsg: string): SecretTask {
        this['task_error_msg'] = taskErrorMsg;
        return this;
    }
    public set taskErrorMsg(taskErrorMsg: string  | undefined) {
        this['task_error_msg'] = taskErrorMsg;
    }
    public get taskErrorMsg(): string | undefined {
        return this['task_error_msg'];
    }
}