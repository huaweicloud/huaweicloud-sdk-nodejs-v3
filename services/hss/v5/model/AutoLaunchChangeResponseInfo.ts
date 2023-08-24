

export class AutoLaunchChangeResponseInfo {
    private 'agent_id'?: string;
    private 'variation_type'?: string;
    public type?: number;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public path?: string;
    public hash?: string;
    private 'run_user'?: string;
    public name?: string;
    private 'recent_scan_time'?: number;
    public constructor() { 
    }
    public withAgentId(agentId: string): AutoLaunchChangeResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withVariationType(variationType: string): AutoLaunchChangeResponseInfo {
        this['variation_type'] = variationType;
        return this;
    }
    public set variationType(variationType: string  | undefined) {
        this['variation_type'] = variationType;
    }
    public get variationType(): string | undefined {
        return this['variation_type'];
    }
    public withType(type: number): AutoLaunchChangeResponseInfo {
        this['type'] = type;
        return this;
    }
    public withHostId(hostId: string): AutoLaunchChangeResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AutoLaunchChangeResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): AutoLaunchChangeResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPath(path: string): AutoLaunchChangeResponseInfo {
        this['path'] = path;
        return this;
    }
    public withHash(hash: string): AutoLaunchChangeResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withRunUser(runUser: string): AutoLaunchChangeResponseInfo {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: string  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): string | undefined {
        return this['run_user'];
    }
    public withName(name: string): AutoLaunchChangeResponseInfo {
        this['name'] = name;
        return this;
    }
    public withRecentScanTime(recentScanTime: number): AutoLaunchChangeResponseInfo {
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