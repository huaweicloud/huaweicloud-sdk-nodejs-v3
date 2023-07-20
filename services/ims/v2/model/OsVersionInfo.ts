

export class OsVersionInfo {
    public platform?: string;
    private 'os_version_key'?: string;
    private 'os_version'?: string;
    private 'os_bit'?: number;
    private 'os_type'?: string;
    public constructor(platform?: string, osVersionKey?: string, osVersion?: string, osBit?: number, osType?: string) { 
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
    public set osVersionKey(osVersionKey: string  | undefined) {
        this['os_version_key'] = osVersionKey;
    }
    public get osVersionKey(): string | undefined {
        return this['os_version_key'];
    }
    public withOsVersion(osVersion: string): OsVersionInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOsBit(osBit: number): OsVersionInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: number  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): number | undefined {
        return this['os_bit'];
    }
    public withOsType(osType: string): OsVersionInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
}