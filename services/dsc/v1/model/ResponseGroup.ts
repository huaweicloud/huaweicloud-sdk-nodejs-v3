

export class ResponseGroup {
    public category?: ResponseGroupCategoryEnum | string;
    private 'delete_allowed'?: boolean;
    private 'group_desc'?: string;
    private 'group_name'?: string;
    public id?: string;
    private 'rule_names'?: string;
    private 'task_names'?: string;
    private 'is_default'?: boolean;
    public constructor() { 
    }
    public withCategory(category: ResponseGroupCategoryEnum | string): ResponseGroup {
        this['category'] = category;
        return this;
    }
    public withDeleteAllowed(deleteAllowed: boolean): ResponseGroup {
        this['delete_allowed'] = deleteAllowed;
        return this;
    }
    public set deleteAllowed(deleteAllowed: boolean  | undefined) {
        this['delete_allowed'] = deleteAllowed;
    }
    public get deleteAllowed(): boolean | undefined {
        return this['delete_allowed'];
    }
    public withGroupDesc(groupDesc: string): ResponseGroup {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withGroupName(groupName: string): ResponseGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withId(id: string): ResponseGroup {
        this['id'] = id;
        return this;
    }
    public withRuleNames(ruleNames: string): ResponseGroup {
        this['rule_names'] = ruleNames;
        return this;
    }
    public set ruleNames(ruleNames: string  | undefined) {
        this['rule_names'] = ruleNames;
    }
    public get ruleNames(): string | undefined {
        return this['rule_names'];
    }
    public withTaskNames(taskNames: string): ResponseGroup {
        this['task_names'] = taskNames;
        return this;
    }
    public set taskNames(taskNames: string  | undefined) {
        this['task_names'] = taskNames;
    }
    public get taskNames(): string | undefined {
        return this['task_names'];
    }
    public withIsDefault(isDefault: boolean): ResponseGroup {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseGroupCategoryEnum {
    BUILT_IN = 'BUILT_IN',
    BUILT_SELF = 'BUILT_SELF'
}
