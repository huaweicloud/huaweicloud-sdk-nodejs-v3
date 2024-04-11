

export class UpgradeActionInfo {
    private 'upgrade_action'?: UpgradeActionInfoUpgradeActionEnum | string;
    public enable?: boolean;
    public constructor() { 
    }
    public withUpgradeAction(upgradeAction: UpgradeActionInfoUpgradeActionEnum | string): UpgradeActionInfo {
        this['upgrade_action'] = upgradeAction;
        return this;
    }
    public set upgradeAction(upgradeAction: UpgradeActionInfoUpgradeActionEnum | string  | undefined) {
        this['upgrade_action'] = upgradeAction;
    }
    public get upgradeAction(): UpgradeActionInfoUpgradeActionEnum | string | undefined {
        return this['upgrade_action'];
    }
    public withEnable(enable: boolean): UpgradeActionInfo {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeActionInfoUpgradeActionEnum {
    UPGRADE = 'upgrade',
    UPGRADEAUTOCOMMIT = 'upgradeAutoCommit',
    COMMIT = 'commit',
    ROLLBACK = 'rollback'
}
