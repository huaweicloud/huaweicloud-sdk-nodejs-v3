

export class AutoLauchResponseInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public name?: string;
    public type?: number;
    public path?: string;
    public hash?: string;
    private 'run_user'?: string;
    private 'recent_scan_time'?: number;
    public constructor() { 
    }
    public withAgentId(agentId: string): AutoLauchResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): AutoLauchResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AutoLauchResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): AutoLauchResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withName(name: string): AutoLauchResponseInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: number): AutoLauchResponseInfo {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): AutoLauchResponseInfo {
        this['path'] = path;
        return this;
    }
    public withHash(hash: string): AutoLauchResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withRunUser(runUser: string): AutoLauchResponseInfo {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: string  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): string | undefined {
        return this['run_user'];
    }
    public withRecentScanTime(recentScanTime: number): AutoLauchResponseInfo {
        this['recent_scan_time'] = recentScanTime;
        return this;
    }
    public set recentScanTime(recentScanTime: number  | undefined) {
        this['recent_scan_time'] = recentScanTime;
    }
    public get recentScanTime(): number | undefined {
        return this['recent_scan_time'];
    }
}