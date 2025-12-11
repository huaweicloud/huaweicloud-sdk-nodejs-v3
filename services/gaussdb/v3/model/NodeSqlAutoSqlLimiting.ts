

export class NodeSqlAutoSqlLimiting {
    private 'node_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public condition?: string;
    private 'cpu_usage'?: number;
    private 'active_sessions'?: number;
    private 'clear_time'?: number;
    public duration?: number;
    private 'max_concurrency'?: number;
    public constructor() { 
    }
    public withNodeId(nodeId: string): NodeSqlAutoSqlLimiting {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: string): NodeSqlAutoSqlLimiting {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): NodeSqlAutoSqlLimiting {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCondition(condition: string): NodeSqlAutoSqlLimiting {
        this['condition'] = condition;
        return this;
    }
    public withCpuUsage(cpuUsage: number): NodeSqlAutoSqlLimiting {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withActiveSessions(activeSessions: number): NodeSqlAutoSqlLimiting {
        this['active_sessions'] = activeSessions;
        return this;
    }
    public set activeSessions(activeSessions: number  | undefined) {
        this['active_sessions'] = activeSessions;
    }
    public get activeSessions(): number | undefined {
        return this['active_sessions'];
    }
    public withClearTime(clearTime: number): NodeSqlAutoSqlLimiting {
        this['clear_time'] = clearTime;
        return this;
    }
    public set clearTime(clearTime: number  | undefined) {
        this['clear_time'] = clearTime;
    }
    public get clearTime(): number | undefined {
        return this['clear_time'];
    }
    public withDuration(duration: number): NodeSqlAutoSqlLimiting {
        this['duration'] = duration;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): NodeSqlAutoSqlLimiting {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
}