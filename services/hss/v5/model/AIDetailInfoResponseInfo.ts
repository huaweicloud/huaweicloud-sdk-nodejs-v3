import { AIProcessNetInfo } from './AIProcessNetInfo';


export class AIDetailInfoResponseInfo {
    private 'server_name'?: string;
    private 'server_ip'?: string;
    private 'ai_application'?: string;
    private 'ai_tool'?: string;
    public type?: string;
    public version?: string;
    private 'startup_path'?: string;
    private 'startup_time'?: number;
    private 'install_path'?: string;
    public cmdline?: string;
    private 'first_scan_time'?: number;
    private 'latest_scan_time'?: number;
    private 'container_name'?: string;
    private 'container_id'?: string;
    private 'host_id'?: string;
    public pid?: number;
    public ppid?: number;
    public user?: string;
    private 'net_info'?: Array<AIProcessNetInfo>;
    public constructor() { 
    }
    public withServerName(serverName: string): AIDetailInfoResponseInfo {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerIp(serverIp: string): AIDetailInfoResponseInfo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withAiApplication(aiApplication: string): AIDetailInfoResponseInfo {
        this['ai_application'] = aiApplication;
        return this;
    }
    public set aiApplication(aiApplication: string  | undefined) {
        this['ai_application'] = aiApplication;
    }
    public get aiApplication(): string | undefined {
        return this['ai_application'];
    }
    public withAiTool(aiTool: string): AIDetailInfoResponseInfo {
        this['ai_tool'] = aiTool;
        return this;
    }
    public set aiTool(aiTool: string  | undefined) {
        this['ai_tool'] = aiTool;
    }
    public get aiTool(): string | undefined {
        return this['ai_tool'];
    }
    public withType(type: string): AIDetailInfoResponseInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): AIDetailInfoResponseInfo {
        this['version'] = version;
        return this;
    }
    public withStartupPath(startupPath: string): AIDetailInfoResponseInfo {
        this['startup_path'] = startupPath;
        return this;
    }
    public set startupPath(startupPath: string  | undefined) {
        this['startup_path'] = startupPath;
    }
    public get startupPath(): string | undefined {
        return this['startup_path'];
    }
    public withStartupTime(startupTime: number): AIDetailInfoResponseInfo {
        this['startup_time'] = startupTime;
        return this;
    }
    public set startupTime(startupTime: number  | undefined) {
        this['startup_time'] = startupTime;
    }
    public get startupTime(): number | undefined {
        return this['startup_time'];
    }
    public withInstallPath(installPath: string): AIDetailInfoResponseInfo {
        this['install_path'] = installPath;
        return this;
    }
    public set installPath(installPath: string  | undefined) {
        this['install_path'] = installPath;
    }
    public get installPath(): string | undefined {
        return this['install_path'];
    }
    public withCmdline(cmdline: string): AIDetailInfoResponseInfo {
        this['cmdline'] = cmdline;
        return this;
    }
    public withFirstScanTime(firstScanTime: number): AIDetailInfoResponseInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withLatestScanTime(latestScanTime: number): AIDetailInfoResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withContainerName(containerName: string): AIDetailInfoResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): AIDetailInfoResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withHostId(hostId: string): AIDetailInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPid(pid: number): AIDetailInfoResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withPpid(ppid: number): AIDetailInfoResponseInfo {
        this['ppid'] = ppid;
        return this;
    }
    public withUser(user: string): AIDetailInfoResponseInfo {
        this['user'] = user;
        return this;
    }
    public withNetInfo(netInfo: Array<AIProcessNetInfo>): AIDetailInfoResponseInfo {
        this['net_info'] = netInfo;
        return this;
    }
    public set netInfo(netInfo: Array<AIProcessNetInfo>  | undefined) {
        this['net_info'] = netInfo;
    }
    public get netInfo(): Array<AIProcessNetInfo> | undefined {
        return this['net_info'];
    }
}