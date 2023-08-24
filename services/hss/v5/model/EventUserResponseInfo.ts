

export class EventUserResponseInfo {
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
    private 'pwd_hash'?: string;
    private 'pwd_with_fuzzing'?: string;
    private 'pwd_used_days'?: number;
    private 'pwd_min_days'?: number;
    private 'pwd_max_days'?: number;
    private 'pwd_warn_left_days'?: number;
    public constructor() { 
    }
    public withUserId(userId: number): EventUserResponseInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withUserGid(userGid: number): EventUserResponseInfo {
        this['user_gid'] = userGid;
        return this;
    }
    public set userGid(userGid: number  | undefined) {
        this['user_gid'] = userGid;
    }
    public get userGid(): number | undefined {
        return this['user_gid'];
    }
    public withUserName(userName: string): EventUserResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserGroupName(userGroupName: string): EventUserResponseInfo {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserHomeDir(userHomeDir: string): EventUserResponseInfo {
        this['user_home_dir'] = userHomeDir;
        return this;
    }
    public set userHomeDir(userHomeDir: string  | undefined) {
        this['user_home_dir'] = userHomeDir;
    }
    public get userHomeDir(): string | undefined {
        return this['user_home_dir'];
    }
    public withLoginIp(loginIp: string): EventUserResponseInfo {
        this['login_ip'] = loginIp;
        return this;
    }
    public set loginIp(loginIp: string  | undefined) {
        this['login_ip'] = loginIp;
    }
    public get loginIp(): string | undefined {
        return this['login_ip'];
    }
    public withServiceType(serviceType: string): EventUserResponseInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withServicePort(servicePort: number): EventUserResponseInfo {
        this['service_port'] = servicePort;
        return this;
    }
    public set servicePort(servicePort: number  | undefined) {
        this['service_port'] = servicePort;
    }
    public get servicePort(): number | undefined {
        return this['service_port'];
    }
    public withLoginMode(loginMode: number): EventUserResponseInfo {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: number  | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode(): number | undefined {
        return this['login_mode'];
    }
    public withLoginLastTime(loginLastTime: number): EventUserResponseInfo {
        this['login_last_time'] = loginLastTime;
        return this;
    }
    public set loginLastTime(loginLastTime: number  | undefined) {
        this['login_last_time'] = loginLastTime;
    }
    public get loginLastTime(): number | undefined {
        return this['login_last_time'];
    }
    public withLoginFailCount(loginFailCount: number): EventUserResponseInfo {
        this['login_fail_count'] = loginFailCount;
        return this;
    }
    public set loginFailCount(loginFailCount: number  | undefined) {
        this['login_fail_count'] = loginFailCount;
    }
    public get loginFailCount(): number | undefined {
        return this['login_fail_count'];
    }
    public withPwdHash(pwdHash: string): EventUserResponseInfo {
        this['pwd_hash'] = pwdHash;
        return this;
    }
    public set pwdHash(pwdHash: string  | undefined) {
        this['pwd_hash'] = pwdHash;
    }
    public get pwdHash(): string | undefined {
        return this['pwd_hash'];
    }
    public withPwdWithFuzzing(pwdWithFuzzing: string): EventUserResponseInfo {
        this['pwd_with_fuzzing'] = pwdWithFuzzing;
        return this;
    }
    public set pwdWithFuzzing(pwdWithFuzzing: string  | undefined) {
        this['pwd_with_fuzzing'] = pwdWithFuzzing;
    }
    public get pwdWithFuzzing(): string | undefined {
        return this['pwd_with_fuzzing'];
    }
    public withPwdUsedDays(pwdUsedDays: number): EventUserResponseInfo {
        this['pwd_used_days'] = pwdUsedDays;
        return this;
    }
    public set pwdUsedDays(pwdUsedDays: number  | undefined) {
        this['pwd_used_days'] = pwdUsedDays;
    }
    public get pwdUsedDays(): number | undefined {
        return this['pwd_used_days'];
    }
    public withPwdMinDays(pwdMinDays: number): EventUserResponseInfo {
        this['pwd_min_days'] = pwdMinDays;
        return this;
    }
    public set pwdMinDays(pwdMinDays: number  | undefined) {
        this['pwd_min_days'] = pwdMinDays;
    }
    public get pwdMinDays(): number | undefined {
        return this['pwd_min_days'];
    }
    public withPwdMaxDays(pwdMaxDays: number): EventUserResponseInfo {
        this['pwd_max_days'] = pwdMaxDays;
        return this;
    }
    public set pwdMaxDays(pwdMaxDays: number  | undefined) {
        this['pwd_max_days'] = pwdMaxDays;
    }
    public get pwdMaxDays(): number | undefined {
        return this['pwd_max_days'];
    }
    public withPwdWarnLeftDays(pwdWarnLeftDays: number): EventUserResponseInfo {
        this['pwd_warn_left_days'] = pwdWarnLeftDays;
        return this;
    }
    public set pwdWarnLeftDays(pwdWarnLeftDays: number  | undefined) {
        this['pwd_warn_left_days'] = pwdWarnLeftDays;
    }
    public get pwdWarnLeftDays(): number | undefined {
        return this['pwd_warn_left_days'];
    }
}