

export class ShowMetaLockRequest {
    private 'connection_id'?: string;
    private 'thread_id'?: string;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'lock_status'?: string;
    private 'lock_type'?: string;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowMetaLockRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withThreadId(threadId: string): ShowMetaLockRequest {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withDbName(dbName: string): ShowMetaLockRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ShowMetaLockRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withLockStatus(lockStatus: string): ShowMetaLockRequest {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withLockType(lockType: string): ShowMetaLockRequest {
        this['lock_type'] = lockType;
        return this;
    }
    public set lockType(lockType: string  | undefined) {
        this['lock_type'] = lockType;
    }
    public get lockType(): string | undefined {
        return this['lock_type'];
    }
}