import { InstanceState } from './InstanceState';


export class ResourceMonitoringInfo {
    public id?: string;
    public name?: string;
    private 'instance_state'?: InstanceState;
    public type?: ResourceMonitoringInfoTypeEnum | string;
    public cpu?: string;
    public mem?: string;
    private 'engine_name'?: ResourceMonitoringInfoEngineNameEnum | string;
    private 'engine_version'?: string;
    private 'cpu_usage'?: number;
    private 'memory_usage'?: number;
    private 'disk_usage'?: number;
    public tps?: number;
    public qps?: number;
    public iops?: number;
    private 'active_connections'?: number;
    private 'slow_sql'?: number;
    private 'readonly_instance_resource_monitoring_info'?: Array<ResourceMonitoringInfo>;
    public constructor(id?: string, name?: string, instanceState?: InstanceState, type?: string, cpu?: string, mem?: string, engineName?: string, engineVersion?: string, cpuUsage?: number, memoryUsage?: number, diskUsage?: number, tps?: number, iops?: number, activeConnections?: number, readonlyInstanceResourceMonitoringInfo?: Array<ResourceMonitoringInfo>) { 
        this['id'] = id;
        this['name'] = name;
        this['instance_state'] = instanceState;
        this['type'] = type;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
        this['cpu_usage'] = cpuUsage;
        this['memory_usage'] = memoryUsage;
        this['disk_usage'] = diskUsage;
        this['tps'] = tps;
        this['iops'] = iops;
        this['active_connections'] = activeConnections;
        this['readonly_instance_resource_monitoring_info'] = readonlyInstanceResourceMonitoringInfo;
    }
    public withId(id: string): ResourceMonitoringInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourceMonitoringInfo {
        this['name'] = name;
        return this;
    }
    public withInstanceState(instanceState: InstanceState): ResourceMonitoringInfo {
        this['instance_state'] = instanceState;
        return this;
    }
    public set instanceState(instanceState: InstanceState  | undefined) {
        this['instance_state'] = instanceState;
    }
    public get instanceState(): InstanceState | undefined {
        return this['instance_state'];
    }
    public withType(type: ResourceMonitoringInfoTypeEnum | string): ResourceMonitoringInfo {
        this['type'] = type;
        return this;
    }
    public withCpu(cpu: string): ResourceMonitoringInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ResourceMonitoringInfo {
        this['mem'] = mem;
        return this;
    }
    public withEngineName(engineName: ResourceMonitoringInfoEngineNameEnum | string): ResourceMonitoringInfo {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: ResourceMonitoringInfoEngineNameEnum | string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): ResourceMonitoringInfoEngineNameEnum | string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): ResourceMonitoringInfo {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withCpuUsage(cpuUsage: number): ResourceMonitoringInfo {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withMemoryUsage(memoryUsage: number): ResourceMonitoringInfo {
        this['memory_usage'] = memoryUsage;
        return this;
    }
    public set memoryUsage(memoryUsage: number  | undefined) {
        this['memory_usage'] = memoryUsage;
    }
    public get memoryUsage(): number | undefined {
        return this['memory_usage'];
    }
    public withDiskUsage(diskUsage: number): ResourceMonitoringInfo {
        this['disk_usage'] = diskUsage;
        return this;
    }
    public set diskUsage(diskUsage: number  | undefined) {
        this['disk_usage'] = diskUsage;
    }
    public get diskUsage(): number | undefined {
        return this['disk_usage'];
    }
    public withTps(tps: number): ResourceMonitoringInfo {
        this['tps'] = tps;
        return this;
    }
    public withQps(qps: number): ResourceMonitoringInfo {
        this['qps'] = qps;
        return this;
    }
    public withIops(iops: number): ResourceMonitoringInfo {
        this['iops'] = iops;
        return this;
    }
    public withActiveConnections(activeConnections: number): ResourceMonitoringInfo {
        this['active_connections'] = activeConnections;
        return this;
    }
    public set activeConnections(activeConnections: number  | undefined) {
        this['active_connections'] = activeConnections;
    }
    public get activeConnections(): number | undefined {
        return this['active_connections'];
    }
    public withSlowSql(slowSql: number): ResourceMonitoringInfo {
        this['slow_sql'] = slowSql;
        return this;
    }
    public set slowSql(slowSql: number  | undefined) {
        this['slow_sql'] = slowSql;
    }
    public get slowSql(): number | undefined {
        return this['slow_sql'];
    }
    public withReadonlyInstanceResourceMonitoringInfo(readonlyInstanceResourceMonitoringInfo: Array<ResourceMonitoringInfo>): ResourceMonitoringInfo {
        this['readonly_instance_resource_monitoring_info'] = readonlyInstanceResourceMonitoringInfo;
        return this;
    }
    public set readonlyInstanceResourceMonitoringInfo(readonlyInstanceResourceMonitoringInfo: Array<ResourceMonitoringInfo>  | undefined) {
        this['readonly_instance_resource_monitoring_info'] = readonlyInstanceResourceMonitoringInfo;
    }
    public get readonlyInstanceResourceMonitoringInfo(): Array<ResourceMonitoringInfo> | undefined {
        return this['readonly_instance_resource_monitoring_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceMonitoringInfoTypeEnum {
    SINGLE = 'Single',
    HA = 'Ha',
    REPLICA = 'Replica',
    ENTERPRISE = 'Enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceMonitoringInfoEngineNameEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
