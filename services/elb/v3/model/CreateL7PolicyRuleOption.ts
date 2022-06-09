import { CreateRuleCondition } from './CreateRuleCondition';


export class CreateL7PolicyRuleOption {
    private 'admin_state_up'?: boolean | undefined;
    public type: string;
    private 'compare_type': string | undefined;
    public invert?: boolean;
    public key?: string;
    public value: string;
    public conditions?: Array<CreateRuleCondition>;
    public constructor(type?: any, compareType?: any, value?: any) { 
        this['type'] = type;
        this['compare_type'] = compareType;
        this['value'] = value;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7PolicyRuleOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withType(type: string): CreateL7PolicyRuleOption {
        this['type'] = type;
        return this;
    }
    public withCompareType(compareType: string): CreateL7PolicyRuleOption {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withInvert(invert: boolean): CreateL7PolicyRuleOption {
        this['invert'] = invert;
        return this;
    }
    public withKey(key: string): CreateL7PolicyRuleOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateL7PolicyRuleOption {
        this['value'] = value;
        return this;
    }
    public withConditions(conditions: Array<CreateRuleCondition>): CreateL7PolicyRuleOption {
        this['conditions'] = conditions;
        return this;
    }
}