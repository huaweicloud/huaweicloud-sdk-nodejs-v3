import { CreateAction } from './CreateAction';
import { CreateRuleInfo } from './CreateRuleInfo';


export class CreatePlaybookVersionInfo {
    public description?: string;
    private 'workspace_id'?: string;
    private 'playbook_id'?: string;
    public actions?: Array<CreateAction>;
    private 'dataclass_id'?: string;
    private 'rule_enable'?: boolean;
    private 'rule_id'?: string;
    private 'trigger_type'?: string;
    private 'dataobject_create'?: boolean;
    private 'dataobject_update'?: boolean;
    private 'dataobject_delete'?: boolean;
    private 'action_strategy'?: string;
    public rule?: CreateRuleInfo;
    public constructor(dataclassId?: string) { 
        this['dataclass_id'] = dataclassId;
    }
    public withDescription(description: string): CreatePlaybookVersionInfo {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): CreatePlaybookVersionInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPlaybookId(playbookId: string): CreatePlaybookVersionInfo {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withActions(actions: Array<CreateAction>): CreatePlaybookVersionInfo {
        this['actions'] = actions;
        return this;
    }
    public withDataclassId(dataclassId: string): CreatePlaybookVersionInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withRuleEnable(ruleEnable: boolean): CreatePlaybookVersionInfo {
        this['rule_enable'] = ruleEnable;
        return this;
    }
    public set ruleEnable(ruleEnable: boolean  | undefined) {
        this['rule_enable'] = ruleEnable;
    }
    public get ruleEnable(): boolean | undefined {
        return this['rule_enable'];
    }
    public withRuleId(ruleId: string): CreatePlaybookVersionInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withTriggerType(triggerType: string): CreatePlaybookVersionInfo {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withDataobjectCreate(dataobjectCreate: boolean): CreatePlaybookVersionInfo {
        this['dataobject_create'] = dataobjectCreate;
        return this;
    }
    public set dataobjectCreate(dataobjectCreate: boolean  | undefined) {
        this['dataobject_create'] = dataobjectCreate;
    }
    public get dataobjectCreate(): boolean | undefined {
        return this['dataobject_create'];
    }
    public withDataobjectUpdate(dataobjectUpdate: boolean): CreatePlaybookVersionInfo {
        this['dataobject_update'] = dataobjectUpdate;
        return this;
    }
    public set dataobjectUpdate(dataobjectUpdate: boolean  | undefined) {
        this['dataobject_update'] = dataobjectUpdate;
    }
    public get dataobjectUpdate(): boolean | undefined {
        return this['dataobject_update'];
    }
    public withDataobjectDelete(dataobjectDelete: boolean): CreatePlaybookVersionInfo {
        this['dataobject_delete'] = dataobjectDelete;
        return this;
    }
    public set dataobjectDelete(dataobjectDelete: boolean  | undefined) {
        this['dataobject_delete'] = dataobjectDelete;
    }
    public get dataobjectDelete(): boolean | undefined {
        return this['dataobject_delete'];
    }
    public withActionStrategy(actionStrategy: string): CreatePlaybookVersionInfo {
        this['action_strategy'] = actionStrategy;
        return this;
    }
    public set actionStrategy(actionStrategy: string  | undefined) {
        this['action_strategy'] = actionStrategy;
    }
    public get actionStrategy(): string | undefined {
        return this['action_strategy'];
    }
    public withRule(rule: CreateRuleInfo): CreatePlaybookVersionInfo {
        this['rule'] = rule;
        return this;
    }
}