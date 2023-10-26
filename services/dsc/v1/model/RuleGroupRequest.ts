

export class RuleGroupRequest {
    public category?: RuleGroupRequestCategoryEnum | string;
    private 'default_status'?: boolean;
    private 'group_desc'?: string;
    private 'group_name'?: string;
    public id?: string;
    private 'rule_ids'?: Array<string>;
    public constructor() { 
    }
    public withCategory(category: RuleGroupRequestCategoryEnum | string): RuleGroupRequest {
        this['category'] = category;
        return this;
    }
    public withDefaultStatus(defaultStatus: boolean): RuleGroupRequest {
        this['default_status'] = defaultStatus;
        return this;
    }
    public set defaultStatus(defaultStatus: boolean  | undefined) {
        this['default_status'] = defaultStatus;
    }
    public get defaultStatus(): boolean | undefined {
        return this['default_status'];
    }
    public withGroupDesc(groupDesc: string): RuleGroupRequest {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withGroupName(groupName: string): RuleGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withId(id: string): RuleGroupRequest {
        this['id'] = id;
        return this;
    }
    public withRuleIds(ruleIds: Array<string>): RuleGroupRequest {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuleGroupRequestCategoryEnum {
    BUILT_IN = 'BUILT_IN',
    BUILT_SELF = 'BUILT_SELF'
}
