

export class LogicalClusterTaskInfo {
    public type?: string;
    private 'logical_cluster_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public result?: string;
    public log?: string;
    public constructor() { 
    }
    public withType(type: string): LogicalClusterTaskInfo {
        this['type'] = type;
        return this;
    }
    public withLogicalClusterName(logicalClusterName: string): LogicalClusterTaskInfo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withStartTime(startTime: string): LogicalClusterTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LogicalClusterTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResult(result: string): LogicalClusterTaskInfo {
        this['result'] = result;
        return this;
    }
    public withLog(log: string): LogicalClusterTaskInfo {
        this['log'] = log;
        return this;
    }
}