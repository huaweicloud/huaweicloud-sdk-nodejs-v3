

export class IacScanRequestInfo {
    private 'configuration_mode'?: string;
    public path?: string;
    public constructor() { 
    }
    public withConfigurationMode(configurationMode: string): IacScanRequestInfo {
        this['configuration_mode'] = configurationMode;
        return this;
    }
    public set configurationMode(configurationMode: string  | undefined) {
        this['configuration_mode'] = configurationMode;
    }
    public get configurationMode(): string | undefined {
        return this['configuration_mode'];
    }
    public withPath(path: string): IacScanRequestInfo {
        this['path'] = path;
        return this;
    }
}