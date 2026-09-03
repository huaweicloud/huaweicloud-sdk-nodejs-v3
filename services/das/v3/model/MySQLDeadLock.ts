import { MySQLTransaction } from './MySQLTransaction';


export class MySQLDeadLock {
    public raw?: string;
    private 'happen_time'?: number;
    private 'rollback_trx_id'?: string;
    private 'mysql_transactions'?: Array<MySQLTransaction>;
    public constructor() { 
    }
    public withRaw(raw: string): MySQLDeadLock {
        this['raw'] = raw;
        return this;
    }
    public withHappenTime(happenTime: number): MySQLDeadLock {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withRollbackTrxId(rollbackTrxId: string): MySQLDeadLock {
        this['rollback_trx_id'] = rollbackTrxId;
        return this;
    }
    public set rollbackTrxId(rollbackTrxId: string  | undefined) {
        this['rollback_trx_id'] = rollbackTrxId;
    }
    public get rollbackTrxId(): string | undefined {
        return this['rollback_trx_id'];
    }
    public withMysqlTransactions(mysqlTransactions: Array<MySQLTransaction>): MySQLDeadLock {
        this['mysql_transactions'] = mysqlTransactions;
        return this;
    }
    public set mysqlTransactions(mysqlTransactions: Array<MySQLTransaction>  | undefined) {
        this['mysql_transactions'] = mysqlTransactions;
    }
    public get mysqlTransactions(): Array<MySQLTransaction> | undefined {
        return this['mysql_transactions'];
    }
}