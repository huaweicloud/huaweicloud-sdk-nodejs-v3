

export class TxnItem {
    private 'trx_id'?: string;
    private 'estimated_remaining_time'?: number;
    private 'trx_mysql_thread_id'?: number;
    private 'trx_query'?: string;
    private 'trx_started'?: string;
    private 'trx_rows_modified'?: number;
    public constructor(trxId?: string, estimatedRemainingTime?: number, trxMysqlThreadId?: number, trxQuery?: string, trxStarted?: string, trxRowsModified?: number) { 
        this['trx_id'] = trxId;
        this['estimated_remaining_time'] = estimatedRemainingTime;
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
        this['trx_query'] = trxQuery;
        this['trx_started'] = trxStarted;
        this['trx_rows_modified'] = trxRowsModified;
    }
    public withTrxId(trxId: string): TxnItem {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: string  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): string | undefined {
        return this['trx_id'];
    }
    public withEstimatedRemainingTime(estimatedRemainingTime: number): TxnItem {
        this['estimated_remaining_time'] = estimatedRemainingTime;
        return this;
    }
    public set estimatedRemainingTime(estimatedRemainingTime: number  | undefined) {
        this['estimated_remaining_time'] = estimatedRemainingTime;
    }
    public get estimatedRemainingTime(): number | undefined {
        return this['estimated_remaining_time'];
    }
    public withTrxMysqlThreadId(trxMysqlThreadId: number): TxnItem {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
        return this;
    }
    public set trxMysqlThreadId(trxMysqlThreadId: number  | undefined) {
        this['trx_mysql_thread_id'] = trxMysqlThreadId;
    }
    public get trxMysqlThreadId(): number | undefined {
        return this['trx_mysql_thread_id'];
    }
    public withTrxQuery(trxQuery: string): TxnItem {
        this['trx_query'] = trxQuery;
        return this;
    }
    public set trxQuery(trxQuery: string  | undefined) {
        this['trx_query'] = trxQuery;
    }
    public get trxQuery(): string | undefined {
        return this['trx_query'];
    }
    public withTrxStarted(trxStarted: string): TxnItem {
        this['trx_started'] = trxStarted;
        return this;
    }
    public set trxStarted(trxStarted: string  | undefined) {
        this['trx_started'] = trxStarted;
    }
    public get trxStarted(): string | undefined {
        return this['trx_started'];
    }
    public withTrxRowsModified(trxRowsModified: number): TxnItem {
        this['trx_rows_modified'] = trxRowsModified;
        return this;
    }
    public set trxRowsModified(trxRowsModified: number  | undefined) {
        this['trx_rows_modified'] = trxRowsModified;
    }
    public get trxRowsModified(): number | undefined {
        return this['trx_rows_modified'];
    }
}