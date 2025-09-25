

export class HotfixDeployMode {
    private 'default_upgrade'?: boolean;
    private 'update_time'?: number;
    public mode?: HotfixDeployModeModeEnum | string;
    public constructor() { 
    }
    public withDefaultUpgrade(defaultUpgrade: boolean): HotfixDeployMode {
        this['default_upgrade'] = defaultUpgrade;
        return this;
    }
    public set defaultUpgrade(defaultUpgrade: boolean  | undefined) {
        this['default_upgrade'] = defaultUpgrade;
    }
    public get defaultUpgrade(): boolean | undefined {
        return this['default_upgrade'];
    }
    public withUpdateTime(updateTime: number): HotfixDeployMode {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withMode(mode: HotfixDeployModeModeEnum | string): HotfixDeployMode {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HotfixDeployModeModeEnum {
    CENTRALIZATION_STANDARD = 'centralization_standard',
    DISTRIBUTED = 'distributed'
}
