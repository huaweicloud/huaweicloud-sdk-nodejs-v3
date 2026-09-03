import { EngineRiskDesc } from './EngineRiskDesc';


export class ProxyEngineVersionInfo {
    private 'current_engine_version'?: string;
    private 'target_engine_version'?: string;
    private 'upgrade_flag'?: boolean;
    private 'proxy_id'?: string;
    public risks?: Array<EngineRiskDesc>;
    public constructor() { 
    }
    public withCurrentEngineVersion(currentEngineVersion: string): ProxyEngineVersionInfo {
        this['current_engine_version'] = currentEngineVersion;
        return this;
    }
    public set currentEngineVersion(currentEngineVersion: string  | undefined) {
        this['current_engine_version'] = currentEngineVersion;
    }
    public get currentEngineVersion(): string | undefined {
        return this['current_engine_version'];
    }
    public withTargetEngineVersion(targetEngineVersion: string): ProxyEngineVersionInfo {
        this['target_engine_version'] = targetEngineVersion;
        return this;
    }
    public set targetEngineVersion(targetEngineVersion: string  | undefined) {
        this['target_engine_version'] = targetEngineVersion;
    }
    public get targetEngineVersion(): string | undefined {
        return this['target_engine_version'];
    }
    public withUpgradeFlag(upgradeFlag: boolean): ProxyEngineVersionInfo {
        this['upgrade_flag'] = upgradeFlag;
        return this;
    }
    public set upgradeFlag(upgradeFlag: boolean  | undefined) {
        this['upgrade_flag'] = upgradeFlag;
    }
    public get upgradeFlag(): boolean | undefined {
        return this['upgrade_flag'];
    }
    public withProxyId(proxyId: string): ProxyEngineVersionInfo {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withRisks(risks: Array<EngineRiskDesc>): ProxyEngineVersionInfo {
        this['risks'] = risks;
        return this;
    }
}