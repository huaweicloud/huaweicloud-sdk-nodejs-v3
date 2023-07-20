
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePasswordResponse extends SdkResponse {
    private 'lock_time'?: string;
    public result?: UpdatePasswordResponseResultEnum | string;
    private 'lock_time_left'?: string;
    private 'retry_times_left'?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withLockTime(lockTime: string): UpdatePasswordResponse {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withResult(result: UpdatePasswordResponseResultEnum | string): UpdatePasswordResponse {
        this['result'] = result;
        return this;
    }
    public withLockTimeLeft(lockTimeLeft: string): UpdatePasswordResponse {
        this['lock_time_left'] = lockTimeLeft;
        return this;
    }
    public set lockTimeLeft(lockTimeLeft: string  | undefined) {
        this['lock_time_left'] = lockTimeLeft;
    }
    public get lockTimeLeft(): string | undefined {
        return this['lock_time_left'];
    }
    public withRetryTimesLeft(retryTimesLeft: string): UpdatePasswordResponse {
        this['retry_times_left'] = retryTimesLeft;
        return this;
    }
    public set retryTimesLeft(retryTimesLeft: string  | undefined) {
        this['retry_times_left'] = retryTimesLeft;
    }
    public get retryTimesLeft(): string | undefined {
        return this['retry_times_left'];
    }
    public withMessage(message: string): UpdatePasswordResponse {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePasswordResponseResultEnum {
    SUCCESS = 'success',
    PASSWORDFAILED = 'passwordFailed',
    LOCKED = 'locked',
    FAILED = 'failed'
}
