

export class SupportedDevice {
    public vendor?: string;
    public platform?: string;
    public version?: string;
    public constructor() { 
    }
    public withVendor(vendor: string): SupportedDevice {
        this['vendor'] = vendor;
        return this;
    }
    public withPlatform(platform: string): SupportedDevice {
        this['platform'] = platform;
        return this;
    }
    public withVersion(version: string): SupportedDevice {
        this['version'] = version;
        return this;
    }
}