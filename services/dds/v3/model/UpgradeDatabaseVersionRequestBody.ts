

export class UpgradeDatabaseVersionRequestBody {
    private 'upgrade_mode'?: string;
    private 'is_delayed'?: boolean;
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
    public withIsDelayed(isDelayed: boolean): UpgradeDatabaseVersionRequestBody {
        this['is_delayed'] = isDelayed;
        return this;
    }
    public set isDelayed(isDelayed: boolean  | undefined) {
        this['is_delayed'] = isDelayed;
    }
    public get isDelayed(): boolean | undefined {
        return this['is_delayed'];
    }
}