

export class LoginPolicyOption {
    private 'account_validity_period': number | undefined;
    private 'custom_info_for_login': string | undefined;
    private 'lockout_duration': number | undefined;
    private 'login_failed_times': number | undefined;
    private 'period_with_login_failures': number | undefined;
    private 'session_timeout': number | undefined;
    private 'show_recent_login_info': boolean | undefined;
    public constructor(accountValidityPeriod?: any, customInfoForLogin?: any, lockoutDuration?: any, loginFailedTimes?: any, periodWithLoginFailures?: any, sessionTimeout?: any, showRecentLoginInfo?: any) { 
        this['account_validity_period'] = accountValidityPeriod;
        this['custom_info_for_login'] = customInfoForLogin;
        this['lockout_duration'] = lockoutDuration;
        this['login_failed_times'] = loginFailedTimes;
        this['period_with_login_failures'] = periodWithLoginFailures;
        this['session_timeout'] = sessionTimeout;
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public withAccountValidityPeriod(accountValidityPeriod: number): LoginPolicyOption {
        this['account_validity_period'] = accountValidityPeriod;
        return this;
    }
    public set accountValidityPeriod(accountValidityPeriod: number | undefined) {
        this['account_validity_period'] = accountValidityPeriod;
    }
    public get accountValidityPeriod() {
        return this['account_validity_period'];
    }
    public withCustomInfoForLogin(customInfoForLogin: string): LoginPolicyOption {
        this['custom_info_for_login'] = customInfoForLogin;
        return this;
    }
    public set customInfoForLogin(customInfoForLogin: string | undefined) {
        this['custom_info_for_login'] = customInfoForLogin;
    }
    public get customInfoForLogin() {
        return this['custom_info_for_login'];
    }
    public withLockoutDuration(lockoutDuration: number): LoginPolicyOption {
        this['lockout_duration'] = lockoutDuration;
        return this;
    }
    public set lockoutDuration(lockoutDuration: number | undefined) {
        this['lockout_duration'] = lockoutDuration;
    }
    public get lockoutDuration() {
        return this['lockout_duration'];
    }
    public withLoginFailedTimes(loginFailedTimes: number): LoginPolicyOption {
        this['login_failed_times'] = loginFailedTimes;
        return this;
    }
    public set loginFailedTimes(loginFailedTimes: number | undefined) {
        this['login_failed_times'] = loginFailedTimes;
    }
    public get loginFailedTimes() {
        return this['login_failed_times'];
    }
    public withPeriodWithLoginFailures(periodWithLoginFailures: number): LoginPolicyOption {
        this['period_with_login_failures'] = periodWithLoginFailures;
        return this;
    }
    public set periodWithLoginFailures(periodWithLoginFailures: number | undefined) {
        this['period_with_login_failures'] = periodWithLoginFailures;
    }
    public get periodWithLoginFailures() {
        return this['period_with_login_failures'];
    }
    public withSessionTimeout(sessionTimeout: number): LoginPolicyOption {
        this['session_timeout'] = sessionTimeout;
        return this;
    }
    public set sessionTimeout(sessionTimeout: number | undefined) {
        this['session_timeout'] = sessionTimeout;
    }
    public get sessionTimeout() {
        return this['session_timeout'];
    }
    public withShowRecentLoginInfo(showRecentLoginInfo: boolean): LoginPolicyOption {
        this['show_recent_login_info'] = showRecentLoginInfo;
        return this;
    }
    public set showRecentLoginInfo(showRecentLoginInfo: boolean | undefined) {
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public get showRecentLoginInfo() {
        return this['show_recent_login_info'];
    }
}