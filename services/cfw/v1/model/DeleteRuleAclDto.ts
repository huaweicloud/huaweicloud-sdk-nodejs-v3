

export class DeleteRuleAclDto {
    private 'object_id'?: string;
    private 'rule_ids'?: Array<string>;
    public constructor(objectId?: string, ruleIds?: Array<string>) { 
        this['object_id'] = objectId;
        this['rule_ids'] = ruleIds;
    }
    public withObjectId(objectId: string): DeleteRuleAclDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withRuleIds(ruleIds: Array<string>): DeleteRuleAclDto {
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