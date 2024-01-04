import { UpgradeFeatureGates } from './UpgradeFeatureGates';
import { UpgradeInfoStatus } from './UpgradeInfoStatus';
import { UpgradeVersionInfo } from './UpgradeVersionInfo';


export class UpgradeInfoSpec {
    public lastUpgradeInfo?: UpgradeInfoStatus;
    public versionInfo?: UpgradeVersionInfo;
    public upgradeFeatureGates?: UpgradeFeatureGates;
    public constructor() { 
    }
    public withLastUpgradeInfo(lastUpgradeInfo: UpgradeInfoStatus): UpgradeInfoSpec {
        this['lastUpgradeInfo'] = lastUpgradeInfo;
        return this;
    }
    public withVersionInfo(versionInfo: UpgradeVersionInfo): UpgradeInfoSpec {
        this['versionInfo'] = versionInfo;
        return this;
    }
    public withUpgradeFeatureGates(upgradeFeatureGates: UpgradeFeatureGates): UpgradeInfoSpec {
        this['upgradeFeatureGates'] = upgradeFeatureGates;
        return this;
    }
}