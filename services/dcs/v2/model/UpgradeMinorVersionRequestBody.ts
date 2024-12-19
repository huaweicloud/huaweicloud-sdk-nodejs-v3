

export class UpgradeMinorVersionRequestBody {
    private 'proxy_minor_version'?: string;
    private 'engine_minor_version'?: string;
    public constructor() { 
    }
    public withProxyMinorVersion(proxyMinorVersion: string): UpgradeMinorVersionRequestBody {
        this['proxy_minor_version'] = proxyMinorVersion;
        return this;
    }
    public set proxyMinorVersion(proxyMinorVersion: string  | undefined) {
        this['proxy_minor_version'] = proxyMinorVersion;
    }
    public get proxyMinorVersion(): string | undefined {
        return this['proxy_minor_version'];
    }
    public withEngineMinorVersion(engineMinorVersion: string): UpgradeMinorVersionRequestBody {
        this['engine_minor_version'] = engineMinorVersion;
        return this;
    }
    public set engineMinorVersion(engineMinorVersion: string  | undefined) {
        this['engine_minor_version'] = engineMinorVersion;
    }
    public get engineMinorVersion(): string | undefined {
        return this['engine_minor_version'];
    }
}