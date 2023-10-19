

export class UpdateSecurityPolciesActionDto {
    private 'object_id'?: string;
    public action?: string;
    private 'rule_ids'?: Array<string>;
    public constructor(objectId?: string, action?: string, ruleIds?: Array<string>) { 
        this['object_id'] = objectId;
        this['action'] = action;
        this['rule_ids'] = ruleIds;
    }
    public withObjectId(objectId: string): UpdateSecurityPolciesActionDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withAction(action: string): UpdateSecurityPolciesActionDto {
        this['action'] = action;
        return this;
    }
    public withRuleIds(ruleIds: Array<string>): UpdateSecurityPolciesActionDto {
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