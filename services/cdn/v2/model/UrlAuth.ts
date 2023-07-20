

export class UrlAuth {
    public status?: string;
    public type?: string;
    private 'expire_time'?: number;
    private 'sign_method'?: string;
    private 'match_type'?: string;
    public key?: string;
    private 'backup_key'?: string;
    private 'sign_arg'?: string;
    private 'time_format'?: string;
    public constructor(status?: string, type?: string, expireTime?: number, timeFormat?: string) { 
        this['status'] = status;
        this['type'] = type;
        this['expire_time'] = expireTime;
        this['time_format'] = timeFormat;
    }
    public withStatus(status: string): UrlAuth {
        this['status'] = status;
        return this;
    }
    public withType(type: string): UrlAuth {
        this['type'] = type;
        return this;
    }
    public withExpireTime(expireTime: number): UrlAuth {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withSignMethod(signMethod: string): UrlAuth {
        this['sign_method'] = signMethod;
        return this;
    }
    public set signMethod(signMethod: string  | undefined) {
        this['sign_method'] = signMethod;
    }
    public get signMethod(): string | undefined {
        return this['sign_method'];
    }
    public withMatchType(matchType: string): UrlAuth {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withKey(key: string): UrlAuth {
        this['key'] = key;
        return this;
    }
    public withBackupKey(backupKey: string): UrlAuth {
        this['backup_key'] = backupKey;
        return this;
    }
    public set backupKey(backupKey: string  | undefined) {
        this['backup_key'] = backupKey;
    }
    public get backupKey(): string | undefined {
        return this['backup_key'];
    }
    public withSignArg(signArg: string): UrlAuth {
        this['sign_arg'] = signArg;
        return this;
    }
    public set signArg(signArg: string  | undefined) {
        this['sign_arg'] = signArg;
    }
    public get signArg(): string | undefined {
        return this['sign_arg'];
    }
    public withTimeFormat(timeFormat: string): UrlAuth {
        this['time_format'] = timeFormat;
        return this;
    }
    public set timeFormat(timeFormat: string  | undefined) {
        this['time_format'] = timeFormat;
    }
    public get timeFormat(): string | undefined {
        return this['time_format'];
    }
}