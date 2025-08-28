import { InnodbLock } from './InnodbLock';


export class InnodbTrx {
    private 'trx_id'?: string;
    private 'trx_state'?: string;
    private 'trx_started'?: string;
    private 'trx_wait_started'?: string;
    private 'trx_mysql_thread_id'?: string;
    private 'trx_query'?: string;
    private 'trx_tables_locked'?: string;
    private 'trx_rows_locked'?: string;
    private 'trx_rows_modified'?: string;
    private 'trx_isolation_level'?: string;
    private 'innodb_wait_locks'?: Array<InnodbLock>;
    private 'innodb_hold_locks'?: Array<InnodbLock>;
    public constructor(trxId?: string, trxState?: string, trxStarted?: string, trxWaitStarted?: string, trxMysqlThreadId?: string, trxQuery?: string, trxTablesLocked?: string, trxRowsLocked?: string, trxRowsModified?: string, trxIsolationLevel?: string, innodbWaitLocks?: Array<InnodbLock>, innodbHoldLocks?: Array<InnodbLock>) { 
        this['trx_id'] = trxId;
        this['trx_state'] = trxState;
        this['trx_started'] = trxStarted;
        this['trx_wait_started'] = trxWaitStarted;
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
        this['trx_query'] = trxQuery;
        this['trx_tables_locked'] = trxTablesLocked;
        this['trx_rows_locked'] = trxRowsLocked;
        this['trx_rows_modified'] = trxRowsModified;
        this['trx_isolation_level'] = trxIsolationLevel;
        this['innodb_wait_locks'] = innodbWaitLocks;
        this['innodb_hold_locks'] = innodbHoldLocks;
    }
    public withTrxId(trxId: string): InnodbTrx {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: string  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): string | undefined {
        return this['trx_id'];
    }
    public withTrxState(trxState: string): InnodbTrx {
        this['trx_state'] = trxState;
        return this;
    }
    public set trxState(trxState: string  | undefined) {
        this['trx_state'] = trxState;
    }
    public get trxState(): string | undefined {
        return this['trx_state'];
    }
    public withTrxStarted(trxStarted: string): InnodbTrx {
        this['trx_started'] = trxStarted;
        return this;
    }
    public set trxStarted(trxStarted: string  | undefined) {
        this['trx_started'] = trxStarted;
    }
    public get trxStarted(): string | undefined {
        return this['trx_started'];
    }
    public withTrxWaitStarted(trxWaitStarted: string): InnodbTrx {
        this['trx_wait_started'] = trxWaitStarted;
        return this;
    }
    public set trxWaitStarted(trxWaitStarted: string  | undefined) {
        this['trx_wait_started'] = trxWaitStarted;
    }
    public get trxWaitStarted(): string | undefined {
        return this['trx_wait_started'];
    }
    public withTrxMysqlThreadId(trxMysqlThreadId: string): InnodbTrx {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
        return this;
    }
    public set trxMysqlThreadId(trxMysqlThreadId: string  | undefined) {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
    }
    public get trxMysqlThreadId(): string | undefined {
        return this['trx_mysql_thread_id'];
    }
    public withTrxQuery(trxQuery: string): InnodbTrx {
        this['trx_query'] = trxQuery;
        return this;
    }
    public set trxQuery(trxQuery: string  | undefined) {
        this['trx_query'] = trxQuery;
    }
    public get trxQuery(): string | undefined {
        return this['trx_query'];
    }
    public withTrxTablesLocked(trxTablesLocked: string): InnodbTrx {
        this['trx_tables_locked'] = trxTablesLocked;
        return this;
    }
    public set trxTablesLocked(trxTablesLocked: string  | undefined) {
        this['trx_tables_locked'] = trxTablesLocked;
    }
    public get trxTablesLocked(): string | undefined {
        return this['trx_tables_locked'];
    }
    public withTrxRowsLocked(trxRowsLocked: string): InnodbTrx {
        this['trx_rows_locked'] = trxRowsLocked;
        return this;
    }
    public set trxRowsLocked(trxRowsLocked: string  | undefined) {
        this['trx_rows_locked'] = trxRowsLocked;
    }
    public get trxRowsLocked(): string | undefined {
        return this['trx_rows_locked'];
    }
    public withTrxRowsModified(trxRowsModified: string): InnodbTrx {
        this['trx_rows_modified'] = trxRowsModified;
        return this;
    }
    public set trxRowsModified(trxRowsModified: string  | undefined) {
        this['trx_rows_modified'] = trxRowsModified;
    }
    public get trxRowsModified(): string | undefined {
        return this['trx_rows_modified'];
    }
    public withTrxIsolationLevel(trxIsolationLevel: string): InnodbTrx {
        this['trx_isolation_level'] = trxIsolationLevel;
        return this;
    }
    public set trxIsolationLevel(trxIsolationLevel: string  | undefined) {
        this['trx_isolation_level'] = trxIsolationLevel;
    }
    public get trxIsolationLevel(): string | undefined {
        return this['trx_isolation_level'];
    }
    public withInnodbWaitLocks(innodbWaitLocks: Array<InnodbLock>): InnodbTrx {
        this['innodb_wait_locks'] = innodbWaitLocks;
        return this;
    }
    public set innodbWaitLocks(innodbWaitLocks: Array<InnodbLock>  | undefined) {
        this['innodb_wait_locks'] = innodbWaitLocks;
    }
    public get innodbWaitLocks(): Array<InnodbLock> | undefined {
        return this['innodb_wait_locks'];
    }
    public withInnodbHoldLocks(innodbHoldLocks: Array<InnodbLock>): InnodbTrx {
        this['innodb_hold_locks'] = innodbHoldLocks;
        return this;
    }
    public set innodbHoldLocks(innodbHoldLocks: Array<InnodbLock>  | undefined) {
        this['innodb_hold_locks'] = innodbHoldLocks;
    }
    public get innodbHoldLocks(): Array<InnodbLock> | undefined {
        return this['innodb_hold_locks'];
    }
}