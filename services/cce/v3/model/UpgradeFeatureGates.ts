

export class UpgradeFeatureGates {
    public supportUpgradePageV4?: boolean;
    public constructor() { 
    }
    public withSupportUpgradePageV4(supportUpgradePageV4: boolean): UpgradeFeatureGates {
        this['supportUpgradePageV4'] = supportUpgradePageV4;
        return this;
    }
}