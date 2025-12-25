

export class DpeMappingFieldDetail {
    public id?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    private 'mapping_id'?: string;
    private 'mapper_id'?: string;
    private 'default_value'?: string;
    private 'target_key'?: string;
    public expression?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): DpeMappingFieldDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DpeMappingFieldDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): DpeMappingFieldDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): DpeMappingFieldDetail {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withMappingId(mappingId: string): DpeMappingFieldDetail {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withMapperId(mapperId: string): DpeMappingFieldDetail {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
    public withDefaultValue(defaultValue: string): DpeMappingFieldDetail {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withTargetKey(targetKey: string): DpeMappingFieldDetail {
        this['target_key'] = targetKey;
        return this;
    }
    public set targetKey(targetKey: string  | undefined) {
        this['target_key'] = targetKey;
    }
    public get targetKey(): string | undefined {
        return this['target_key'];
    }
    public withExpression(expression: string): DpeMappingFieldDetail {
        this['expression'] = expression;
        return this;
    }
    public withCreateTime(createTime: string): DpeMappingFieldDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DpeMappingFieldDetail {
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