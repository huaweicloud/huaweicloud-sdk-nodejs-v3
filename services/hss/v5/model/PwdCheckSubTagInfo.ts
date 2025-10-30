

export class PwdCheckSubTagInfo {
    private 'sub_tag'?: string;
    public checked?: string;
    private 'check_rule_ids'?: Array<string>;
    public constructor() { 
    }
    public withSubTag(subTag: string): PwdCheckSubTagInfo {
        this['sub_tag'] = subTag;
        return this;
    }
    public set subTag(subTag: string  | undefined) {
        this['sub_tag'] = subTag;
    }
    public get subTag(): string | undefined {
        return this['sub_tag'];
    }
    public withChecked(checked: string): PwdCheckSubTagInfo {
        this['checked'] = checked;
        return this;
    }
    public withCheckRuleIds(checkRuleIds: Array<string>): PwdCheckSubTagInfo {
        this['check_rule_ids'] = checkRuleIds;
        return this;
    }
    public set checkRuleIds(checkRuleIds: Array<string>  | undefined) {
        this['check_rule_ids'] = checkRuleIds;
    }
    public get checkRuleIds(): Array<string> | undefined {
        return this['check_rule_ids'];
    }
}