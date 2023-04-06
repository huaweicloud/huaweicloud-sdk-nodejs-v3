

export class HostOverviewResponse {
    private 'instance_name'?: string | undefined;
    private 'host_name'?: string | undefined;
    private 'host_stat'?: string | undefined;
    private 'work_ip'?: string | undefined;
    private 'mem_free'?: number | undefined;
    private 'mem_total'?: number | undefined;
    private 'mem_usage'?: number | undefined;
    private 'mem_cached'?: number | undefined;
    private 'mem_buffer'?: number | undefined;
    private 'swap_free'?: number | undefined;
    private 'swap_total'?: number | undefined;
    private 'cpu_usage'?: number | undefined;
    private 'cpu_usage_sys'?: number | undefined;
    private 'cpu_usage_usr'?: number | undefined;
    private 'cpu_idle'?: number | undefined;
    private 'cpu_iowait'?: number | undefined;
    private 'disk_usage_avg'?: number | undefined;
    private 'disk_total'?: number | undefined;
    private 'disk_used'?: number | undefined;
    private 'disk_available'?: number | undefined;
    private 'disk_io'?: number | undefined;
    private 'disk_io_read'?: number | undefined;
    private 'disk_io_write'?: number | undefined;
    private 'tcp_resend_rate'?: number | undefined;
    private 'net_io'?: number | undefined;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): HostOverviewResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName() {
        return this['instance_name'];
    }
    public withHostName(hostName: string): HostOverviewResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withHostStat(hostStat: string): HostOverviewResponse {
        this['host_stat'] = hostStat;
        return this;
    }
    public set hostStat(hostStat: string | undefined) {
        this['host_stat'] = hostStat;
    }
    public get hostStat() {
        return this['host_stat'];
    }
    public withWorkIp(workIp: string): HostOverviewResponse {
        this['work_ip'] = workIp;
        return this;
    }
    public set workIp(workIp: string | undefined) {
        this['work_ip'] = workIp;
    }
    public get workIp() {
        return this['work_ip'];
    }
    public withMemFree(memFree: number): HostOverviewResponse {
        this['mem_free'] = memFree;
        return this;
    }
    public set memFree(memFree: number | undefined) {
        this['mem_free'] = memFree;
    }
    public get memFree() {
        return this['mem_free'];
    }
    public withMemTotal(memTotal: number): HostOverviewResponse {
        this['mem_total'] = memTotal;
        return this;
    }
    public set memTotal(memTotal: number | undefined) {
        this['mem_total'] = memTotal;
    }
    public get memTotal() {
        return this['mem_total'];
    }
    public withMemUsage(memUsage: number): HostOverviewResponse {
        this['mem_usage'] = memUsage;
        return this;
    }
    public set memUsage(memUsage: number | undefined) {
        this['mem_usage'] = memUsage;
    }
    public get memUsage() {
        return this['mem_usage'];
    }
    public withMemCached(memCached: number): HostOverviewResponse {
        this['mem_cached'] = memCached;
        return this;
    }
    public set memCached(memCached: number | undefined) {
        this['mem_cached'] = memCached;
    }
    public get memCached() {
        return this['mem_cached'];
    }
    public withMemBuffer(memBuffer: number): HostOverviewResponse {
        this['mem_buffer'] = memBuffer;
        return this;
    }
    public set memBuffer(memBuffer: number | undefined) {
        this['mem_buffer'] = memBuffer;
    }
    public get memBuffer() {
        return this['mem_buffer'];
    }
    public withSwapFree(swapFree: number): HostOverviewResponse {
        this['swap_free'] = swapFree;
        return this;
    }
    public set swapFree(swapFree: number | undefined) {
        this['swap_free'] = swapFree;
    }
    public get swapFree() {
        return this['swap_free'];
    }
    public withSwapTotal(swapTotal: number): HostOverviewResponse {
        this['swap_total'] = swapTotal;
        return this;
    }
    public set swapTotal(swapTotal: number | undefined) {
        this['swap_total'] = swapTotal;
    }
    public get swapTotal() {
        return this['swap_total'];
    }
    public withCpuUsage(cpuUsage: number): HostOverviewResponse {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage() {
        return this['cpu_usage'];
    }
    public withCpuUsageSys(cpuUsageSys: number): HostOverviewResponse {
        this['cpu_usage_sys'] = cpuUsageSys;
        return this;
    }
    public set cpuUsageSys(cpuUsageSys: number | undefined) {
        this['cpu_usage_sys'] = cpuUsageSys;
    }
    public get cpuUsageSys() {
        return this['cpu_usage_sys'];
    }
    public withCpuUsageUsr(cpuUsageUsr: number): HostOverviewResponse {
        this['cpu_usage_usr'] = cpuUsageUsr;
        return this;
    }
    public set cpuUsageUsr(cpuUsageUsr: number | undefined) {
        this['cpu_usage_usr'] = cpuUsageUsr;
    }
    public get cpuUsageUsr() {
        return this['cpu_usage_usr'];
    }
    public withCpuIdle(cpuIdle: number): HostOverviewResponse {
        this['cpu_idle'] = cpuIdle;
        return this;
    }
    public set cpuIdle(cpuIdle: number | undefined) {
        this['cpu_idle'] = cpuIdle;
    }
    public get cpuIdle() {
        return this['cpu_idle'];
    }
    public withCpuIowait(cpuIowait: number): HostOverviewResponse {
        this['cpu_iowait'] = cpuIowait;
        return this;
    }
    public set cpuIowait(cpuIowait: number | undefined) {
        this['cpu_iowait'] = cpuIowait;
    }
    public get cpuIowait() {
        return this['cpu_iowait'];
    }
    public withDiskUsageAvg(diskUsageAvg: number): HostOverviewResponse {
        this['disk_usage_avg'] = diskUsageAvg;
        return this;
    }
    public set diskUsageAvg(diskUsageAvg: number | undefined) {
        this['disk_usage_avg'] = diskUsageAvg;
    }
    public get diskUsageAvg() {
        return this['disk_usage_avg'];
    }
    public withDiskTotal(diskTotal: number): HostOverviewResponse {
        this['disk_total'] = diskTotal;
        return this;
    }
    public set diskTotal(diskTotal: number | undefined) {
        this['disk_total'] = diskTotal;
    }
    public get diskTotal() {
        return this['disk_total'];
    }
    public withDiskUsed(diskUsed: number): HostOverviewResponse {
        this['disk_used'] = diskUsed;
        return this;
    }
    public set diskUsed(diskUsed: number | undefined) {
        this['disk_used'] = diskUsed;
    }
    public get diskUsed() {
        return this['disk_used'];
    }
    public withDiskAvailable(diskAvailable: number): HostOverviewResponse {
        this['disk_available'] = diskAvailable;
        return this;
    }
    public set diskAvailable(diskAvailable: number | undefined) {
        this['disk_available'] = diskAvailable;
    }
    public get diskAvailable() {
        return this['disk_available'];
    }
    public withDiskIo(diskIo: number): HostOverviewResponse {
        this['disk_io'] = diskIo;
        return this;
    }
    public set diskIo(diskIo: number | undefined) {
        this['disk_io'] = diskIo;
    }
    public get diskIo() {
        return this['disk_io'];
    }
    public withDiskIoRead(diskIoRead: number): HostOverviewResponse {
        this['disk_io_read'] = diskIoRead;
        return this;
    }
    public set diskIoRead(diskIoRead: number | undefined) {
        this['disk_io_read'] = diskIoRead;
    }
    public get diskIoRead() {
        return this['disk_io_read'];
    }
    public withDiskIoWrite(diskIoWrite: number): HostOverviewResponse {
        this['disk_io_write'] = diskIoWrite;
        return this;
    }
    public set diskIoWrite(diskIoWrite: number | undefined) {
        this['disk_io_write'] = diskIoWrite;
    }
    public get diskIoWrite() {
        return this['disk_io_write'];
    }
    public withTcpResendRate(tcpResendRate: number): HostOverviewResponse {
        this['tcp_resend_rate'] = tcpResendRate;
        return this;
    }
    public set tcpResendRate(tcpResendRate: number | undefined) {
        this['tcp_resend_rate'] = tcpResendRate;
    }
    public get tcpResendRate() {
        return this['tcp_resend_rate'];
    }
    public withNetIo(netIo: number): HostOverviewResponse {
        this['net_io'] = netIo;
        return this;
    }
    public set netIo(netIo: number | undefined) {
        this['net_io'] = netIo;
    }
    public get netIo() {
        return this['net_io'];
    }
}