

export class VulHostProcessResponseInfoDataList {
    public pid?: string;
    private 'host_ip'?: string;
    public path?: string;
    private 'port_protocol'?: string;
    public version?: string;
    private 'dependency_package'?: string;
    private 'cpu_use_rate'?: string;
    public constructor() { 
    }
    public withPid(pid: string): VulHostProcessResponseInfoDataList {
        this['pid'] = pid;
        return this;
    }
    public withHostIp(hostIp: string): VulHostProcessResponseInfoDataList {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPath(path: string): VulHostProcessResponseInfoDataList {
        this['path'] = path;
        return this;
    }
    public withPortProtocol(portProtocol: string): VulHostProcessResponseInfoDataList {
        this['port_protocol'] = portProtocol;
        return this;
    }
    public set portProtocol(portProtocol: string  | undefined) {
        this['port_protocol'] = portProtocol;
    }
    public get portProtocol(): string | undefined {
        return this['port_protocol'];
    }
    public withVersion(version: string): VulHostProcessResponseInfoDataList {
        this['version'] = version;
        return this;
    }
    public withDependencyPackage(dependencyPackage: string): VulHostProcessResponseInfoDataList {
        this['dependency_package'] = dependencyPackage;
        return this;
    }
    public set dependencyPackage(dependencyPackage: string  | undefined) {
        this['dependency_package'] = dependencyPackage;
    }
    public get dependencyPackage(): string | undefined {
        return this['dependency_package'];
    }
    public withCpuUseRate(cpuUseRate: string): VulHostProcessResponseInfoDataList {
        this['cpu_use_rate'] = cpuUseRate;
        return this;
    }
    public set cpuUseRate(cpuUseRate: string  | undefined) {
        this['cpu_use_rate'] = cpuUseRate;
    }
    public get cpuUseRate(): string | undefined {
        return this['cpu_use_rate'];
    }
}