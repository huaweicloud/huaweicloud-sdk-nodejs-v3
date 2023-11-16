import { RuleProperty } from './RuleProperty';


export class RuleContent {
    private 'group_name'?: string;
    private 'can_modify_when_inherit'?: boolean;
    public properties?: Array<RuleProperty>;
    public constructor(groupName?: string, properties?: Array<RuleProperty>) { 
        this['group_name'] = groupName;
        this['properties'] = properties;
    }
    public withGroupName(groupName: string): RuleContent {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withCanModifyWhenInherit(canModifyWhenInherit: boolean): RuleContent {
        this['can_modify_when_inherit'] = canModifyWhenInherit;
        return this;
    }
    public set canModifyWhenInherit(canModifyWhenInherit: boolean  | undefined) {
        this['can_modify_when_inherit'] = canModifyWhenInherit;
    }
    public get canModifyWhenInherit(): boolean | undefined {
        return this['can_modify_when_inherit'];
    }
    public withProperties(properties: Array<RuleProperty>): RuleContent {
        this['properties'] = properties;
        return this;
    }
}