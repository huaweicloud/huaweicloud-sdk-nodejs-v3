

export class ChangeClusterReq {
    private 'target_cluster_group_id'?: string;
    private 'target_project_config_id'?: string;
    private 'cloud_storage_assignment_ids'?: Array<string>;
    public constructor(targetClusterGroupId?: string, targetProjectConfigId?: string, cloudStorageAssignmentIds?: Array<string>) { 
        this['target_cluster_group_id'] = targetClusterGroupId;
        this['target_project_config_id'] = targetProjectConfigId;
        this['cloud_storage_assignment_ids'] = cloudStorageAssignmentIds;
    }
    public withTargetClusterGroupId(targetClusterGroupId: string): ChangeClusterReq {
        this['target_cluster_group_id'] = targetClusterGroupId;
        return this;
    }
    public set targetClusterGroupId(targetClusterGroupId: string  | undefined) {
        this['target_cluster_group_id'] = targetClusterGroupId;
    }
    public get targetClusterGroupId(): string | undefined {
        return this['target_cluster_group_id'];
    }
    public withTargetProjectConfigId(targetProjectConfigId: string): ChangeClusterReq {
        this['target_project_config_id'] = targetProjectConfigId;
        return this;
    }
    public set targetProjectConfigId(targetProjectConfigId: string  | undefined) {
        this['target_project_config_id'] = targetProjectConfigId;
    }
    public get targetProjectConfigId(): string | undefined {
        return this['target_project_config_id'];
    }
    public withCloudStorageAssignmentIds(cloudStorageAssignmentIds: Array<string>): ChangeClusterReq {
        this['cloud_storage_assignment_ids'] = cloudStorageAssignmentIds;
        return this;
    }
    public set cloudStorageAssignmentIds(cloudStorageAssignmentIds: Array<string>  | undefined) {
        this['cloud_storage_assignment_ids'] = cloudStorageAssignmentIds;
    }
    public get cloudStorageAssignmentIds(): Array<string> | undefined {
        return this['cloud_storage_assignment_ids'];
    }
}