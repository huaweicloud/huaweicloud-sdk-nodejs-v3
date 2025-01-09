

export class UserAccessStage {
    public stage?: UserAccessStageStageEnum | string;
    public duration?: number;
    private 'is_success'?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withStage(stage: UserAccessStageStageEnum | string): UserAccessStage {
        this['stage'] = stage;
        return this;
    }
    public withDuration(duration: number): UserAccessStage {
        this['duration'] = duration;
        return this;
    }
    public withIsSuccess(isSuccess: boolean): UserAccessStage {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withStartTime(startTime: number): UserAccessStage {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): UserAccessStage {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): UserAccessStage {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UserAccessStage {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserAccessStageStageEnum {
    LOGIN = 'LOGIN',
    PRECONNECT = 'PRECONNECT',
    CONNECT = 'CONNECT'
}
