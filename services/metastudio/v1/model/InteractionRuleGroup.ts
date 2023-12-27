import { InteractionRuleInfo } from './InteractionRuleInfo';


export class InteractionRuleGroup {
    private 'group_name'?: string;
    private 'interaction_rules'?: Array<InteractionRuleInfo>;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): InteractionRuleGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withInteractionRules(interactionRules: Array<InteractionRuleInfo>): InteractionRuleGroup {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<InteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<InteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
}