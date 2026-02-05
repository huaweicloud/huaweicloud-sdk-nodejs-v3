

export class ProjectConfig {
    private 'project_config_id'?: string;
    private 'project_config_name'?: string;
    private 'storage_quota'?: number;
    private 'is_relevance'?: boolean;
    private 'cluster_group_id'?: string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withProjectConfigId(projectConfigId: string): ProjectConfig {
        this['project_config_id'] = projectConfigId;
        return this;
    }
    public set projectConfigId(projectConfigId: string  | undefined) {
        this['project_config_id'] = projectConfigId;
    }
    public get projectConfigId(): string | undefined {
        return this['project_config_id'];
    }
    public withProjectConfigName(projectConfigName: string): ProjectConfig {
        this['project_config_name'] = projectConfigName;
        return this;
    }
    public set projectConfigName(projectConfigName: string  | undefined) {
        this['project_config_name'] = projectConfigName;
    }
    public get projectConfigName(): string | undefined {
        return this['project_config_name'];
    }
    public withStorageQuota(storageQuota: number): ProjectConfig {
        this['storage_quota'] = storageQuota;
        return this;
    }
    public set storageQuota(storageQuota: number  | undefined) {
        this['storage_quota'] = storageQuota;
    }
    public get storageQuota(): number | undefined {
        return this['storage_quota'];
    }
    public withIsRelevance(isRelevance: boolean): ProjectConfig {
        this['is_relevance'] = isRelevance;
        return this;
    }
    public set isRelevance(isRelevance: boolean  | undefined) {
        this['is_relevance'] = isRelevance;
    }
    public get isRelevance(): boolean | undefined {
        return this['is_relevance'];
    }
    public withClusterGroupId(clusterGroupId: string): ProjectConfig {
        this['cluster_group_id'] = clusterGroupId;
        return this;
    }
    public set clusterGroupId(clusterGroupId: string  | undefined) {
        this['cluster_group_id'] = clusterGroupId;
    }
    public get clusterGroupId(): string | undefined {
        return this['cluster_group_id'];
    }
    public withCreateTime(createTime: Date): ProjectConfig {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}