

export class ModifyPlaybookVersionInfo {
    public description?: string;
    private 'workspace_id'?: string;
    private 'playbook_id'?: string;
    private 'dataclass_id'?: string;
    private 'rule_enable'?: boolean;
    public enabled?: boolean;
    public status?: string;
    private 'rule_id'?: string;
    private 'trigger_type'?: string;
    private 'dataobject_create'?: boolean;
    private 'dataobject_update'?: boolean;
    private 'dataobject_delete'?: boolean;
    private 'action_strategy'?: string;
    public constructor() { 
    }
    public withDescription(description: string): ModifyPlaybookVersionInfo {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ModifyPlaybookVersionInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPlaybookId(playbookId: string): ModifyPlaybookVersionInfo {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withDataclassId(dataclassId: string): ModifyPlaybookVersionInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withRuleEnable(ruleEnable: boolean): ModifyPlaybookVersionInfo {
        this['rule_enable'] = ruleEnable;
        return this;
    }
    public set ruleEnable(ruleEnable: boolean  | undefined) {
        this['rule_enable'] = ruleEnable;
    }
    public get ruleEnable(): boolean | undefined {
        return this['rule_enable'];
    }
    public withEnabled(enabled: boolean): ModifyPlaybookVersionInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withStatus(status: string): ModifyPlaybookVersionInfo {
        this['status'] = status;
        return this;
    }
    public withRuleId(ruleId: string): ModifyPlaybookVersionInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withTriggerType(triggerType: string): ModifyPlaybookVersionInfo {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withDataobjectCreate(dataobjectCreate: boolean): ModifyPlaybookVersionInfo {
        this['dataobject_create'] = dataobjectCreate;
        return this;
    }
    public set dataobjectCreate(dataobjectCreate: boolean  | undefined) {
        this['dataobject_create'] = dataobjectCreate;
    }
    public get dataobjectCreate(): boolean | undefined {
        return this['dataobject_create'];
    }
    public withDataobjectUpdate(dataobjectUpdate: boolean): ModifyPlaybookVersionInfo {
        this['dataobject_update'] = dataobjectUpdate;
        return this;
    }
    public set dataobjectUpdate(dataobjectUpdate: boolean  | undefined) {
        this['dataobject_update'] = dataobjectUpdate;
    }
    public get dataobjectUpdate(): boolean | undefined {
        return this['dataobject_update'];
    }
    public withDataobjectDelete(dataobjectDelete: boolean): ModifyPlaybookVersionInfo {
        this['dataobject_delete'] = dataobjectDelete;
        return this;
    }
    public set dataobjectDelete(dataobjectDelete: boolean  | undefined) {
        this['dataobject_delete'] = dataobjectDelete;
    }
    public get dataobjectDelete(): boolean | undefined {
        return this['dataobject_delete'];
    }
    public withActionStrategy(actionStrategy: string): ModifyPlaybookVersionInfo {
        this['action_strategy'] = actionStrategy;
        return this;
    }
    public set actionStrategy(actionStrategy: string  | undefined) {
        this['action_strategy'] = actionStrategy;
    }
    public get actionStrategy(): string | undefined {
        return this['action_strategy'];
    }
}