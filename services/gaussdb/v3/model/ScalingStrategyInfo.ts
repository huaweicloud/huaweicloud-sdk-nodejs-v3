

export class ScalingStrategyInfo {
    private 'flavor_switch'?: string;
    private 'read_only_switch'?: string;
    public constructor() { 
    }
    public withFlavorSwitch(flavorSwitch: string): ScalingStrategyInfo {
        this['flavor_switch'] = flavorSwitch;
        return this;
    }
    public set flavorSwitch(flavorSwitch: string  | undefined) {
        this['flavor_switch'] = flavorSwitch;
    }
    public get flavorSwitch(): string | undefined {
        return this['flavor_switch'];
    }
    public withReadOnlySwitch(readOnlySwitch: string): ScalingStrategyInfo {
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