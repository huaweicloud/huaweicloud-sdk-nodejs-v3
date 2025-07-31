

export class WebFrameworkHostInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public name?: string;
    public version?: string;
    public path?: string;
    private 'file_size'?: number;
    private 'record_time'?: number;
    private 'bind_ip_list'?: string;
    public catalogue?: string;
    private 'connected_ip_list'?: string;
    private 'connected_number'?: string;
    private 'embedder_dir'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public gid?: number;
    public hash?: string;
    private 'is_embedded'?: number;
    private 'listen_port_list'?: string;
    public mode?: string;
    public pid?: number;
    private 'proc_path'?: string;
    public uid?: string;
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
    public withFileSize(fileSize: number): WebFrameworkHostInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
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
    public withBindIpList(bindIpList: string): WebFrameworkHostInfo {
        this['bind_ip_list'] = bindIpList;
        return this;
    }
    public set bindIpList(bindIpList: string  | undefined) {
        this['bind_ip_list'] = bindIpList;
    }
    public get bindIpList(): string | undefined {
        return this['bind_ip_list'];
    }
    public withCatalogue(catalogue: string): WebFrameworkHostInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withConnectedIpList(connectedIpList: string): WebFrameworkHostInfo {
        this['connected_ip_list'] = connectedIpList;
        return this;
    }
    public set connectedIpList(connectedIpList: string  | undefined) {
        this['connected_ip_list'] = connectedIpList;
    }
    public get connectedIpList(): string | undefined {
        return this['connected_ip_list'];
    }
    public withConnectedNumber(connectedNumber: string): WebFrameworkHostInfo {
        this['connected_number'] = connectedNumber;
        return this;
    }
    public set connectedNumber(connectedNumber: string  | undefined) {
        this['connected_number'] = connectedNumber;
    }
    public get connectedNumber(): string | undefined {
        return this['connected_number'];
    }
    public withEmbedderDir(embedderDir: string): WebFrameworkHostInfo {
        this['embedder_dir'] = embedderDir;
        return this;
    }
    public set embedderDir(embedderDir: string  | undefined) {
        this['embedder_dir'] = embedderDir;
    }
    public get embedderDir(): string | undefined {
        return this['embedder_dir'];
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
    public withListenPortList(listenPortList: string): WebFrameworkHostInfo {
        this['listen_port_list'] = listenPortList;
        return this;
    }
    public set listenPortList(listenPortList: string  | undefined) {
        this['listen_port_list'] = listenPortList;
    }
    public get listenPortList(): string | undefined {
        return this['listen_port_list'];
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
    public withUid(uid: string): WebFrameworkHostInfo {
        this['uid'] = uid;
        return this;
    }
}