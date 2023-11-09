

export class PlaybookVersionListEntity {
    public id?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'project_id'?: string;
    private 'creator_id'?: string;
    private 'modifier_id'?: string;
    private 'playbook_id'?: string;
    public version?: string;
    public enabled?: boolean;
    public status?: string;
    private 'action_strategy'?: string;
    private 'rule_enable'?: boolean;
    private 'dataclass_id'?: string;
    private 'trigger_type'?: string;
    private 'dataobject_create'?: boolean;
    private 'dataobject_update'?: boolean;
    private 'dataobject_delete'?: boolean;
    private 'version_type'?: number;
    private 'rule_id'?: string;
    private 'dataclass_name'?: string;
    private 'approve_name'?: string;
    public constructor() { 
    }
    public withId(id: string): PlaybookVersionListEntity {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): PlaybookVersionListEntity {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): PlaybookVersionListEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): PlaybookVersionListEntity {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): PlaybookVersionListEntity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatorId(creatorId: string): PlaybookVersionListEntity {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withModifierId(modifierId: string): PlaybookVersionListEntity {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withPlaybookId(playbookId: string): PlaybookVersionListEntity {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withVersion(version: string): PlaybookVersionListEntity {
        this['version'] = version;
        return this;
    }
    public withEnabled(enabled: boolean): PlaybookVersionListEntity {
        this['enabled'] = enabled;
        return this;
    }
    public withStatus(status: string): PlaybookVersionListEntity {
        this['status'] = status;
        return this;
    }
    public withActionStrategy(actionStrategy: string): PlaybookVersionListEntity {
        this['action_strategy'] = actionStrategy;
        return this;
    }
    public set actionStrategy(actionStrategy: string  | undefined) {
        this['action_strategy'] = actionStrategy;
    }
    public get actionStrategy(): string | undefined {
        return this['action_strategy'];
    }
    public withRuleEnable(ruleEnable: boolean): PlaybookVersionListEntity {
        this['rule_enable'] = ruleEnable;
        return this;
    }
    public set ruleEnable(ruleEnable: boolean  | undefined) {
        this['rule_enable'] = ruleEnable;
    }
    public get ruleEnable(): boolean | undefined {
        return this['rule_enable'];
    }
    public withDataclassId(dataclassId: string): PlaybookVersionListEntity {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withTriggerType(triggerType: string): PlaybookVersionListEntity {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withDataobjectCreate(dataobjectCreate: boolean): PlaybookVersionListEntity {
        this['dataobject_create'] = dataobjectCreate;
        return this;
    }
    public set dataobjectCreate(dataobjectCreate: boolean  | undefined) {
        this['dataobject_create'] = dataobjectCreate;
    }
    public get dataobjectCreate(): boolean | undefined {
        return this['dataobject_create'];
    }
    public withDataobjectUpdate(dataobjectUpdate: boolean): PlaybookVersionListEntity {
        this['dataobject_update'] = dataobjectUpdate;
        return this;
    }
    public set dataobjectUpdate(dataobjectUpdate: boolean  | undefined) {
        this['dataobject_update'] = dataobjectUpdate;
    }
    public get dataobjectUpdate(): boolean | undefined {
        return this['dataobject_update'];
    }
    public withDataobjectDelete(dataobjectDelete: boolean): PlaybookVersionListEntity {
        this['dataobject_delete'] = dataobjectDelete;
        return this;
    }
    public set dataobjectDelete(dataobjectDelete: boolean  | undefined) {
        this['dataobject_delete'] = dataobjectDelete;
    }
    public get dataobjectDelete(): boolean | undefined {
        return this['dataobject_delete'];
    }
    public withVersionType(versionType: number): PlaybookVersionListEntity {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: number  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): number | undefined {
        return this['version_type'];
    }
    public withRuleId(ruleId: string): PlaybookVersionListEntity {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withDataclassName(dataclassName: string): PlaybookVersionListEntity {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withApproveName(approveName: string): PlaybookVersionListEntity {
        this['approve_name'] = approveName;
        return this;
    }
    public set approveName(approveName: string  | undefined) {
        this['approve_name'] = approveName;
    }
    public get approveName(): string | undefined {
        return this['approve_name'];
    }
}