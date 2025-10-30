

export class WebFrameworkHostInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public name?: string;
    public version?: string;
    public path?: string;
    private 'record_time'?: number;
    public catalogue?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public gid?: number;
    public hash?: string;
    private 'is_embedded'?: number;
    public mode?: string;
    public pid?: number;
    private 'proc_path'?: string;
    public uid?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): WebFrameworkHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): WebFrameworkHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): WebFrameworkHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): WebFrameworkHostInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withName(name: string): WebFrameworkHostInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): WebFrameworkHostInfo {
        this['version'] = version;
        return this;
    }
    public withPath(path: string): WebFrameworkHostInfo {
        this['path'] = path;
        return this;
    }
    public withRecordTime(recordTime: number): WebFrameworkHostInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withCatalogue(catalogue: string): WebFrameworkHostInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withFileName(fileName: string): WebFrameworkHostInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): WebFrameworkHostInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withGid(gid: number): WebFrameworkHostInfo {
        this['gid'] = gid;
        return this;
    }
    public withHash(hash: string): WebFrameworkHostInfo {
        this['hash'] = hash;
        return this;
    }
    public withIsEmbedded(isEmbedded: number): WebFrameworkHostInfo {
        this['is_embedded'] = isEmbedded;
        return this;
    }
    public set isEmbedded(isEmbedded: number  | undefined) {
        this['is_embedded'] = isEmbedded;
    }
    public get isEmbedded(): number | undefined {
        return this['is_embedded'];
    }
    public withMode(mode: string): WebFrameworkHostInfo {
        this['mode'] = mode;
        return this;
    }
    public withPid(pid: number): WebFrameworkHostInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): WebFrameworkHostInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withUid(uid: number): WebFrameworkHostInfo {
        this['uid'] = uid;
        return this;
    }
    public withContainerId(containerId: string): WebFrameworkHostInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebFrameworkHostInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}