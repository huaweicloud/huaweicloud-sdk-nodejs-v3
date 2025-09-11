import { InstancesNodesResult } from './InstancesNodesResult';


export class InstancesMetricResult {
    public id?: string;
    public name?: string;
    public status?: string;
    public mode?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    public solution?: string;
    private 'disk_used_size'?: string;
    private 'disk_total_size'?: string;
    private 'disk_usage'?: string;
    public p80?: string;
    public p95?: string;
    public deadlocks?: string;
    private 'buffer_hit_ratio'?: string;
    public nodes?: Array<InstancesNodesResult>;
    public constructor() { 
    }
    public withId(id: string): InstancesMetricResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstancesMetricResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): InstancesMetricResult {
        this['status'] = status;
        return this;
    }
    public withMode(mode: string): InstancesMetricResult {
        this['mode'] = mode;
        return this;
    }
    public withEngineName(engineName: string): InstancesMetricResult {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): InstancesMetricResult {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withSolution(solution: string): InstancesMetricResult {
        this['solution'] = solution;
        return this;
    }
    public withDiskUsedSize(diskUsedSize: string): InstancesMetricResult {
        this['disk_used_size'] = diskUsedSize;
        return this;
    }
    public set diskUsedSize(diskUsedSize: string  | undefined) {
        this['disk_used_size'] = diskUsedSize;
    }
    public get diskUsedSize(): string | undefined {
        return this['disk_used_size'];
    }
    public withDiskTotalSize(diskTotalSize: string): InstancesMetricResult {
        this['disk_total_size'] = diskTotalSize;
        return this;
    }
    public set diskTotalSize(diskTotalSize: string  | undefined) {
        this['disk_total_size'] = diskTotalSize;
    }
    public get diskTotalSize(): string | undefined {
        return this['disk_total_size'];
    }
    public withDiskUsage(diskUsage: string): InstancesMetricResult {
        this['disk_usage'] = diskUsage;
        return this;
    }
    public set diskUsage(diskUsage: string  | undefined) {
        this['disk_usage'] = diskUsage;
    }
    public get diskUsage(): string | undefined {
        return this['disk_usage'];
    }
    public withP80(p80: string): InstancesMetricResult {
        this['p80'] = p80;
        return this;
    }
    public withP95(p95: string): InstancesMetricResult {
        this['p95'] = p95;
        return this;
    }
    public withDeadlocks(deadlocks: string): InstancesMetricResult {
        this['deadlocks'] = deadlocks;
        return this;
    }
    public withBufferHitRatio(bufferHitRatio: string): InstancesMetricResult {
        this['buffer_hit_ratio'] = bufferHitRatio;
        return this;
    }
    public set bufferHitRatio(bufferHitRatio: string  | undefined) {
        this['buffer_hit_ratio'] = bufferHitRatio;
    }
    public get bufferHitRatio(): string | undefined {
        return this['buffer_hit_ratio'];
    }
    public withNodes(nodes: Array<InstancesNodesResult>): InstancesMetricResult {
        this['nodes'] = nodes;
        return this;
    }
}