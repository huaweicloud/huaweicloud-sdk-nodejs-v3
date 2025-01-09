
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkspaceLockResponse extends SdkResponse {
    private 'is_lock'?: number;
    private 'lock_time'?: string;
    private 'lock_reason'?: string;
    public constructor() { 
        super();
    }
    public withIsLock(isLock: number): ShowWorkspaceLockResponse {
        this['is_lock'] = isLock;
        return this;
    }
    public set isLock(isLock: number  | undefined) {
        this['is_lock'] = isLock;
    }
    public get isLock(): number | undefined {
        return this['is_lock'];
    }
    public withLockTime(lockTime: string): ShowWorkspaceLockResponse {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withLockReason(lockReason: string): ShowWorkspaceLockResponse {
        this['lock_reason'] = lockReason;
        return this;
    }
    public set lockReason(lockReason: string  | undefined) {
        this['lock_reason'] = lockReason;
    }
    public get lockReason(): string | undefined {
        return this['lock_reason'];
    }
}