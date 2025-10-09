import { AllowAddressNetmask } from './AllowAddressNetmask';
import { AllowIpRange } from './AllowIpRange';


export class LoginPolicy {
    private 'user_validity_period'?: number;
    private 'custom_info_for_login'?: string;
    private 'lockout_duration'?: number;
    private 'login_failed_times'?: number;
    private 'period_with_login_failures'?: number;
    private 'session_timeout'?: number;
    private 'show_recent_login_info'?: boolean;
    private 'allow_address_netmasks'?: Array<AllowAddressNetmask>;
    private 'allow_ip_ranges'?: Array<AllowIpRange>;
    public constructor(userValidityPeriod?: number, customInfoForLogin?: string, lockoutDuration?: number, loginFailedTimes?: number, periodWithLoginFailures?: number, sessionTimeout?: number, showRecentLoginInfo?: boolean) { 
        this['user_validity_period'] = userValidityPeriod;
        this['custom_info_for_login'] = customInfoForLogin;
        this['lockout_duration'] = lockoutDuration;
        this['login_failed_times'] = loginFailedTimes;
        this['period_with_login_failures'] = periodWithLoginFailures;
        this['session_timeout'] = sessionTimeout;
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public withUserValidityPeriod(userValidityPeriod: number): LoginPolicy {
        this['user_validity_period'] = userValidityPeriod;
        return this;
    }
    public set userValidityPeriod(userValidityPeriod: number  | undefined) {
        this['user_validity_period'] = userValidityPeriod;
    }
    public get userValidityPeriod(): number | undefined {
        return this['user_validity_period'];
    }
    public withCustomInfoForLogin(customInfoForLogin: string): LoginPolicy {
        this['custom_info_for_login'] = customInfoForLogin;
        return this;
    }
    public set customInfoForLogin(customInfoForLogin: string  | undefined) {
        this['custom_info_for_login'] = customInfoForLogin;
    }
    public get customInfoForLogin(): string | undefined {
        return this['custom_info_for_login'];
    }
    public withLockoutDuration(lockoutDuration: number): LoginPolicy {
        this['lockout_duration'] = lockoutDuration;
        return this;
    }
    public set lockoutDuration(lockoutDuration: number  | undefined) {
        this['lockout_duration'] = lockoutDuration;
    }
    public get lockoutDuration(): number | undefined {
        return this['lockout_duration'];
    }
    public withLoginFailedTimes(loginFailedTimes: number): LoginPolicy {
        this['login_failed_times'] = loginFailedTimes;
        return this;
    }
    public set loginFailedTimes(loginFailedTimes: number  | undefined) {
        this['login_failed_times'] = loginFailedTimes;
    }
    public get loginFailedTimes(): number | undefined {
        return this['login_failed_times'];
    }
    public withPeriodWithLoginFailures(periodWithLoginFailures: number): LoginPolicy {
        this['period_with_login_failures'] = periodWithLoginFailures;
        return this;
    }
    public set periodWithLoginFailures(periodWithLoginFailures: number  | undefined) {
        this['period_with_login_failures'] = periodWithLoginFailures;
    }
    public get periodWithLoginFailures(): number | undefined {
        return this['period_with_login_failures'];
    }
    public withSessionTimeout(sessionTimeout: number): LoginPolicy {
        this['session_timeout'] = sessionTimeout;
        return this;
    }
    public set sessionTimeout(sessionTimeout: number  | undefined) {
        this['session_timeout'] = sessionTimeout;
    }
    public get sessionTimeout(): number | undefined {
        return this['session_timeout'];
    }
    public withShowRecentLoginInfo(showRecentLoginInfo: boolean): LoginPolicy {
        this['show_recent_login_info'] = showRecentLoginInfo;
        return this;
    }
    public set showRecentLoginInfo(showRecentLoginInfo: boolean  | undefined) {
        this['show_recent_login_info'] = showRecentLoginInfo;
    }
    public get showRecentLoginInfo(): boolean | undefined {
        return this['show_recent_login_info'];
    }
    public withAllowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmask>): LoginPolicy {
        this['allow_address_netmasks'] = allowAddressNetmasks;
        return this;
    }
    public set allowAddressNetmasks(allowAddressNetmasks: Array<AllowAddressNetmask>  | undefined) {
        this['allow_address_netmasks'] = allowAddressNetmasks;
    }
    public get allowAddressNetmasks(): Array<AllowAddressNetmask> | undefined {
        return this['allow_address_netmasks'];
    }
    public withAllowIpRanges(allowIpRanges: Array<AllowIpRange>): LoginPolicy {
        this['allow_ip_ranges'] = allowIpRanges;
        return this;
    }
    public set allowIpRanges(allowIpRanges: Array<AllowIpRange>  | undefined) {
        this['allow_ip_ranges'] = allowIpRanges;
    }
    public get allowIpRanges(): Array<AllowIpRange> | undefined {
        return this['allow_ip_ranges'];
    }
}