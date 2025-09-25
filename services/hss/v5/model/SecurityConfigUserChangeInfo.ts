

export class SecurityConfigUserChangeInfo {
    private 'change_type'?: string;
    private 'login_permission'?: boolean;
    private 'root_permission'?: boolean;
    private 'user_group_name'?: string;
    private 'user_home_dir'?: string;
    public shell?: string;
    private 'user_name'?: string;
    private 'scan_time'?: number;
    public constructor() { 
    }
    public withChangeType(changeType: string): SecurityConfigUserChangeInfo {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withLoginPermission(loginPermission: boolean): SecurityConfigUserChangeInfo {
        this['login_permission'] = loginPermission;
        return this;
    }
    public set loginPermission(loginPermission: boolean  | undefined) {
        this['login_permission'] = loginPermission;
    }
    public get loginPermission(): boolean | undefined {
        return this['login_permission'];
    }
    public withRootPermission(rootPermission: boolean): SecurityConfigUserChangeInfo {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: boolean  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): boolean | undefined {
        return this['root_permission'];
    }
    public withUserGroupName(userGroupName: string): SecurityConfigUserChangeInfo {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserHomeDir(userHomeDir: string): SecurityConfigUserChangeInfo {
        this['user_home_dir'] = userHomeDir;
        return this;
    }
    public set userHomeDir(userHomeDir: string  | undefined) {
        this['user_home_dir'] = userHomeDir;
    }
    public get userHomeDir(): string | undefined {
        return this['user_home_dir'];
    }
    public withShell(shell: string): SecurityConfigUserChangeInfo {
        this['shell'] = shell;
        return this;
    }
    public withUserName(userName: string): SecurityConfigUserChangeInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withScanTime(scanTime: number): SecurityConfigUserChangeInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
}