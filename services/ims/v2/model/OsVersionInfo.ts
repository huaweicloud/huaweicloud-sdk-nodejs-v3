

export class OsVersionInfo {
    public platform: string;
    private 'os_version_key': string | undefined;
    private 'os_version': string | undefined;
    private 'os_bit': number | undefined;
    private 'os_type': string | undefined;
    public constructor(platform?: any, osVersionKey?: any, osVersion?: any, osBit?: any, osType?: any) { 
        this['platform'] = platform;
        this['os_version_key'] = osVersionKey;
        this['os_version'] = osVersion;
        this['os_bit'] = osBit;
        this['os_type'] = osType;
    }
    public withPlatform(platform: string): OsVersionInfo {
        this['platform'] = platform;
        return this;
    }
    public withOsVersionKey(osVersionKey: string): OsVersionInfo {
        this['os_version_key'] = osVersionKey;
        return this;
    }
    public set osVersionKey(osVersionKey: string | undefined) {
        this['os_version_key'] = osVersionKey;
    }
    public get osVersionKey() {
        return this['os_version_key'];
    }
    public withOsVersion(osVersion: string): OsVersionInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withOsBit(osBit: number): OsVersionInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: number | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit() {
        return this['os_bit'];
    }
    public withOsType(osType: string): OsVersionInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
}