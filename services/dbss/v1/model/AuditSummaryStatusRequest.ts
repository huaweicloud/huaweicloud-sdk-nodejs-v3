

export class AuditSummaryStatusRequest {
    public code?: string;
    private 'oper_type'?: string;
    private 'query_begin_time'?: number;
    private 'query_end_time'?: number;
    public constructor(operType?: string) { 
        this['oper_type'] = operType;
    }
    public withCode(code: string): AuditSummaryStatusRequest {
        this['code'] = code;
        return this;
    }
    public withOperType(operType: string): AuditSummaryStatusRequest {
        this['oper_type'] = operType;
        return this;
    }
    public set operType(operType: string  | undefined) {
        this['oper_type'] = operType;
    }
    public get operType(): string | undefined {
        return this['oper_type'];
    }
    public withQueryBeginTime(queryBeginTime: number): AuditSummaryStatusRequest {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: number  | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime(): number | undefined {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: number): AuditSummaryStatusRequest {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: number  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): number | undefined {
        return this['query_end_time'];
    }
}