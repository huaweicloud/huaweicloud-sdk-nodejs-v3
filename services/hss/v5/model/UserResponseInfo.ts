

export class UserResponseInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'user_name'?: string;
    private 'login_permission'?: boolean;
    private 'root_permission'?: boolean;
    private 'user_group_name'?: string;
    private 'user_home_dir'?: string;
    public shell?: string;
    private 'recent_scan_time'?: number;
    private 'first_scan_time'?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): UserResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): UserResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): UserResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): UserResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withUserName(userName: string): UserResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLoginPermission(loginPermission: boolean): UserResponseInfo {
        this['login_permission'] = loginPermission;
        return this;
    }
    public set loginPermission(loginPermission: boolean  | undefined) {
        this['login_permission'] = loginPermission;
    }
    public get loginPermission(): boolean | undefined {
        return this['login_permission'];
    }
    public withRootPermission(rootPermission: boolean): UserResponseInfo {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: boolean  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): boolean | undefined {
        return this['root_permission'];
    }
    public withUserGroupName(userGroupName: string): UserResponseInfo {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserHomeDir(userHomeDir: string): UserResponseInfo {
        this['user_home_dir'] = userHomeDir;
        return this;
    }
    public set userHomeDir(userHomeDir: string  | undefined) {
        this['user_home_dir'] = userHomeDir;
    }
    public get userHomeDir(): string | undefined {
        return this['user_home_dir'];
    }
    public withShell(shell: string): UserResponseInfo {
        this['shell'] = shell;
        return this;
    }
    public withRecentScanTime(recentScanTime: number): UserResponseInfo {
        this['recent_scan_time'] = recentScanTime;
        return this;
    }
    public set recentScanTime(recentScanTime: number  | undefined) {
        this['recent_scan_time'] = recentScanTime;
    }
    public get recentScanTime(): number | undefined {
        return this['recent_scan_time'];
    }
    public withFirstScanTime(firstScanTime: number): UserResponseInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withContainerId(containerId: string): UserResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): UserResponseInfo {
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