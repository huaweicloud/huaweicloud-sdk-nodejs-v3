

export class EventForensicInfoUserForensic {
    private 'user_id'?: number;
    private 'user_gid'?: number;
    private 'user_name'?: string;
    private 'user_group_name'?: string;
    private 'user_home_dir'?: string;
    private 'login_ip'?: string;
    private 'service_type'?: string;
    private 'service_port'?: number;
    private 'login_mode'?: number;
    private 'login_last_time'?: number;
    private 'login_fail_count'?: number;
    public constructor() { 
    }
    public withUserId(userId: number): EventForensicInfoUserForensic {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withUserGid(userGid: number): EventForensicInfoUserForensic {
        this['user_gid'] = userGid;
        return this;
    }
    public set userGid(userGid: number  | undefined) {
        this['user_gid'] = userGid;
    }
    public get userGid(): number | undefined {
        return this['user_gid'];
    }
    public withUserName(userName: string): EventForensicInfoUserForensic {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserGroupName(userGroupName: string): EventForensicInfoUserForensic {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserHomeDir(userHomeDir: string): EventForensicInfoUserForensic {
        this['user_home_dir'] = userHomeDir;
        return this;
    }
    public set userHomeDir(userHomeDir: string  | undefined) {
        this['user_home_dir'] = userHomeDir;
    }
    public get userHomeDir(): string | undefined {
        return this['user_home_dir'];
    }
    public withLoginIp(loginIp: string): EventForensicInfoUserForensic {
        this['login_ip'] = loginIp;
        return this;
    }
    public set loginIp(loginIp: string  | undefined) {
        this['login_ip'] = loginIp;
    }
    public get loginIp(): string | undefined {
        return this['login_ip'];
    }
    public withServiceType(serviceType: string): EventForensicInfoUserForensic {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withServicePort(servicePort: number): EventForensicInfoUserForensic {
        this['service_port'] = servicePort;
        return this;
    }
    public set servicePort(servicePort: number  | undefined) {
        this['service_port'] = servicePort;
    }
    public get servicePort(): number | undefined {
        return this['service_port'];
    }
    public withLoginMode(loginMode: number): EventForensicInfoUserForensic {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: number  | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode(): number | undefined {
        return this['login_mode'];
    }
    public withLoginLastTime(loginLastTime: number): EventForensicInfoUserForensic {
        this['login_last_time'] = loginLastTime;
        return this;
    }
    public set loginLastTime(loginLastTime: number  | undefined) {
        this['login_last_time'] = loginLastTime;
    }
    public get loginLastTime(): number | undefined {
        return this['login_last_time'];
    }
    public withLoginFailCount(loginFailCount: number): EventForensicInfoUserForensic {
        this['login_fail_count'] = loginFailCount;
        return this;
    }
    public set loginFailCount(loginFailCount: number  | undefined) {
        this['login_fail_count'] = loginFailCount;
    }
    public get loginFailCount(): number | undefined {
        return this['login_fail_count'];
    }
}