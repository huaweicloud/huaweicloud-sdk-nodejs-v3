import { FullDeadLockListRespMysqlDeadlockMysqlTransactions } from './FullDeadLockListRespMysqlDeadlockMysqlTransactions';


export class FullDeadLockListRespMysqlDeadlock {
    public raw?: string;
    private 'happen_time'?: number;
    private 'rollback_trx_id'?: string;
    private 'mysql_transactions'?: Array<FullDeadLockListRespMysqlDeadlockMysqlTransactions>;
    public constructor() { 
    }
    public withRaw(raw: string): FullDeadLockListRespMysqlDeadlock {
        this['raw'] = raw;
        return this;
    }
    public withHappenTime(happenTime: number): FullDeadLockListRespMysqlDeadlock {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withRollbackTrxId(rollbackTrxId: string): FullDeadLockListRespMysqlDeadlock {
        this['rollback_trx_id'] = rollbackTrxId;
        return this;
    }
    public set rollbackTrxId(rollbackTrxId: string  | undefined) {
        this['rollback_trx_id'] = rollbackTrxId;
    }
    public get rollbackTrxId(): string | undefined {
        return this['rollback_trx_id'];
    }
    public withMysqlTransactions(mysqlTransactions: Array<FullDeadLockListRespMysqlDeadlockMysqlTransactions>): FullDeadLockListRespMysqlDeadlock {
        this['mysql_transactions'] = mysqlTransactions;
        return this;
    }
    public set mysqlTransactions(mysqlTransactions: Array<FullDeadLockListRespMysqlDeadlockMysqlTransactions>  | undefined) {
        this['mysql_transactions'] = mysqlTransactions;
    }
    public get mysqlTransactions(): Array<FullDeadLockListRespMysqlDeadlockMysqlTransactions> | undefined {
        return this['mysql_transactions'];
    }
}