

export class HostOverviewResponse {
    private 'instance_name'?: string;
    private 'host_name'?: string;
    private 'host_stat'?: string;
    private 'work_ip'?: string;
    private 'mem_free'?: number;
    private 'mem_total'?: number;
    private 'mem_usage'?: number;
    private 'mem_cached'?: number;
    private 'mem_buffer'?: number;
    private 'swap_free'?: number;
    private 'swap_total'?: number;
    private 'cpu_usage'?: number;
    private 'cpu_usage_sys'?: number;
    private 'cpu_usage_usr'?: number;
    private 'cpu_idle'?: number;
    private 'cpu_iowait'?: number;
    private 'disk_usage_avg'?: number;
    private 'disk_total'?: number;
    private 'disk_used'?: number;
    private 'disk_available'?: number;
    private 'disk_io'?: number;
    private 'disk_io_read'?: number;
    private 'disk_io_write'?: number;
    private 'tcp_resend_rate'?: number;
    private 'net_io'?: number;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): HostOverviewResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withHostName(hostName: string): HostOverviewResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostStat(hostStat: string): HostOverviewResponse {
        this['host_stat'] = hostStat;
        return this;
    }
    public set hostStat(hostStat: string  | undefined) {
        this['host_stat'] = hostStat;
    }
    public get hostStat(): string | undefined {
        return this['host_stat'];
    }
    public withWorkIp(workIp: string): HostOverviewResponse {
        this['work_ip'] = workIp;
        return this;
    }
    public set workIp(workIp: string  | undefined) {
        this['work_ip'] = workIp;
    }
    public get workIp(): string | undefined {
        return this['work_ip'];
    }
    public withMemFree(memFree: number): HostOverviewResponse {
        this['mem_free'] = memFree;
        return this;
    }
    public set memFree(memFree: number  | undefined) {
        this['mem_free'] = memFree;
    }
    public get memFree(): number | undefined {
        return this['mem_free'];
    }
    public withMemTotal(memTotal: number): HostOverviewResponse {
        this['mem_total'] = memTotal;
        return this;
    }
    public set memTotal(memTotal: number  | undefined) {
        this['mem_total'] = memTotal;
    }
    public get memTotal(): number | undefined {
        return this['mem_total'];
    }
    public withMemUsage(memUsage: number): HostOverviewResponse {
        this['mem_usage'] = memUsage;
        return this;
    }
    public set memUsage(memUsage: number  | undefined) {
        this['mem_usage'] = memUsage;
    }
    public get memUsage(): number | undefined {
        return this['mem_usage'];
    }
    public withMemCached(memCached: number): HostOverviewResponse {
        this['mem_cached'] = memCached;
        return this;
    }
    public set memCached(memCached: number  | undefined) {
        this['mem_cached'] = memCached;
    }
    public get memCached(): number | undefined {
        return this['mem_cached'];
    }
    public withMemBuffer(memBuffer: number): HostOverviewResponse {
        this['mem_buffer'] = memBuffer;
        return this;
    }
    public set memBuffer(memBuffer: number  | undefined) {
        this['mem_buffer'] = memBuffer;
    }
    public get memBuffer(): number | undefined {
        return this['mem_buffer'];
    }
    public withSwapFree(swapFree: number): HostOverviewResponse {
        this['swap_free'] = swapFree;
        return this;
    }
    public set swapFree(swapFree: number  | undefined) {
        this['swap_free'] = swapFree;
    }
    public get swapFree(): number | undefined {
        return this['swap_free'];
    }
    public withSwapTotal(swapTotal: number): HostOverviewResponse {
        this['swap_total'] = swapTotal;
        return this;
    }
    public set swapTotal(swapTotal: number  | undefined) {
        this['swap_total'] = swapTotal;
    }
    public get swapTotal(): number | undefined {
        return this['swap_total'];
    }
    public withCpuUsage(cpuUsage: number): HostOverviewResponse {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withCpuUsageSys(cpuUsageSys: number): HostOverviewResponse {
        this['cpu_usage_sys'] = cpuUsageSys;
        return this;
    }
    public set cpuUsageSys(cpuUsageSys: number  | undefined) {
        this['cpu_usage_sys'] = cpuUsageSys;
    }
    public get cpuUsageSys(): number | undefined {
        return this['cpu_usage_sys'];
    }
    public withCpuUsageUsr(cpuUsageUsr: number): HostOverviewResponse {
        this['cpu_usage_usr'] = cpuUsageUsr;
        return this;
    }
    public set cpuUsageUsr(cpuUsageUsr: number  | undefined) {
        this['cpu_usage_usr'] = cpuUsageUsr;
    }
    public get cpuUsageUsr(): number | undefined {
        return this['cpu_usage_usr'];
    }
    public withCpuIdle(cpuIdle: number): HostOverviewResponse {
        this['cpu_idle'] = cpuIdle;
        return this;
    }
    public set cpuIdle(cpuIdle: number  | undefined) {
        this['cpu_idle'] = cpuIdle;
    }
    public get cpuIdle(): number | undefined {
        return this['cpu_idle'];
    }
    public withCpuIowait(cpuIowait: number): HostOverviewResponse {
        this['cpu_iowait'] = cpuIowait;
        return this;
    }
    public set cpuIowait(cpuIowait: number  | undefined) {
        this['cpu_iowait'] = cpuIowait;
    }
    public get cpuIowait(): number | undefined {
        return this['cpu_iowait'];
    }
    public withDiskUsageAvg(diskUsageAvg: number): HostOverviewResponse {
        this['disk_usage_avg'] = diskUsageAvg;
        return this;
    }
    public set diskUsageAvg(diskUsageAvg: number  | undefined) {
        this['disk_usage_avg'] = diskUsageAvg;
    }
    public get diskUsageAvg(): number | undefined {
        return this['disk_usage_avg'];
    }
    public withDiskTotal(diskTotal: number): HostOverviewResponse {
        this['disk_total'] = diskTotal;
        return this;
    }
    public set diskTotal(diskTotal: number  | undefined) {
        this['disk_total'] = diskTotal;
    }
    public get diskTotal(): number | undefined {
        return this['disk_total'];
    }
    public withDiskUsed(diskUsed: number): HostOverviewResponse {
        this['disk_used'] = diskUsed;
        return this;
    }
    public set diskUsed(diskUsed: number  | undefined) {
        this['disk_used'] = diskUsed;
    }
    public get diskUsed(): number | undefined {
        return this['disk_used'];
    }
    public withDiskAvailable(diskAvailable: number): HostOverviewResponse {
        this['disk_available'] = diskAvailable;
        return this;
    }
    public set diskAvailable(diskAvailable: number  | undefined) {
        this['disk_available'] = diskAvailable;
    }
    public get diskAvailable(): number | undefined {
        return this['disk_available'];
    }
    public withDiskIo(diskIo: number): HostOverviewResponse {
        this['disk_io'] = diskIo;
        return this;
    }
    public set diskIo(diskIo: number  | undefined) {
        this['disk_io'] = diskIo;
    }
    public get diskIo(): number | undefined {
        return this['disk_io'];
    }
    public withDiskIoRead(diskIoRead: number): HostOverviewResponse {
        this['disk_io_read'] = diskIoRead;
        return this;
    }
    public set diskIoRead(diskIoRead: number  | undefined) {
        this['disk_io_read'] = diskIoRead;
    }
    public get diskIoRead(): number | undefined {
        return this['disk_io_read'];
    }
    public withDiskIoWrite(diskIoWrite: number): HostOverviewResponse {
        this['disk_io_write'] = diskIoWrite;
        return this;
    }
    public set diskIoWrite(diskIoWrite: number  | undefined) {
        this['disk_io_write'] = diskIoWrite;
    }
    public get diskIoWrite(): number | undefined {
        return this['disk_io_write'];
    }
    public withTcpResendRate(tcpResendRate: number): HostOverviewResponse {
        this['tcp_resend_rate'] = tcpResendRate;
        return this;
    }
    public set tcpResendRate(tcpResendRate: number  | undefined) {
        this['tcp_resend_rate'] = tcpResendRate;
    }
    public get tcpResendRate(): number | undefined {
        return this['tcp_resend_rate'];
    }
    public withNetIo(netIo: number): HostOverviewResponse {
        this['net_io'] = netIo;
        return this;
    }
    public set netIo(netIo: number  | undefined) {
        this['net_io'] = netIo;
    }
    public get netIo(): number | undefined {
        return this['net_io'];
    }
}