

export class WebAppAndServiceResponseInfo {
    public catalogue?: string;
    public name?: string;
    public version?: string;
    private 'agent_id'?: string;
    private 'install_path'?: string;
    private 'config_path'?: string;
    public uid?: number;
    public gid?: number;
    public mode?: string;
    public ctime?: number;
    public mtime?: number;
    public atime?: number;
    public pid?: number;
    private 'proc_path'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'record_time'?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_ip'?: string;
    public constructor() { 
    }
    public withCatalogue(catalogue: string): WebAppAndServiceResponseInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withName(name: string): WebAppAndServiceResponseInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): WebAppAndServiceResponseInfo {
        this['version'] = version;
        return this;
    }
    public withAgentId(agentId: string): WebAppAndServiceResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withInstallPath(installPath: string): WebAppAndServiceResponseInfo {
        this['install_path'] = installPath;
        return this;
    }
    public set installPath(installPath: string  | undefined) {
        this['install_path'] = installPath;
    }
    public get installPath(): string | undefined {
        return this['install_path'];
    }
    public withConfigPath(configPath: string): WebAppAndServiceResponseInfo {
        this['config_path'] = configPath;
        return this;
    }
    public set configPath(configPath: string  | undefined) {
        this['config_path'] = configPath;
    }
    public get configPath(): string | undefined {
        return this['config_path'];
    }
    public withUid(uid: number): WebAppAndServiceResponseInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): WebAppAndServiceResponseInfo {
        this['gid'] = gid;
        return this;
    }
    public withMode(mode: string): WebAppAndServiceResponseInfo {
        this['mode'] = mode;
        return this;
    }
    public withCtime(ctime: number): WebAppAndServiceResponseInfo {
        this['ctime'] = ctime;
        return this;
    }
    public withMtime(mtime: number): WebAppAndServiceResponseInfo {
        this['mtime'] = mtime;
        return this;
    }
    public withAtime(atime: number): WebAppAndServiceResponseInfo {
        this['atime'] = atime;
        return this;
    }
    public withPid(pid: number): WebAppAndServiceResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): WebAppAndServiceResponseInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withContainerId(containerId: string): WebAppAndServiceResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebAppAndServiceResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withRecordTime(recordTime: number): WebAppAndServiceResponseInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withHostName(hostName: string): WebAppAndServiceResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): WebAppAndServiceResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): WebAppAndServiceResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
}