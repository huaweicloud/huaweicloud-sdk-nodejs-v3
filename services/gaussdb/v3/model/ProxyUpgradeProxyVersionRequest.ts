

export class ProxyUpgradeProxyVersionRequest {
    private 'source_version'?: string;
    private 'target_version'?: string;
    public constructor(sourceVersion?: string, targetVersion?: string) { 
        this['source_version'] = sourceVersion;
        this['target_version'] = targetVersion;
    }
    public withSourceVersion(sourceVersion: string): ProxyUpgradeProxyVersionRequest {
        this['source_version'] = sourceVersion;
        return this;
    }
    public set sourceVersion(sourceVersion: string  | undefined) {
        this['source_version'] = sourceVersion;
    }
    public get sourceVersion(): string | undefined {
        return this['source_version'];
    }
    public withTargetVersion(targetVersion: string): ProxyUpgradeProxyVersionRequest {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
}