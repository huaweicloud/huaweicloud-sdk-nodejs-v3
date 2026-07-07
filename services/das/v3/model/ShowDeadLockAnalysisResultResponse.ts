import { ShowDeadLockAnalysisResultRespSqlList } from './ShowDeadLockAnalysisResultRespSqlList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeadLockAnalysisResultResponse extends SdkResponse {
    private 'dead_lock_id'?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'sql_insight_job_id'?: number;
    private 'transaction_id'?: string;
    public total?: number;
    private 'sql_list'?: Array<ShowDeadLockAnalysisResultRespSqlList>;
    private 'transaction_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDeadLockId(deadLockId: string): ShowDeadLockAnalysisResultResponse {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withJobId(jobId: string): ShowDeadLockAnalysisResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ShowDeadLockAnalysisResultResponse {
        this['status'] = status;
        return this;
    }
    public withSqlInsightJobId(sqlInsightJobId: number): ShowDeadLockAnalysisResultResponse {
        this['sql_insight_job_id'] = sqlInsightJobId;
        return this;
    }
    public set sqlInsightJobId(sqlInsightJobId: number  | undefined) {
        this['sql_insight_job_id'] = sqlInsightJobId;
    }
    public get sqlInsightJobId(): number | undefined {
        return this['sql_insight_job_id'];
    }
    public withTransactionId(transactionId: string): ShowDeadLockAnalysisResultResponse {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTotal(total: number): ShowDeadLockAnalysisResultResponse {
        this['total'] = total;
        return this;
    }
    public withSqlList(sqlList: Array<ShowDeadLockAnalysisResultRespSqlList>): ShowDeadLockAnalysisResultResponse {
        this['sql_list'] = sqlList;
        return this;
    }
    public set sqlList(sqlList: Array<ShowDeadLockAnalysisResultRespSqlList>  | undefined) {
        this['sql_list'] = sqlList;
    }
    public get sqlList(): Array<ShowDeadLockAnalysisResultRespSqlList> | undefined {
        return this['sql_list'];
    }
    public withTransactionIds(transactionIds: Array<string>): ShowDeadLockAnalysisResultResponse {
        this['transaction_ids'] = transactionIds;
        return this;
    }
    public set transactionIds(transactionIds: Array<string>  | undefined) {
        this['transaction_ids'] = transactionIds;
    }
    public get transactionIds(): Array<string> | undefined {
        return this['transaction_ids'];
    }
}