

export class PluginInstallBasicParam {
    private 'install_version'?: string;
    private 'domain_ak'?: string;
    private 'domain_sk'?: string;
    public constructor() { 
    }
    public withInstallVersion(installVersion: string): PluginInstallBasicParam {
        this['install_version'] = installVersion;
        return this;
    }
    public set installVersion(installVersion: string  | undefined) {
        this['install_version'] = installVersion;
    }
    public get installVersion(): string | undefined {
        return this['install_version'];
    }
    public withDomainAk(domainAk: string): PluginInstallBasicParam {
        this['domain_ak'] = domainAk;
        return this;
    }
    public set domainAk(domainAk: string  | undefined) {
        this['domain_ak'] = domainAk;
    }
    public get domainAk(): string | undefined {
        return this['domain_ak'];
    }
    public withDomainSk(domainSk: string): PluginInstallBasicParam {
        this['domain_sk'] = domainSk;
        return this;
    }
    public set domainSk(domainSk: string  | undefined) {
        this['domain_sk'] = domainSk;
    }
    public get domainSk(): string | undefined {
        return this['domain_sk'];
    }
}