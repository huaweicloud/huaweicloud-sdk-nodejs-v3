

export class InnodbTrxInfo {
    private 'trx_id'?: string;
    private 'trx_state'?: string;
    private 'trx_started'?: string;
    private 'trx_started_timestamp'?: number;
    private 'trx_requested_lock_id'?: string;
    private 'trx_wait_started'?: string;
    private 'trx_wait_started_timestamp'?: number;
    private 'trx_weight'?: string;
    private 'trx_mysql_thread_id'?: string;
    private 'trx_query'?: string;
    private 'trx_operation_state'?: string;
    private 'trx_tables_in_use'?: string;
    private 'trx_tables_locked'?: string;
    private 'trx_lock_structs'?: string;
    private 'trx_lock_memory_bytes'?: string;
    private 'trx_rows_locked'?: string;
    private 'trx_rows_modified'?: string;
    private 'trx_concurrency_tickets'?: string;
    private 'trx_isolation_level'?: string;
    public constructor() { 
    }
    public withTrxId(trxId: string): InnodbTrxInfo {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: string  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): string | undefined {
        return this['trx_id'];
    }
    public withTrxState(trxState: string): InnodbTrxInfo {
        this['trx_state'] = trxState;
        return this;
    }
    public set trxState(trxState: string  | undefined) {
        this['trx_state'] = trxState;
    }
    public get trxState(): string | undefined {
        return this['trx_state'];
    }
    public withTrxStarted(trxStarted: string): InnodbTrxInfo {
        this['trx_started'] = trxStarted;
        return this;
    }
    public set trxStarted(trxStarted: string  | undefined) {
        this['trx_started'] = trxStarted;
    }
    public get trxStarted(): string | undefined {
        return this['trx_started'];
    }
    public withTrxStartedTimestamp(trxStartedTimestamp: number): InnodbTrxInfo {
        this['trx_started_timestamp'] = trxStartedTimestamp;
        return this;
    }
    public set trxStartedTimestamp(trxStartedTimestamp: number  | undefined) {
        this['trx_started_timestamp'] = trxStartedTimestamp;
    }
    public get trxStartedTimestamp(): number | undefined {
        return this['trx_started_timestamp'];
    }
    public withTrxRequestedLockId(trxRequestedLockId: string): InnodbTrxInfo {
        this['trx_requested_lock_id'] = trxRequestedLockId;
        return this;
    }
    public set trxRequestedLockId(trxRequestedLockId: string  | undefined) {
        this['trx_requested_lock_id'] = trxRequestedLockId;
    }
    public get trxRequestedLockId(): string | undefined {
        return this['trx_requested_lock_id'];
    }
    public withTrxWaitStarted(trxWaitStarted: string): InnodbTrxInfo {
        this['trx_wait_started'] = trxWaitStarted;
        return this;
    }
    public set trxWaitStarted(trxWaitStarted: string  | undefined) {
        this['trx_wait_started'] = trxWaitStarted;
    }
    public get trxWaitStarted(): string | undefined {
        return this['trx_wait_started'];
    }
    public withTrxWaitStartedTimestamp(trxWaitStartedTimestamp: number): InnodbTrxInfo {
        this['trx_wait_started_timestamp'] = trxWaitStartedTimestamp;
        return this;
    }
    public set trxWaitStartedTimestamp(trxWaitStartedTimestamp: number  | undefined) {
        this['trx_wait_started_timestamp'] = trxWaitStartedTimestamp;
    }
    public get trxWaitStartedTimestamp(): number | undefined {
        return this['trx_wait_started_timestamp'];
    }
    public withTrxWeight(trxWeight: string): InnodbTrxInfo {
        this['trx_weight'] = trxWeight;
        return this;
    }
    public set trxWeight(trxWeight: string  | undefined) {
        this['trx_weight'] = trxWeight;
    }
    public get trxWeight(): string | undefined {
        return this['trx_weight'];
    }
    public withTrxMysqlThreadId(trxMysqlThreadId: string): InnodbTrxInfo {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
        return this;
    }
    public set trxMysqlThreadId(trxMysqlThreadId: string  | undefined) {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
    }
    public get trxMysqlThreadId(): string | undefined {
        return this['trx_mysql_thread_id'];
    }
    public withTrxQuery(trxQuery: string): InnodbTrxInfo {
        this['trx_query'] = trxQuery;
        return this;
    }
    public set trxQuery(trxQuery: string  | undefined) {
        this['trx_query'] = trxQuery;
    }
    public get trxQuery(): string | undefined {
        return this['trx_query'];
    }
    public withTrxOperationState(trxOperationState: string): InnodbTrxInfo {
        this['trx_operation_state'] = trxOperationState;
        return this;
    }
    public set trxOperationState(trxOperationState: string  | undefined) {
        this['trx_operation_state'] = trxOperationState;
    }
    public get trxOperationState(): string | undefined {
        return this['trx_operation_state'];
    }
    public withTrxTablesInUse(trxTablesInUse: string): InnodbTrxInfo {
        this['trx_tables_in_use'] = trxTablesInUse;
        return this;
    }
    public set trxTablesInUse(trxTablesInUse: string  | undefined) {
        this['trx_tables_in_use'] = trxTablesInUse;
    }
    public get trxTablesInUse(): string | undefined {
        return this['trx_tables_in_use'];
    }
    public withTrxTablesLocked(trxTablesLocked: string): InnodbTrxInfo {
        this['trx_tables_locked'] = trxTablesLocked;
        return this;
    }
    public set trxTablesLocked(trxTablesLocked: string  | undefined) {
        this['trx_tables_locked'] = trxTablesLocked;
    }
    public get trxTablesLocked(): string | undefined {
        return this['trx_tables_locked'];
    }
    public withTrxLockStructs(trxLockStructs: string): InnodbTrxInfo {
        this['trx_lock_structs'] = trxLockStructs;
        return this;
    }
    public set trxLockStructs(trxLockStructs: string  | undefined) {
        this['trx_lock_structs'] = trxLockStructs;
    }
    public get trxLockStructs(): string | undefined {
        return this['trx_lock_structs'];
    }
    public withTrxLockMemoryBytes(trxLockMemoryBytes: string): InnodbTrxInfo {
        this['trx_lock_memory_bytes'] = trxLockMemoryBytes;
        return this;
    }
    public set trxLockMemoryBytes(trxLockMemoryBytes: string  | undefined) {
        this['trx_lock_memory_bytes'] = trxLockMemoryBytes;
    }
    public get trxLockMemoryBytes(): string | undefined {
        return this['trx_lock_memory_bytes'];
    }
    public withTrxRowsLocked(trxRowsLocked: string): InnodbTrxInfo {
        this['trx_rows_locked'] = trxRowsLocked;
        return this;
    }
    public set trxRowsLocked(trxRowsLocked: string  | undefined) {
        this['trx_rows_locked'] = trxRowsLocked;
    }
    public get trxRowsLocked(): string | undefined {
        return this['trx_rows_locked'];
    }
    public withTrxRowsModified(trxRowsModified: string): InnodbTrxInfo {
        this['trx_rows_modified'] = trxRowsModified;
        return this;
    }
    public set trxRowsModified(trxRowsModified: string  | undefined) {
        this['trx_rows_modified'] = trxRowsModified;
    }
    public get trxRowsModified(): string | undefined {
        return this['trx_rows_modified'];
    }
    public withTrxConcurrencyTickets(trxConcurrencyTickets: string): InnodbTrxInfo {
        this['trx_concurrency_tickets'] = trxConcurrencyTickets;
        return this;
    }
    public set trxConcurrencyTickets(trxConcurrencyTickets: string  | undefined) {
        this['trx_concurrency_tickets'] = trxConcurrencyTickets;
    }
    public get trxConcurrencyTickets(): string | undefined {
        return this['trx_concurrency_tickets'];
    }
    public withTrxIsolationLevel(trxIsolationLevel: string): InnodbTrxInfo {
        this['trx_isolation_level'] = trxIsolationLevel;
        return this;
    }
    public set trxIsolationLevel(trxIsolationLevel: string  | undefined) {
        this['trx_isolation_level'] = trxIsolationLevel;
    }
    public get trxIsolationLevel(): string | undefined {
        return this['trx_isolation_level'];
    }
}