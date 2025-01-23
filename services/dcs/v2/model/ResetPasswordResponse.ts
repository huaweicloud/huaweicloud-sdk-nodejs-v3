
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetPasswordResponse extends SdkResponse {
    private 'retry_times_left'?: string;
    private 'lock_time'?: string;
    private 'lock_time_left'?: string;
    public code?: string;
    public message?: string;
    private 'ext_message'?: string;
    public constructor() { 
        super();
    }
    public withRetryTimesLeft(retryTimesLeft: string): ResetPasswordResponse {
        this['retry_times_left'] = retryTimesLeft;
        return this;
    }
    public set retryTimesLeft(retryTimesLeft: string  | undefined) {
        this['retry_times_left'] = retryTimesLeft;
    }
    public get retryTimesLeft(): string | undefined {
        return this['retry_times_left'];
    }
    public withLockTime(lockTime: string): ResetPasswordResponse {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withLockTimeLeft(lockTimeLeft: string): ResetPasswordResponse {
        this['lock_time_left'] = lockTimeLeft;
        return this;
    }
    public set lockTimeLeft(lockTimeLeft: string  | undefined) {
        this['lock_time_left'] = lockTimeLeft;
    }
    public get lockTimeLeft(): string | undefined {
        return this['lock_time_left'];
    }
    public withCode(code: string): ResetPasswordResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ResetPasswordResponse {
        this['message'] = message;
        return this;
    }
    public withExtMessage(extMessage: string): ResetPasswordResponse {
        this['ext_message'] = extMessage;
        return this;
    }
    public set extMessage(extMessage: string  | undefined) {
        this['ext_message'] = extMessage;
    }
    public get extMessage(): string | undefined {
        return this['ext_message'];
    }
}