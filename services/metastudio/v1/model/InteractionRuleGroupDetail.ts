import { InteractionRuleDetailInfo } from './InteractionRuleDetailInfo';


export class InteractionRuleGroupDetail {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'interaction_rules'?: Array<InteractionRuleDetailInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupId(groupId: string): InteractionRuleGroupDetail {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): InteractionRuleGroupDetail {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withInteractionRules(interactionRules: Array<InteractionRuleDetailInfo>): InteractionRuleGroupDetail {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<InteractionRuleDetailInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<InteractionRuleDetailInfo> | undefined {
        return this['interaction_rules'];
    }
    public withCreateTime(createTime: string): InteractionRuleGroupDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): InteractionRuleGroupDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}