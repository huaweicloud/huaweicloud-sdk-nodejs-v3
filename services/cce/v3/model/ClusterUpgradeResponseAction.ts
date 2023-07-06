import { UpgradeStrategy } from './UpgradeStrategy';


export class ClusterUpgradeResponseAction {
    public version?: string;
    public targetVersion?: string;
    public targetPlatformVersion?: string;
    public strategy?: UpgradeStrategy;
    public config?: object;
    public constructor() { 
    }
    public withVersion(version: string): ClusterUpgradeResponseAction {
        this['version'] = version;
        return this;
    }
    public withTargetVersion(targetVersion: string): ClusterUpgradeResponseAction {
        this['targetVersion'] = targetVersion;
        return this;
    }
    public withTargetPlatformVersion(targetPlatformVersion: string): ClusterUpgradeResponseAction {
        this['targetPlatformVersion'] = targetPlatformVersion;
        return this;
    }
    public withStrategy(strategy: UpgradeStrategy): ClusterUpgradeResponseAction {
        this['strategy'] = strategy;
        return this;
    }
    public withConfig(config: object): ClusterUpgradeResponseAction {
        this['config'] = config;
        return this;
    }
}