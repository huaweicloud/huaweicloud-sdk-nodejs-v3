

export class UserChangeHistoryResponseInfo {
    private 'agent_id'?: string;
    private 'change_type'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'login_permission'?: boolean;
    private 'root_permission'?: boolean;
    private 'user_group_name'?: string;
    private 'user_home_dir'?: string;
    public shell?: string;
    private 'user_name'?: string;
    private 'expire_time'?: number;
    private 'recent_scan_time'?: number;
    public constructor() { 
    }
    public withAgentId(agentId: string): UserChangeHistoryResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withChangeType(changeType: string): UserChangeHistoryResponseInfo {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withHostId(hostId: string): UserChangeHistoryResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): UserChangeHistoryResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): UserChangeHistoryResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLoginPermission(loginPermission: boolean): UserChangeHistoryResponseInfo {
        this['login_permission'] = loginPermission;
        return this;
    }
    public set loginPermission(loginPermission: boolean  | undefined) {
        this['login_permission'] = loginPermission;
    }
    public get loginPermission(): boolean | undefined {
        return this['login_permission'];
    }
    public withRootPermission(rootPermission: boolean): UserChangeHistoryResponseInfo {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: boolean  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): boolean | undefined {
        return this['root_permission'];
    }
    public withUserGroupName(userGroupName: string): UserChangeHistoryResponseInfo {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserHomeDir(userHomeDir: string): UserChangeHistoryResponseInfo {
        this['user_home_dir'] = userHomeDir;
        return this;
    }
    public set userHomeDir(userHomeDir: string  | undefined) {
        this['user_home_dir'] = userHomeDir;
    }
    public get userHomeDir(): string | undefined {
        return this['user_home_dir'];
    }
    public withShell(shell: string): UserChangeHistoryResponseInfo {
        this['shell'] = shell;
        return this;
    }
    public withUserName(userName: string): UserChangeHistoryResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withExpireTime(expireTime: number): UserChangeHistoryResponseInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withRecentScanTime(recentScanTime: number): UserChangeHistoryResponseInfo {
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