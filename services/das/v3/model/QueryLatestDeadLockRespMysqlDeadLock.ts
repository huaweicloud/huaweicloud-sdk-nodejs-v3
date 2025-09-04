import { QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions } from './QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions';


export class QueryLatestDeadLockRespMysqlDeadLock {
    public raw?: string;
    public time?: string;
    private 'happen_time'?: number;
    private 'rollback_trx_id'?: string;
    private 'mysql_transactions'?: Array<QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions>;
    public constructor() { 
    }
    public withRaw(raw: string): QueryLatestDeadLockRespMysqlDeadLock {
        this['raw'] = raw;
        return this;
    }
    public withTime(time: string): QueryLatestDeadLockRespMysqlDeadLock {
        this['time'] = time;
        return this;
    }
    public withHappenTime(happenTime: number): QueryLatestDeadLockRespMysqlDeadLock {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withRollbackTrxId(rollbackTrxId: string): QueryLatestDeadLockRespMysqlDeadLock {
        this['rollback_trx_id'] = rollbackTrxId;
        return this;
    }
    public set rollbackTrxId(rollbackTrxId: string  | undefined) {
        this['rollback_trx_id'] = rollbackTrxId;
    }
    public get rollbackTrxId(): string | undefined {
        return this['rollback_trx_id'];
    }
    public withMysqlTransactions(mysqlTransactions: Array<QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions>): QueryLatestDeadLockRespMysqlDeadLock {
        this['mysql_transactions'] = mysqlTransactions;
        return this;
    }
    public set mysqlTransactions(mysqlTransactions: Array<QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions>  | undefined) {
        this['mysql_transactions'] = mysqlTransactions;
    }
    public get mysqlTransactions(): Array<QueryLatestDeadLockRespMysqlDeadLockMysqlTransactions> | undefined {
        return this['mysql_transactions'];
    }
}