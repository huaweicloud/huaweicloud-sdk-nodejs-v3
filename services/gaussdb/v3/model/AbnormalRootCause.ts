import { LockRootCause } from './LockRootCause';


export class AbnormalRootCause {
    private 'abnormal_type'?: string;
    private 'lock_root_cause'?: LockRootCause;
    public constructor() { 
    }
    public withAbnormalType(abnormalType: string): AbnormalRootCause {
        this['abnormal_type'] = abnormalType;
        return this;
    }
    public set abnormalType(abnormalType: string  | undefined) {
        this['abnormal_type'] = abnormalType;
    }
    public get abnormalType(): string | undefined {
        return this['abnormal_type'];
    }
    public withLockRootCause(lockRootCause: LockRootCause): AbnormalRootCause {
        this['lock_root_cause'] = lockRootCause;
        return this;
    }
    public set lockRootCause(lockRootCause: LockRootCause  | undefined) {
        this['lock_root_cause'] = lockRootCause;
    }
    public get lockRootCause(): LockRootCause | undefined {
        return this['lock_root_cause'];
    }
}