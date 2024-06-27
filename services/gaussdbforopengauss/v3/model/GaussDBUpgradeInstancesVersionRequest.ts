

export class GaussDBUpgradeInstancesVersionRequest {
    private 'instance_ids'?: Array<string>;
    private 'upgrade_type'?: GaussDBUpgradeInstancesVersionRequestUpgradeTypeEnum | string;
    private 'upgrade_action'?: GaussDBUpgradeInstancesVersionRequestUpgradeActionEnum | string;
    private 'target_version'?: string;
    public constructor(upgradeType?: string) { 
        this['upgrade_type'] = upgradeType;
    }
    public withInstanceIds(instanceIds: Array<string>): GaussDBUpgradeInstancesVersionRequest {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withUpgradeType(upgradeType: GaussDBUpgradeInstancesVersionRequestUpgradeTypeEnum | string): GaussDBUpgradeInstancesVersionRequest {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: GaussDBUpgradeInstancesVersionRequestUpgradeTypeEnum | string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): GaussDBUpgradeInstancesVersionRequestUpgradeTypeEnum | string | undefined {
        return this['upgrade_type'];
    }
    public withUpgradeAction(upgradeAction: GaussDBUpgradeInstancesVersionRequestUpgradeActionEnum | string): GaussDBUpgradeInstancesVersionRequest {
        this['upgrade_action'] = upgradeAction;
        return this;
    }
    public set upgradeAction(upgradeAction: GaussDBUpgradeInstancesVersionRequestUpgradeActionEnum | string  | undefined) {
        this['upgrade_action'] = upgradeAction;
    }
    public get upgradeAction(): GaussDBUpgradeInstancesVersionRequestUpgradeActionEnum | string | undefined {
        return this['upgrade_action'];
    }
    public withTargetVersion(targetVersion: string): GaussDBUpgradeInstancesVersionRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum GaussDBUpgradeInstancesVersionRequestUpgradeTypeEnum {
    INPLACE = 'inplace',
    GREY = 'grey',
    HOTFIX = 'hotfix'
}
/**
    * @export
    * @enum {string}
    */
export enum GaussDBUpgradeInstancesVersionRequestUpgradeActionEnum {
    UPGRADEAUTOCOMMIT = 'upgradeAutoCommit',
    UPGRADE = 'upgrade',
    COMMIT = 'commit',
    ROLLBACK = 'rollback'
}
