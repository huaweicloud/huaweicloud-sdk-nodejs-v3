

export class UpgradeDatabaseVersionRequestBody {
    private 'upgrade_mode'?: string;
    public constructor() { 
    }
    public withUpgradeMode(upgradeMode: string): UpgradeDatabaseVersionRequestBody {
        this['upgrade_mode'] = upgradeMode;
        return this;
    }
    public set upgradeMode(upgradeMode: string  | undefined) {
        this['upgrade_mode'] = upgradeMode;
    }
    public get upgradeMode(): string | undefined {
        return this['upgrade_mode'];
    }
}