

export class SubAccountControlConfig {
    private 'separately_controlled'?: boolean;
    private 'sub_account_type'?: string;
    public constructor() { 
    }
    public withSeparatelyControlled(separatelyControlled: boolean): SubAccountControlConfig {
        this['separately_controlled'] = separatelyControlled;
        return this;
    }
    public set separatelyControlled(separatelyControlled: boolean  | undefined) {
        this['separately_controlled'] = separatelyControlled;
    }
    public get separatelyControlled(): boolean | undefined {
        return this['separately_controlled'];
    }
    public withSubAccountType(subAccountType: string): SubAccountControlConfig {
        this['sub_account_type'] = subAccountType;
        return this;
    }
    public set subAccountType(subAccountType: string  | undefined) {
        this['sub_account_type'] = subAccountType;
    }
    public get subAccountType(): string | undefined {
        return this['sub_account_type'];
    }
}