

export class ApplicationView {
    private 'component_count'?: number;
    private 'unified_model'?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    public creator?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withComponentCount(componentCount: number): ApplicationView {
        this['component_count'] = componentCount;
        return this;
    }
    public set componentCount(componentCount: number  | undefined) {
        this['component_count'] = componentCount;
    }
    public get componentCount(): number | undefined {
        return this['component_count'];
    }
    public withUnifiedModel(unifiedModel: string): ApplicationView {
        this['unified_model'] = unifiedModel;
        return this;
    }
    public set unifiedModel(unifiedModel: string  | undefined) {
        this['unified_model'] = unifiedModel;
    }
    public get unifiedModel(): string | undefined {
        return this['unified_model'];
    }
    public withId(id: string): ApplicationView {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationView {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationView {
        this['description'] = description;
        return this;
    }
    public withCreator(creator: string): ApplicationView {
        this['creator'] = creator;
        return this;
    }
    public withProjectId(projectId: string): ApplicationView {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplicationView {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): ApplicationView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ApplicationView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}