import { RuleInstanceProperty } from './RuleInstanceProperty';


export class RuleInstanceContent {
    private 'group_name'?: string;
    public type?: string;
    private 'can_modify_when_inherit'?: boolean;
    public properties?: Array<RuleInstanceProperty>;
    public constructor(groupName?: string, type?: string, properties?: Array<RuleInstanceProperty>) { 
        this['group_name'] = groupName;
        this['type'] = type;
        this['properties'] = properties;
    }
    public withGroupName(groupName: string): RuleInstanceContent {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withType(type: string): RuleInstanceContent {
        this['type'] = type;
        return this;
    }
    public withCanModifyWhenInherit(canModifyWhenInherit: boolean): RuleInstanceContent {
        this['can_modify_when_inherit'] = canModifyWhenInherit;
        return this;
    }
    public set canModifyWhenInherit(canModifyWhenInherit: boolean  | undefined) {
        this['can_modify_when_inherit'] = canModifyWhenInherit;
    }
    public get canModifyWhenInherit(): boolean | undefined {
        return this['can_modify_when_inherit'];
    }
    public withProperties(properties: Array<RuleInstanceProperty>): RuleInstanceContent {
        this['properties'] = properties;
        return this;
    }
}