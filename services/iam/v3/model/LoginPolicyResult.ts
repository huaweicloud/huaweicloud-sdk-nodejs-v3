

export class LoginPolicyResult {
    private 'account_validity_period'?: number;
    private 'custom_info_for_login'?: string;
    private 'lockout_duration'?: number;
    private 'login_failed_times'?: number;
    private 'period_with_login_failures'?: number;
    private 'session_timeout'?: number;
    private 'show_recent_login_info'?: boolean;
    public constructor(accountValidityPeriod?: number, customInfoForLogin?: string, lockoutDuration?: number, loginFailedTimes?: number, periodWithLoginFailures?: number, sessionTimeout?: number, showRecentLoginInfo?: boolean) { 
        this['account_validity_period'] = accountValidityPeriod;
        this['custom_info_for_login'] = customInfoForLogin;
        this['lockout_duration'] = lockoutDuration;
        this['login_failed_times'] = loginFailedTimes;
        this['period_with_login_failures'] = periodWithLoginFailures;
        this['session_timeout'] = sessionTimeout;
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public withAccountValidityPeriod(accountValidityPeriod: number): LoginPolicyResult {
        this['account_validity_period'] = accountValidityPeriod;
        return this;
    }
    public set accountValidityPeriod(accountValidityPeriod: number  | undefined) {
        this['account_validity_period'] = accountValidityPeriod;
    }
    public get accountValidityPeriod(): number | undefined {
        return this['account_validity_period'];
    }
    public withCustomInfoForLogin(customInfoForLogin: string): LoginPolicyResult {
        this['custom_info_for_login'] = customInfoForLogin;
        return this;
    }
    public set customInfoForLogin(customInfoForLogin: string  | undefined) {
        this['custom_info_for_login'] = customInfoForLogin;
    }
    public get customInfoForLogin(): string | undefined {
        return this['custom_info_for_login'];
    }
    public withLockoutDuration(lockoutDuration: number): LoginPolicyResult {
        this['lockout_duration'] = lockoutDuration;
        return this;
    }
    public set lockoutDuration(lockoutDuration: number  | undefined) {
        this['lockout_duration'] = lockoutDuration;
    }
    public get lockoutDuration(): number | undefined {
        return this['lockout_duration'];
    }
    public withLoginFailedTimes(loginFailedTimes: number): LoginPolicyResult {
        this['login_failed_times'] = loginFailedTimes;
        return this;
    }
    public set loginFailedTimes(loginFailedTimes: number  | undefined) {
        this['login_failed_times'] = loginFailedTimes;
    }
    public get loginFailedTimes(): number | undefined {
        return this['login_failed_times'];
    }
    public withPeriodWithLoginFailures(periodWithLoginFailures: number): LoginPolicyResult {
        this['period_with_login_failures'] = periodWithLoginFailures;
        return this;
    }
    public set periodWithLoginFailures(periodWithLoginFailures: number  | undefined) {
        this['period_with_login_failures'] = periodWithLoginFailures;
    }
    public get periodWithLoginFailures(): number | undefined {
        return this['period_with_login_failures'];
    }
    public withSessionTimeout(sessionTimeout: number): LoginPolicyResult {
        this['session_timeout'] = sessionTimeout;
        return this;
    }
    public set sessionTimeout(sessionTimeout: number  | undefined) {
        this['session_timeout'] = sessionTimeout;
    }
    public get sessionTimeout(): number | undefined {
        return this['session_timeout'];
    }
    public withShowRecentLoginInfo(showRecentLoginInfo: boolean): LoginPolicyResult {
        this['show_recent_login_info'] = showRecentLoginInfo;
        return this;
    }
    public set showRecentLoginInfo(showRecentLoginInfo: boolean  | undefined) {
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public get showRecentLoginInfo(): boolean | undefined {
        return this['show_recent_login_info'];
    }
}