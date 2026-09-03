

export class ShowMetaLockSnapshotRequest {
    private 'connection_id'?: string;
    public id?: number;
    private 'thread_id'?: string;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'lock_status'?: string;
    private 'lock_type'?: string;
    public constructor(connectionId?: string, id?: number) { 
        this['connection_id'] = connectionId;
        this['id'] = id;
    }
    public withConnectionId(connectionId: string): ShowMetaLockSnapshotRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withId(id: number): ShowMetaLockSnapshotRequest {
        this['id'] = id;
        return this;
    }
    public withThreadId(threadId: string): ShowMetaLockSnapshotRequest {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withDbName(dbName: string): ShowMetaLockSnapshotRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ShowMetaLockSnapshotRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withLockStatus(lockStatus: string): ShowMetaLockSnapshotRequest {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withLockType(lockType: string): ShowMetaLockSnapshotRequest {
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