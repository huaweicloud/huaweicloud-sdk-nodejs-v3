

export class SwitchOnColdTableRequestBody {
    private 'switch_on'?: boolean;
    public constructor(switchOn?: boolean) { 
        this['switch_on'] = switchOn;
    }
    public withSwitchOn(switchOn: boolean): SwitchOnColdTableRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
}