

export class ScalingStrategyReqInfo {
    private 'flavor_switch'?: string;
    private 'read_only_switch'?: string;
    public constructor(flavorSwitch?: string, readOnlySwitch?: string) { 
        this['flavor_switch'] = flavorSwitch;
        this['read_only_switch'] = readOnlySwitch;
    }
    public withFlavorSwitch(flavorSwitch: string): ScalingStrategyReqInfo {
        this['flavor_switch'] = flavorSwitch;
        return this;
    }
    public set flavorSwitch(flavorSwitch: string  | undefined) {
        this['flavor_switch'] = flavorSwitch;
    }
    public get flavorSwitch(): string | undefined {
        return this['flavor_switch'];
    }
    public withReadOnlySwitch(readOnlySwitch: string): ScalingStrategyReqInfo {
        this['read_only_switch'] = readOnlySwitch;
        return this;
    }
    public set readOnlySwitch(readOnlySwitch: string  | undefined) {
        this['read_only_switch'] = readOnlySwitch;
    }
    public get readOnlySwitch(): string | undefined {
        return this['read_only_switch'];
    }
}