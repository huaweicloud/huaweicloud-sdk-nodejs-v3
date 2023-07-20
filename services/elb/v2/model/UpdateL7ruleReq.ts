

export class UpdateL7ruleReq {
    private 'compare_type'?: string;
    private 'admin_state_up'?: boolean;
    public invert?: boolean;
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withCompareType(compareType: string): UpdateL7ruleReq {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateL7ruleReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withInvert(invert: boolean): UpdateL7ruleReq {
        this['invert'] = invert;
        return this;
    }
    public withKey(key: string): UpdateL7ruleReq {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UpdateL7ruleReq {
        this['value'] = value;
        return this;
    }
}