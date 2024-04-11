import { UpgradeActionInfo } from './UpgradeActionInfo';


export class UpgradeTypeInfo {
    private 'upgrade_type'?: UpgradeTypeInfoUpgradeTypeEnum | string;
    public enable?: boolean;
    private 'upgrade_action_list'?: Array<UpgradeActionInfo>;
    public constructor() { 
    }
    public withUpgradeType(upgradeType: UpgradeTypeInfoUpgradeTypeEnum | string): UpgradeTypeInfo {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: UpgradeTypeInfoUpgradeTypeEnum | string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): UpgradeTypeInfoUpgradeTypeEnum | string | undefined {
        return this['upgrade_type'];
    }
    public withEnable(enable: boolean): UpgradeTypeInfo {
        this['enable'] = enable;
        return this;
    }
    public withUpgradeActionList(upgradeActionList: Array<UpgradeActionInfo>): UpgradeTypeInfo {
        this['upgrade_action_list'] = upgradeActionList;
        return this;
    }
    public set upgradeActionList(upgradeActionList: Array<UpgradeActionInfo>  | undefined) {
        this['upgrade_action_list'] = upgradeActionList;
    }
    public get upgradeActionList(): Array<UpgradeActionInfo> | undefined {
        return this['upgrade_action_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeTypeInfoUpgradeTypeEnum {
    GREY = 'grey',
    INPLACE = 'inplace',
    HOTFIX = 'hotfix'
}
