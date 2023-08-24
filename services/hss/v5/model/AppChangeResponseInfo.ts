

export class AppChangeResponseInfo {
    private 'agent_id'?: string;
    private 'variation_type'?: string;
    private 'host_id'?: string;
    private 'app_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public version?: string;
    private 'update_time'?: number;
    private 'recent_scan_time'?: number;
    public constructor() { 
    }
    public withAgentId(agentId: string): AppChangeResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withVariationType(variationType: string): AppChangeResponseInfo {
        this['variation_type'] = variationType;
        return this;
    }
    public set variationType(variationType: string  | undefined) {
        this['variation_type'] = variationType;
    }
    public get variationType(): string | undefined {
        return this['variation_type'];
    }
    public withHostId(hostId: string): AppChangeResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAppName(appName: string): AppChangeResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withHostName(hostName: string): AppChangeResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): AppChangeResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withVersion(version: string): AppChangeResponseInfo {
        this['version'] = version;
        return this;
    }
    public withUpdateTime(updateTime: number): AppChangeResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withRecentScanTime(recentScanTime: number): AppChangeResponseInfo {
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