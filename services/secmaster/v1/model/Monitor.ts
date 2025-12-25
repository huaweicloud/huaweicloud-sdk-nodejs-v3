import { NodeHealthStatus } from './NodeHealthStatus';


export class Monitor {
    private 'cpu_idle'?: string;
    private 'cpu_usage'?: string;
    private 'disk_count'?: string;
    private 'disk_usage'?: string;
    private 'down_pps'?: string;
    private 'health_status'?: NodeHealthStatus;
    private 'heart_beat'?: MonitorHeartBeatEnum | string;
    private 'heart_beat_time'?: number;
    private 'memory_cache'?: string;
    private 'memory_count'?: string;
    private 'memory_free'?: string;
    private 'memory_shared'?: string;
    private 'memory_usage'?: string;
    private 'mini_on_online'?: string;
    private 'read_rate'?: string;
    private 'up_pps'?: string;
    private 'write_rate'?: string;
    public constructor() { 
    }
    public withCpuIdle(cpuIdle: string): Monitor {
        this['cpu_idle'] = cpuIdle;
        return this;
    }
    public set cpuIdle(cpuIdle: string  | undefined) {
        this['cpu_idle'] = cpuIdle;
    }
    public get cpuIdle(): string | undefined {
        return this['cpu_idle'];
    }
    public withCpuUsage(cpuUsage: string): Monitor {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: string  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): string | undefined {
        return this['cpu_usage'];
    }
    public withDiskCount(diskCount: string): Monitor {
        this['disk_count'] = diskCount;
        return this;
    }
    public set diskCount(diskCount: string  | undefined) {
        this['disk_count'] = diskCount;
    }
    public get diskCount(): string | undefined {
        return this['disk_count'];
    }
    public withDiskUsage(diskUsage: string): Monitor {
        this['disk_usage'] = diskUsage;
        return this;
    }
    public set diskUsage(diskUsage: string  | undefined) {
        this['disk_usage'] = diskUsage;
    }
    public get diskUsage(): string | undefined {
        return this['disk_usage'];
    }
    public withDownPps(downPps: string): Monitor {
        this['down_pps'] = downPps;
        return this;
    }
    public set downPps(downPps: string  | undefined) {
        this['down_pps'] = downPps;
    }
    public get downPps(): string | undefined {
        return this['down_pps'];
    }
    public withHealthStatus(healthStatus: NodeHealthStatus): Monitor {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: NodeHealthStatus  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): NodeHealthStatus | undefined {
        return this['health_status'];
    }
    public withHeartBeat(heartBeat: MonitorHeartBeatEnum | string): Monitor {
        this['heart_beat'] = heartBeat;
        return this;
    }
    public set heartBeat(heartBeat: MonitorHeartBeatEnum | string  | undefined) {
        this['heart_beat'] = heartBeat;
    }
    public get heartBeat(): MonitorHeartBeatEnum | string | undefined {
        return this['heart_beat'];
    }
    public withHeartBeatTime(heartBeatTime: number): Monitor {
        this['heart_beat_time'] = heartBeatTime;
        return this;
    }
    public set heartBeatTime(heartBeatTime: number  | undefined) {
        this['heart_beat_time'] = heartBeatTime;
    }
    public get heartBeatTime(): number | undefined {
        return this['heart_beat_time'];
    }
    public withMemoryCache(memoryCache: string): Monitor {
        this['memory_cache'] = memoryCache;
        return this;
    }
    public set memoryCache(memoryCache: string  | undefined) {
        this['memory_cache'] = memoryCache;
    }
    public get memoryCache(): string | undefined {
        return this['memory_cache'];
    }
    public withMemoryCount(memoryCount: string): Monitor {
        this['memory_count'] = memoryCount;
        return this;
    }
    public set memoryCount(memoryCount: string  | undefined) {
        this['memory_count'] = memoryCount;
    }
    public get memoryCount(): string | undefined {
        return this['memory_count'];
    }
    public withMemoryFree(memoryFree: string): Monitor {
        this['memory_free'] = memoryFree;
        return this;
    }
    public set memoryFree(memoryFree: string  | undefined) {
        this['memory_free'] = memoryFree;
    }
    public get memoryFree(): string | undefined {
        return this['memory_free'];
    }
    public withMemoryShared(memoryShared: string): Monitor {
        this['memory_shared'] = memoryShared;
        return this;
    }
    public set memoryShared(memoryShared: string  | undefined) {
        this['memory_shared'] = memoryShared;
    }
    public get memoryShared(): string | undefined {
        return this['memory_shared'];
    }
    public withMemoryUsage(memoryUsage: string): Monitor {
        this['memory_usage'] = memoryUsage;
        return this;
    }
    public set memoryUsage(memoryUsage: string  | undefined) {
        this['memory_usage'] = memoryUsage;
    }
    public get memoryUsage(): string | undefined {
        return this['memory_usage'];
    }
    public withMiniOnOnline(miniOnOnline: string): Monitor {
        this['mini_on_online'] = miniOnOnline;
        return this;
    }
    public set miniOnOnline(miniOnOnline: string  | undefined) {
        this['mini_on_online'] = miniOnOnline;
    }
    public get miniOnOnline(): string | undefined {
        return this['mini_on_online'];
    }
    public withReadRate(readRate: string): Monitor {
        this['read_rate'] = readRate;
        return this;
    }
    public set readRate(readRate: string  | undefined) {
        this['read_rate'] = readRate;
    }
    public get readRate(): string | undefined {
        return this['read_rate'];
    }
    public withUpPps(upPps: string): Monitor {
        this['up_pps'] = upPps;
        return this;
    }
    public set upPps(upPps: string  | undefined) {
        this['up_pps'] = upPps;
    }
    public get upPps(): string | undefined {
        return this['up_pps'];
    }
    public withWriteRate(writeRate: string): Monitor {
        this['write_rate'] = writeRate;
        return this;
    }
    public set writeRate(writeRate: string  | undefined) {
        this['write_rate'] = writeRate;
    }
    public get writeRate(): string | undefined {
        return this['write_rate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MonitorHeartBeatEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}
