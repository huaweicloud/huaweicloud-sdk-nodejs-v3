
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetAclAccountPassWordResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'lock_time'?: string;
    private 'lock_time_left'?: string;
    private 'retry_times_left'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ResetAclAccountPassWordResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ResetAclAccountPassWordResponse {
        this['message'] = message;
        return this;
    }
    public withLockTime(lockTime: string): ResetAclAccountPassWordResponse {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withLockTimeLeft(lockTimeLeft: string): ResetAclAccountPassWordResponse {
        this['lock_time_left'] = lockTimeLeft;
        return this;
    }
    public set lockTimeLeft(lockTimeLeft: string  | undefined) {
        this['lock_time_left'] = lockTimeLeft;
    }
    public get lockTimeLeft(): string | undefined {
        return this['lock_time_left'];
    }
    public withRetryTimesLeft(retryTimesLeft: string): ResetAclAccountPassWordResponse {
        this['retry_times_left'] = retryTimesLeft;
        return this;
    }
    public set retryTimesLeft(retryTimesLeft: string  | undefined) {
        this['retry_times_left'] = retryTimesLeft;
    }
    public get retryTimesLeft(): string | undefined {
        return this['retry_times_left'];
    }
}