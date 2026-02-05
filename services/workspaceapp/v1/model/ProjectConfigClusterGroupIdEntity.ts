

export class ProjectConfigClusterGroupIdEntity {
    private 'cluster_group_id'?: string;
    private 'project_config_id'?: string;
    public constructor() { 
    }
    public withClusterGroupId(clusterGroupId: string): ProjectConfigClusterGroupIdEntity {
        this['cluster_group_id'] = clusterGroupId;
        return this;
    }
    public set clusterGroupId(clusterGroupId: string  | undefined) {
        this['cluster_group_id'] = clusterGroupId;
    }
    public get clusterGroupId(): string | undefined {
        return this['cluster_group_id'];
    }
    public withProjectConfigId(projectConfigId: string): ProjectConfigClusterGroupIdEntity {
        this['project_config_id'] = projectConfigId;
        return this;
    }
    public set projectConfigId(projectConfigId: string  | undefined) {
        this['project_config_id'] = projectConfigId;
    }
    public get projectConfigId(): string | undefined {
        return this['project_config_id'];
    }
}