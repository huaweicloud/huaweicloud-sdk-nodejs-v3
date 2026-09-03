

export class DeadLockObject {
    private 'process_id'?: string;
    public spid?: string;
    private 'lock_mode'?: string;
    public constructor() { 
    }
    public withProcessId(processId: string): DeadLockObject {
        this['process_id'] = processId;
        return this;
    }
    public set processId(processId: string  | undefined) {
        this['process_id'] = processId;
    }
    public get processId(): string | undefined {
        return this['process_id'];
    }
    public withSpid(spid: string): DeadLockObject {
        this['spid'] = spid;
        return this;
    }
    public withLockMode(lockMode: string): DeadLockObject {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
}