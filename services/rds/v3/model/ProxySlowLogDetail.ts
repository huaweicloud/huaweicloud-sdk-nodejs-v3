

export class ProxySlowLogDetail {
    private 'source_ip'?: string;
    private 'desc_ip'?: string;
    public user?: string;
    private 'reaction_time'?: string;
    private 'trace_id'?: string;
    public sql?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'line_num'?: string;
    public database?: string;
    private 'log_time'?: string;
    public constructor() { 
    }
    public withSourceIp(sourceIp: string): ProxySlowLogDetail {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withDescIp(descIp: string): ProxySlowLogDetail {
        this['desc_ip'] = descIp;
        return this;
    }
    public set descIp(descIp: string  | undefined) {
        this['desc_ip'] = descIp;
    }
    public get descIp(): string | undefined {
        return this['desc_ip'];
    }
    public withUser(user: string): ProxySlowLogDetail {
        this['user'] = user;
        return this;
    }
    public withReactionTime(reactionTime: string): ProxySlowLogDetail {
        this['reaction_time'] = reactionTime;
        return this;
    }
    public set reactionTime(reactionTime: string  | undefined) {
        this['reaction_time'] = reactionTime;
    }
    public get reactionTime(): string | undefined {
        return this['reaction_time'];
    }
    public withTraceId(traceId: string): ProxySlowLogDetail {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSql(sql: string): ProxySlowLogDetail {
        this['sql'] = sql;
        return this;
    }
    public withStartTime(startTime: string): ProxySlowLogDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ProxySlowLogDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLineNum(lineNum: string): ProxySlowLogDetail {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withDatabase(database: string): ProxySlowLogDetail {
        this['database'] = database;
        return this;
    }
    public withLogTime(logTime: string): ProxySlowLogDetail {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
}