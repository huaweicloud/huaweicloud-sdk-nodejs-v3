

export class LicenseInfo {
    public esn?: string;
    private 'expire_time'?: string;
    private 'grace_time'?: string;
    public constructor(esn?: string, expireTime?: string) { 
        this['esn'] = esn;
        this['expire_time'] = expireTime;
    }
    public withEsn(esn: string): LicenseInfo {
        this['esn'] = esn;
        return this;
    }
    public withExpireTime(expireTime: string): LicenseInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withGraceTime(graceTime: string): LicenseInfo {
        this['grace_time'] = graceTime;
        return this;
    }
    public set graceTime(graceTime: string  | undefined) {
        this['grace_time'] = graceTime;
    }
    public get graceTime(): string | undefined {
        return this['grace_time'];
    }
}