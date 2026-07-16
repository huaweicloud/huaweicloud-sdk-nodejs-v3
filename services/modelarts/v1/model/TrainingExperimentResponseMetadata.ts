

export class TrainingExperimentResponseMetadata {
    public name?: string;
    public description?: string;
    private 'workspace_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public id?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): TrainingExperimentResponseMetadata {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TrainingExperimentResponseMetadata {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): TrainingExperimentResponseMetadata {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCreateTime(createTime: number): TrainingExperimentResponseMetadata {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): TrainingExperimentResponseMetadata {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withId(id: string): TrainingExperimentResponseMetadata {
        this['id'] = id;
        return this;
    }
}