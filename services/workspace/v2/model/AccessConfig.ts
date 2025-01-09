

export class AccessConfig {
    private 'access_mode'?: string;
    private 'internet_access_address'?: string;
    private 'internet_access_port'?: string;
    private 'dedicated_access_address'?: string;
    private 'dedicated_access_standby_address'?: Array<string>;
    private 'standby_address_result_code'?: string;
    private 'dedicated_cidrs'?: string;
    public constructor() { 
    }
    public withAccessMode(accessMode: string): AccessConfig {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withInternetAccessAddress(internetAccessAddress: string): AccessConfig {
        this['internet_access_address'] = internetAccessAddress;
        return this;
    }
    public set internetAccessAddress(internetAccessAddress: string  | undefined) {
        this['internet_access_address'] = internetAccessAddress;
    }
    public get internetAccessAddress(): string | undefined {
        return this['internet_access_address'];
    }
    public withInternetAccessPort(internetAccessPort: string): AccessConfig {
        this['internet_access_port'] = internetAccessPort;
        return this;
    }
    public set internetAccessPort(internetAccessPort: string  | undefined) {
        this['internet_access_port'] = internetAccessPort;
    }
    public get internetAccessPort(): string | undefined {
        return this['internet_access_port'];
    }
    public withDedicatedAccessAddress(dedicatedAccessAddress: string): AccessConfig {
        this['dedicated_access_address'] = dedicatedAccessAddress;
        return this;
    }
    public set dedicatedAccessAddress(dedicatedAccessAddress: string  | undefined) {
        this['dedicated_access_address'] = dedicatedAccessAddress;
    }
    public get dedicatedAccessAddress(): string | undefined {
        return this['dedicated_access_address'];
    }
    public withDedicatedAccessStandbyAddress(dedicatedAccessStandbyAddress: Array<string>): AccessConfig {
        this['dedicated_access_standby_address'] = dedicatedAccessStandbyAddress;
        return this;
    }
    public set dedicatedAccessStandbyAddress(dedicatedAccessStandbyAddress: Array<string>  | undefined) {
        this['dedicated_access_standby_address'] = dedicatedAccessStandbyAddress;
    }
    public get dedicatedAccessStandbyAddress(): Array<string> | undefined {
        return this['dedicated_access_standby_address'];
    }
    public withStandbyAddressResultCode(standbyAddressResultCode: string): AccessConfig {
        this['standby_address_result_code'] = standbyAddressResultCode;
        return this;
    }
    public set standbyAddressResultCode(standbyAddressResultCode: string  | undefined) {
        this['standby_address_result_code'] = standbyAddressResultCode;
    }
    public get standbyAddressResultCode(): string | undefined {
        return this['standby_address_result_code'];
    }
    public withDedicatedCidrs(dedicatedCidrs: string): AccessConfig {
        this['dedicated_cidrs'] = dedicatedCidrs;
        return this;
    }
    public set dedicatedCidrs(dedicatedCidrs: string  | undefined) {
        this['dedicated_cidrs'] = dedicatedCidrs;
    }
    public get dedicatedCidrs(): string | undefined {
        return this['dedicated_cidrs'];
    }
}