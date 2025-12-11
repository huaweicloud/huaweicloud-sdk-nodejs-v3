

export class AutoSqlLimitingRule {
    private 'node_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public condition?: string;
    private 'cpu_usage'?: number;
    private 'active_sessions'?: number;
    private 'clear_time'?: number;
    public duration?: number;
    private 'max_concurrency'?: number;
    private 'retain_sql_rule'?: boolean;
    public constructor(nodeId?: string, startTime?: string, endTime?: string, condition?: string, cpuUsage?: number, activeSessions?: number, clearTime?: number, duration?: number, maxConcurrency?: number, retainSqlRule?: boolean) { 
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['condition'] = condition;
        this['cpu_usage'] = cpuUsage;
        this['active_sessions'] = activeSessions;
        this['clear_time'] = clearTime;
        this['duration'] = duration;
        this['max_concurrency'] = maxConcurrency;
        this['retain_sql_rule'] = retainSqlRule;
    }
    public withNodeId(nodeId: string): AutoSqlLimitingRule {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: string): AutoSqlLimitingRule {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AutoSqlLimitingRule {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCondition(condition: string): AutoSqlLimitingRule {
        this['condition'] = condition;
        return this;
    }
    public withCpuUsage(cpuUsage: number): AutoSqlLimitingRule {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withActiveSessions(activeSessions: number): AutoSqlLimitingRule {
        this['active_sessions'] = activeSessions;
        return this;
    }
    public set activeSessions(activeSessions: number  | undefined) {
        this['active_sessions'] = activeSessions;
    }
    public get activeSessions(): number | undefined {
        return this['active_sessions'];
    }
    public withClearTime(clearTime: number): AutoSqlLimitingRule {
        this['clear_time'] = clearTime;
        return this;
    }
    public set clearTime(clearTime: number  | undefined) {
        this['clear_time'] = clearTime;
    }
    public get clearTime(): number | undefined {
        return this['clear_time'];
    }
    public withDuration(duration: number): AutoSqlLimitingRule {
        this['duration'] = duration;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): AutoSqlLimitingRule {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withRetainSqlRule(retainSqlRule: boolean): AutoSqlLimitingRule {
        this['retain_sql_rule'] = retainSqlRule;
        return this;
    }
    public set retainSqlRule(retainSqlRule: boolean  | undefined) {
        this['retain_sql_rule'] = retainSqlRule;
    }
    public get retainSqlRule(): boolean | undefined {
        return this['retain_sql_rule'];
    }
}