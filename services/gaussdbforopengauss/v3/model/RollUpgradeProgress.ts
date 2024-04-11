

export class RollUpgradeProgress {
    private 'upgraded_dn_group_numbers'?: string;
    private 'total_dn_group_numbers'?: string;
    private 'not_fully_upgraded_az'?: string;
    private 'already_upgraded_az'?: string;
    private 'az_description_map'?: { [key: string]: string; };
    public constructor() { 
    }
    public withUpgradedDnGroupNumbers(upgradedDnGroupNumbers: string): RollUpgradeProgress {
        this['upgraded_dn_group_numbers'] = upgradedDnGroupNumbers;
        return this;
    }
    public set upgradedDnGroupNumbers(upgradedDnGroupNumbers: string  | undefined) {
        this['upgraded_dn_group_numbers'] = upgradedDnGroupNumbers;
    }
    public get upgradedDnGroupNumbers(): string | undefined {
        return this['upgraded_dn_group_numbers'];
    }
    public withTotalDnGroupNumbers(totalDnGroupNumbers: string): RollUpgradeProgress {
        this['total_dn_group_numbers'] = totalDnGroupNumbers;
        return this;
    }
    public set totalDnGroupNumbers(totalDnGroupNumbers: string  | undefined) {
        this['total_dn_group_numbers'] = totalDnGroupNumbers;
    }
    public get totalDnGroupNumbers(): string | undefined {
        return this['total_dn_group_numbers'];
    }
    public withNotFullyUpgradedAz(notFullyUpgradedAz: string): RollUpgradeProgress {
        this['not_fully_upgraded_az'] = notFullyUpgradedAz;
        return this;
    }
    public set notFullyUpgradedAz(notFullyUpgradedAz: string  | undefined) {
        this['not_fully_upgraded_az'] = notFullyUpgradedAz;
    }
    public get notFullyUpgradedAz(): string | undefined {
        return this['not_fully_upgraded_az'];
    }
    public withAlreadyUpgradedAz(alreadyUpgradedAz: string): RollUpgradeProgress {
        this['already_upgraded_az'] = alreadyUpgradedAz;
        return this;
    }
    public set alreadyUpgradedAz(alreadyUpgradedAz: string  | undefined) {
        this['already_upgraded_az'] = alreadyUpgradedAz;
    }
    public get alreadyUpgradedAz(): string | undefined {
        return this['already_upgraded_az'];
    }
    public withAzDescriptionMap(azDescriptionMap: { [key: string]: string; }): RollUpgradeProgress {
        this['az_description_map'] = azDescriptionMap;
        return this;
    }
    public set azDescriptionMap(azDescriptionMap: { [key: string]: string; }  | undefined) {
        this['az_description_map'] = azDescriptionMap;
    }
    public get azDescriptionMap(): { [key: string]: string; } | undefined {
        return this['az_description_map'];
    }
}