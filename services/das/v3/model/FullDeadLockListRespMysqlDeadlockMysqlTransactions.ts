

export class FullDeadLockListRespMysqlDeadlockMysqlTransactions {
    public table?: string;
    public sql?: string;
    private 'session_id'?: string;
    private 'thread_id'?: string;
    private 'request_type'?: string;
    private 'transaction_id'?: string;
    private 'waiting_lock'?: string;
    private 'waiting_lock_index'?: string;
    private 'waiting_lock_type'?: string;
    public constructor() { 
    }
    public withTable(table: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['table'] = table;
        return this;
    }
    public withSql(sql: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['sql'] = sql;
        return this;
    }
    public withSessionId(sessionId: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withThreadId(threadId: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withRequestType(requestType: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['request_type'] = requestType;
        return this;
    }
    public set requestType(requestType: string  | undefined) {
        this['request_type'] = requestType;
    }
    public get requestType(): string | undefined {
        return this['request_type'];
    }
    public withTransactionId(transactionId: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withWaitingLock(waitingLock: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['waiting_lock'] = waitingLock;
        return this;
    }
    public set waitingLock(waitingLock: string  | undefined) {
        this['waiting_lock'] = waitingLock;
    }
    public get waitingLock(): string | undefined {
        return this['waiting_lock'];
    }
    public withWaitingLockIndex(waitingLockIndex: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['waiting_lock_index'] = waitingLockIndex;
        return this;
    }
    public set waitingLockIndex(waitingLockIndex: string  | undefined) {
        this['waiting_lock_index'] = waitingLockIndex;
    }
    public get waitingLockIndex(): string | undefined {
        return this['waiting_lock_index'];
    }
    public withWaitingLockType(waitingLockType: string): FullDeadLockListRespMysqlDeadlockMysqlTransactions {
        this['waiting_lock_type'] = waitingLockType;
        return this;
    }
    public set waitingLockType(waitingLockType: string  | undefined) {
        this['waiting_lock_type'] = waitingLockType;
    }
    public get waitingLockType(): string | undefined {
        return this['waiting_lock_type'];
    }
}