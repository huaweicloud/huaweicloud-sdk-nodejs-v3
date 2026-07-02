

export class LockRootCause {
    private 'locked_pid'?: number;
    private 'locked_sql'?: string;
    private 'wait_seconds'?: number;
    private 'lock_db'?: string;
    private 'lock_table'?: string;
    private 'lock_index'?: string;
    private 'lock_mode'?: string;
    private 'lock_data'?: string;
    private 'blocker_pid'?: number;
    private 'blocker_state'?: string;
    private 'blocker_age'?: number;
    private 'blocker_rows_locked'?: number;
    private 'blocker_rows_modified'?: number;
    private 'blocker_current_sql'?: Array<string>;
    private 'blocker_host'?: string;
    private 'blocker_command'?: string;
    private 'blocker_thread_id'?: number;
    public constructor() { 
    }
    public withLockedPid(lockedPid: number): LockRootCause {
        this['locked_pid'] = lockedPid;
        return this;
    }
    public set lockedPid(lockedPid: number  | undefined) {
        this['locked_pid'] = lockedPid;
    }
    public get lockedPid(): number | undefined {
        return this['locked_pid'];
    }
    public withLockedSql(lockedSql: string): LockRootCause {
        this['locked_sql'] = lockedSql;
        return this;
    }
    public set lockedSql(lockedSql: string  | undefined) {
        this['locked_sql'] = lockedSql;
    }
    public get lockedSql(): string | undefined {
        return this['locked_sql'];
    }
    public withWaitSeconds(waitSeconds: number): LockRootCause {
        this['wait_seconds'] = waitSeconds;
        return this;
    }
    public set waitSeconds(waitSeconds: number  | undefined) {
        this['wait_seconds'] = waitSeconds;
    }
    public get waitSeconds(): number | undefined {
        return this['wait_seconds'];
    }
    public withLockDb(lockDb: string): LockRootCause {
        this['lock_db'] = lockDb;
        return this;
    }
    public set lockDb(lockDb: string  | undefined) {
        this['lock_db'] = lockDb;
    }
    public get lockDb(): string | undefined {
        return this['lock_db'];
    }
    public withLockTable(lockTable: string): LockRootCause {
        this['lock_table'] = lockTable;
        return this;
    }
    public set lockTable(lockTable: string  | undefined) {
        this['lock_table'] = lockTable;
    }
    public get lockTable(): string | undefined {
        return this['lock_table'];
    }
    public withLockIndex(lockIndex: string): LockRootCause {
        this['lock_index'] = lockIndex;
        return this;
    }
    public set lockIndex(lockIndex: string  | undefined) {
        this['lock_index'] = lockIndex;
    }
    public get lockIndex(): string | undefined {
        return this['lock_index'];
    }
    public withLockMode(lockMode: string): LockRootCause {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withLockData(lockData: string): LockRootCause {
        this['lock_data'] = lockData;
        return this;
    }
    public set lockData(lockData: string  | undefined) {
        this['lock_data'] = lockData;
    }
    public get lockData(): string | undefined {
        return this['lock_data'];
    }
    public withBlockerPid(blockerPid: number): LockRootCause {
        this['blocker_pid'] = blockerPid;
        return this;
    }
    public set blockerPid(blockerPid: number  | undefined) {
        this['blocker_pid'] = blockerPid;
    }
    public get blockerPid(): number | undefined {
        return this['blocker_pid'];
    }
    public withBlockerState(blockerState: string): LockRootCause {
        this['blocker_state'] = blockerState;
        return this;
    }
    public set blockerState(blockerState: string  | undefined) {
        this['blocker_state'] = blockerState;
    }
    public get blockerState(): string | undefined {
        return this['blocker_state'];
    }
    public withBlockerAge(blockerAge: number): LockRootCause {
        this['blocker_age'] = blockerAge;
        return this;
    }
    public set blockerAge(blockerAge: number  | undefined) {
        this['blocker_age'] = blockerAge;
    }
    public get blockerAge(): number | undefined {
        return this['blocker_age'];
    }
    public withBlockerRowsLocked(blockerRowsLocked: number): LockRootCause {
        this['blocker_rows_locked'] = blockerRowsLocked;
        return this;
    }
    public set blockerRowsLocked(blockerRowsLocked: number  | undefined) {
        this['blocker_rows_locked'] = blockerRowsLocked;
    }
    public get blockerRowsLocked(): number | undefined {
        return this['blocker_rows_locked'];
    }
    public withBlockerRowsModified(blockerRowsModified: number): LockRootCause {
        this['blocker_rows_modified'] = blockerRowsModified;
        return this;
    }
    public set blockerRowsModified(blockerRowsModified: number  | undefined) {
        this['blocker_rows_modified'] = blockerRowsModified;
    }
    public get blockerRowsModified(): number | undefined {
        return this['blocker_rows_modified'];
    }
    public withBlockerCurrentSql(blockerCurrentSql: Array<string>): LockRootCause {
        this['blocker_current_sql'] = blockerCurrentSql;
        return this;
    }
    public set blockerCurrentSql(blockerCurrentSql: Array<string>  | undefined) {
        this['blocker_current_sql'] = blockerCurrentSql;
    }
    public get blockerCurrentSql(): Array<string> | undefined {
        return this['blocker_current_sql'];
    }
    public withBlockerHost(blockerHost: string): LockRootCause {
        this['blocker_host'] = blockerHost;
        return this;
    }
    public set blockerHost(blockerHost: string  | undefined) {
        this['blocker_host'] = blockerHost;
    }
    public get blockerHost(): string | undefined {
        return this['blocker_host'];
    }
    public withBlockerCommand(blockerCommand: string): LockRootCause {
        this['blocker_command'] = blockerCommand;
        return this;
    }
    public set blockerCommand(blockerCommand: string  | undefined) {
        this['blocker_command'] = blockerCommand;
    }
    public get blockerCommand(): string | undefined {
        return this['blocker_command'];
    }
    public withBlockerThreadId(blockerThreadId: number): LockRootCause {
        this['blocker_thread_id'] = blockerThreadId;
        return this;
    }
    public set blockerThreadId(blockerThreadId: number  | undefined) {
        this['blocker_thread_id'] = blockerThreadId;
    }
    public get blockerThreadId(): number | undefined {
        return this['blocker_thread_id'];
    }
}