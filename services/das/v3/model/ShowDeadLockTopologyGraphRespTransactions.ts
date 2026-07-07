

export class ShowDeadLockTopologyGraphRespTransactions {
    private 'transaction_id'?: string;
    private 'thread_id'?: number;
    private 'rollback_target'?: boolean;
    public sql?: string;
    public table?: string;
    public operator?: string;
    private 'row_lock_count'?: number;
    private 'undo_log_entries'?: number;
    public constructor(transactionId?: string, threadId?: number, rollbackTarget?: boolean, sql?: string, table?: string, operator?: string, rowLockCount?: number, undoLogEntries?: number) { 
        this['transaction_id'] = transactionId;
        this['thread_id'] = threadId;
        this['rollback_target'] = rollbackTarget;
        this['sql'] = sql;
        this['table'] = table;
        this['operator'] = operator;
        this['row_lock_count'] = rowLockCount;
        this['undo_log_entries'] = undoLogEntries;
    }
    public withTransactionId(transactionId: string): ShowDeadLockTopologyGraphRespTransactions {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withThreadId(threadId: number): ShowDeadLockTopologyGraphRespTransactions {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: number  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): number | undefined {
        return this['thread_id'];
    }
    public withRollbackTarget(rollbackTarget: boolean): ShowDeadLockTopologyGraphRespTransactions {
        this['rollback_target'] = rollbackTarget;
        return this;
    }
    public set rollbackTarget(rollbackTarget: boolean  | undefined) {
        this['rollback_target'] = rollbackTarget;
    }
    public get rollbackTarget(): boolean | undefined {
        return this['rollback_target'];
    }
    public withSql(sql: string): ShowDeadLockTopologyGraphRespTransactions {
        this['sql'] = sql;
        return this;
    }
    public withTable(table: string): ShowDeadLockTopologyGraphRespTransactions {
        this['table'] = table;
        return this;
    }
    public withOperator(operator: string): ShowDeadLockTopologyGraphRespTransactions {
        this['operator'] = operator;
        return this;
    }
    public withRowLockCount(rowLockCount: number): ShowDeadLockTopologyGraphRespTransactions {
        this['row_lock_count'] = rowLockCount;
        return this;
    }
    public set rowLockCount(rowLockCount: number  | undefined) {
        this['row_lock_count'] = rowLockCount;
    }
    public get rowLockCount(): number | undefined {
        return this['row_lock_count'];
    }
    public withUndoLogEntries(undoLogEntries: number): ShowDeadLockTopologyGraphRespTransactions {
        this['undo_log_entries'] = undoLogEntries;
        return this;
    }
    public set undoLogEntries(undoLogEntries: number  | undefined) {
        this['undo_log_entries'] = undoLogEntries;
    }
    public get undoLogEntries(): number | undefined {
        return this['undo_log_entries'];
    }
}