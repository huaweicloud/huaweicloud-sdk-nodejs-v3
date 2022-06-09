import { UpdateRuleCondition } from './UpdateRuleCondition';


export class UpdateL7RuleOption {
    private 'admin_state_up'?: boolean | undefined;
    private 'compare_type'?: string | undefined;
    public invert?: boolean;
    public key?: string;
    public value?: string;
    public conditions?: Array<UpdateRuleCondition>;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateL7RuleOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withCompareType(compareType: string): UpdateL7RuleOption {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withInvert(invert: boolean): UpdateL7RuleOption {
        this['invert'] = invert;
        return this;
    }
    public withKey(key: string): UpdateL7RuleOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): UpdateL7RuleOption {
        this['value'] = value;
        return this;
    }
    public withConditions(conditions: Array<UpdateRuleCondition>): UpdateL7RuleOption {
        this['conditions'] = conditions;
        return this;
    }
}