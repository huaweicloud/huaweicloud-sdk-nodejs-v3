

export class ComponentDetailInfo {
    private 'component_id'?: string;
    private 'component_name'?: string;
    private 'create_time'?: number;
    public description?: string;
    private 'history_version'?: string;
    public maintainer?: string;
    private 'time_zone'?: string;
    private 'update_time'?: number;
    public upgrade?: ComponentDetailInfoUpgradeEnum | string;
    private 'upgrade_fail_message'?: string;
    public version?: string;
    public constructor() { 
    }
    public withComponentId(componentId: string): ComponentDetailInfo {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentName(componentName: string): ComponentDetailInfo {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withCreateTime(createTime: number): ComponentDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): ComponentDetailInfo {
        this['description'] = description;
        return this;
    }
    public withHistoryVersion(historyVersion: string): ComponentDetailInfo {
        this['history_version'] = historyVersion;
        return this;
    }
    public set historyVersion(historyVersion: string  | undefined) {
        this['history_version'] = historyVersion;
    }
    public get historyVersion(): string | undefined {
        return this['history_version'];
    }
    public withMaintainer(maintainer: string): ComponentDetailInfo {
        this['maintainer'] = maintainer;
        return this;
    }
    public withTimeZone(timeZone: string): ComponentDetailInfo {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withUpdateTime(updateTime: number): ComponentDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpgrade(upgrade: ComponentDetailInfoUpgradeEnum | string): ComponentDetailInfo {
        this['upgrade'] = upgrade;
        return this;
    }
    public withUpgradeFailMessage(upgradeFailMessage: string): ComponentDetailInfo {
        this['upgrade_fail_message'] = upgradeFailMessage;
        return this;
    }
    public set upgradeFailMessage(upgradeFailMessage: string  | undefined) {
        this['upgrade_fail_message'] = upgradeFailMessage;
    }
    public get upgradeFailMessage(): string | undefined {
        return this['upgrade_fail_message'];
    }
    public withVersion(version: string): ComponentDetailInfo {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentDetailInfoUpgradeEnum {
    NEED_UPGRADE = 'NEED_UPGRADE',
    UPGRADING = 'UPGRADING',
    SUCCESS_UPGRADE = 'SUCCESS_UPGRADE',
    FAIL_UPGRADE = 'FAIL_UPGRADE'
}
