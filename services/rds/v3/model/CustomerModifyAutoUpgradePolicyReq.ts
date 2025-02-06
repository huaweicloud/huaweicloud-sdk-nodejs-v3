

export class CustomerModifyAutoUpgradePolicyReq {
    private 'switch_option'?: boolean;
    public constructor(switchOption?: boolean) { 
        this['switch_option'] = switchOption;
    }
    public withSwitchOption(switchOption: boolean): CustomerModifyAutoUpgradePolicyReq {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
}