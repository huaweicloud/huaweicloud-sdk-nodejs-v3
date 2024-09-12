

export class OperationLogInfo {
    private 'operate_time'?: string;
    private 'log_type'?: OperationLogInfoLogTypeEnum | string;
    private 'log_description'?: string;
    private 'operate_user'?: OperationLogInfoOperateUserEnum | string;
    public constructor() { 
    }
    public withOperateTime(operateTime: string): OperationLogInfo {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
    public withLogType(logType: OperationLogInfoLogTypeEnum | string): OperationLogInfo {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: OperationLogInfoLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): OperationLogInfoLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withLogDescription(logDescription: string): OperationLogInfo {
        this['log_description'] = logDescription;
        return this;
    }
    public set logDescription(logDescription: string  | undefined) {
        this['log_description'] = logDescription;
    }
    public get logDescription(): string | undefined {
        return this['log_description'];
    }
    public withOperateUser(operateUser: OperationLogInfoOperateUserEnum | string): OperationLogInfo {
        this['operate_user'] = operateUser;
        return this;
    }
    public set operateUser(operateUser: OperationLogInfoOperateUserEnum | string  | undefined) {
        this['operate_user'] = operateUser;
    }
    public get operateUser(): OperationLogInfoOperateUserEnum | string | undefined {
        return this['operate_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperationLogInfoLogTypeEnum {
    USER_CREATE_JOD = 'USER_CREATE_JOD',
    USER_VERIFYING_SUBMITTED = 'USER_VERIFYING_SUBMITTED',
    SYSTEM_VERIFY_FAILED = 'SYSTEM_VERIFY_FAILED',
    ADMIN_UPDATE_BEAUTY_LEVEL = 'ADMIN_UPDATE_BEAUTY_LEVEL',
    SYSTEM_VERIFY_SUCCESS = 'SYSTEM_VERIFY_SUCCESS',
    ADMIN_VERIFY_SUCCESS = 'ADMIN_VERIFY_SUCCESS',
    ADMIN_VERIFY_FAILED = 'ADMIN_VERIFY_FAILED',
    SYSTEM_TRAIN_DATA_PREPROCESSING = 'SYSTEM_TRAIN_DATA_PREPROCESSING',
    SYSTEM_TRAIN_DATA_PREPROCESS_FAILED = 'SYSTEM_TRAIN_DATA_PREPROCESS_FAILED',
    SYSTEM_TRAIN_DATA_PREPROCESS_SUCCESS = 'SYSTEM_TRAIN_DATA_PREPROCESS_SUCCESS',
    SYSTEM_ACTION_GENERATE_DATA_PREPROCESSING = 'SYSTEM_ACTION_GENERATE_DATA_PREPROCESSING',
    SYSTEM_ACTION_GENERATE_DATA_SUCCESS = 'SYSTEM_ACTION_GENERATE_DATA_SUCCESS',
    SYSTEM_ACTION_GENERATE_ORI_SUCCESS = 'SYSTEM_ACTION_GENERATE_ORI_SUCCESS',
    SYSTEM_ACTION_GENERATE_DATA_FAILED = 'SYSTEM_ACTION_GENERATE_DATA_FAILED',
    SYSTEM_ACTION_GENERATE_ORI_FAILED = 'SYSTEM_ACTION_GENERATE_ORI_FAILED',
    SYSTEM_ACTION_GENERATE_ORI_PREPROCESSING = 'SYSTEM_ACTION_GENERATE_ORI_PREPROCESSING',
    SYSTEM_TRAINING = 'SYSTEM_TRAINING',
    ADMIN_STOP_TRAINING_DATA_PREPROCESS = 'ADMIN_STOP_TRAINING_DATA_PREPROCESS',
    ADMIN_STOP_BEAUTY_PREPROCESS = 'ADMIN_STOP_BEAUTY_PREPROCESS',
    ADMIN_STOP_INFERENCE_DATA_PREPROCESS = 'ADMIN_STOP_INFERENCE_DATA_PREPROCESS',
    ADMIN_STOP_TRAIN = 'ADMIN_STOP_TRAIN',
    SYSTEM_TRAIN_FAILED = 'SYSTEM_TRAIN_FAILED',
    SYSTEM_TRAIN_SUCCESS = 'SYSTEM_TRAIN_SUCCESS',
    SYSTEM_INFERENCE_DATA_PREPROCESSING = 'SYSTEM_INFERENCE_DATA_PREPROCESSING',
    SYSTEM_INFERENCE_DATA_PREPROCESS_FAILED = 'SYSTEM_INFERENCE_DATA_PREPROCESS_FAILED',
    SYSTEM_INFERENCE_DATA_PREPROCESS_SUCCESS = 'SYSTEM_INFERENCE_DATA_PREPROCESS_SUCCESS',
    SYSTEM_JOB_SUCCESS = 'SYSTEM_JOB_SUCCESS',
    ADMIN_MASK_UPLOADED = 'ADMIN_MASK_UPLOADED',
    ADMIN_UPDATE_VIDEO = 'ADMIN_UPDATE_VIDEO',
    ADMIN_UPDATE_ACTION_VIDEO = 'ADMIN_UPDATE_ACTION_VIDEO',
    ADMIN_RESET = 'ADMIN_RESET',
    ADMIN_ACCEPT = 'ADMIN_ACCEPT',
    USER_REPAIR = 'USER_REPAIR',
    SYSTEM_UPDATE_COVER = 'SYSTEM_UPDATE_COVER',
    ADMIN_SET_SILENCE_REPEAT_NUM = 'ADMIN_SET_SILENCE_REPEAT_NUM',
    SYSTEM_MARKABLE_VIDEO = 'SYSTEM_MARKABLE_VIDEO',
    SYSTEM_MASK_VERIFY_VIDEO = 'SYSTEM_MASK_VERIFY_VIDEO',
    SYSTEM_MASK_VERIFY_VIDEO_SUCCESS = 'SYSTEM_MASK_VERIFY_VIDEO_SUCCESS',
    SYSTEM_MASK_VERIFY_VIDEO_FAILED = 'SYSTEM_MASK_VERIFY_VIDEO_FAILED',
    SYSTEM_MARKABLE_VIDEO_SUCCESS = 'SYSTEM_MARKABLE_VIDEO_SUCCESS',
    SYSTEM_BEAUTY_PREPROCESSING = 'SYSTEM_BEAUTY_PREPROCESSING',
    SYSTEM_BEAUTY_PREPROCESS_FAILED = 'SYSTEM_BEAUTY_PREPROCESS_FAILED',
    ADMIN_CONFIRM_ACTION = 'ADMIN_CONFIRM_ACTION',
    ADMIN_STOP_ACTION_GENERATE_DATA_PREPROCESS = 'ADMIN_STOP_ACTION_GENERATE_DATA_PREPROCESS',
    ADMIN_STOP_ACTION_GENERATE_ORI_PREPROCESS = 'ADMIN_STOP_ACTION_GENERATE_ORI_PREPROCESS',
    SYSTEM_BEAUTY_PREPROCESS_SUCCESS = 'SYSTEM_BEAUTY_PREPROCESS_SUCCESS',
    SYSTEM_COMPILE_FAILED = 'SYSTEM_COMPILE_FAILED',
    SYSTEM_COMPILE_SUCCESS = 'SYSTEM_COMPILE_SUCCESS',
    SYSTEM_MARKABLE_VIDEO_FAILED = 'SYSTEM_MARKABLE_VIDEO_FAILED',
    ADMIN_UPDATE_COMPILE = 'ADMIN_UPDATE_COMPILE',
    ADMIN_UPDATE_INFERENCE_DATA_PROCESS_VIDEO = 'ADMIN_UPDATE_INFERENCE_DATA_PROCESS_VIDEO',
    SYSTEM_EXECUTE_COMPILE = 'SYSTEM_EXECUTE_COMPILE',
    SYSTEM_EXECUTE_BEAUTY = 'SYSTEM_EXECUTE_BEAUTY',
    SYSTEM_MASK_VIDEO_AND_ACTION_TIME_SUCCESS = 'SYSTEM_MASK_VIDEO_AND_ACTION_TIME_SUCCESS',
    SYSTEM_MASK_VIDEO_AND_ACTION_TIME_FAILED = 'SYSTEM_MASK_VIDEO_AND_ACTION_TIME_FAILED',
    USER_UPDATE_VIDEO = 'USER_UPDATE_VIDEO',
    ADMIN_UPDATE_GENERAL_CONFIG = 'ADMIN_UPDATE_GENERAL_CONFIG',
    ADMIN_MASK_ACTION_TIME = 'ADMIN_MASK_ACTION_TIME',
    STOP_COMPILE = 'STOP_COMPILE'
}
/**
    * @export
    * @enum {string}
    */
export enum OperationLogInfoOperateUserEnum {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SYSTEM = 'SYSTEM'
}
