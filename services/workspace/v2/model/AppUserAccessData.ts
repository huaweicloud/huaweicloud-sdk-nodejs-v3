

export class AppUserAccessData {
    public username?: string;
    private 'access_failed_count'?: number;
    private 'last_access_failed_time'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withUsername(username: string): AppUserAccessData {
        this['username'] = username;
        return this;
    }
    public withAccessFailedCount(accessFailedCount: number): AppUserAccessData {
        this['access_failed_count'] = accessFailedCount;
        return this;
    }
    public set accessFailedCount(accessFailedCount: number  | undefined) {
        this['access_failed_count'] = accessFailedCount;
    }
    public get accessFailedCount(): number | undefined {
        return this['access_failed_count'];
    }
    public withLastAccessFailedTime(lastAccessFailedTime: string): AppUserAccessData {
        this['last_access_failed_time'] = lastAccessFailedTime;
        return this;
    }
    public set lastAccessFailedTime(lastAccessFailedTime: string  | undefined) {
        this['last_access_failed_time'] = lastAccessFailedTime;
    }
    public get lastAccessFailedTime(): string | undefined {
        return this['last_access_failed_time'];
    }
    public withErrorCode(errorCode: string): AppUserAccessData {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): AppUserAccessData {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}