import { ProjectConfigClusterGroupIdEntity } from './ProjectConfigClusterGroupIdEntity';


export class CreateCloudStorageReq {
    private 'project_config_cluster_group_id_list'?: Array<ProjectConfigClusterGroupIdEntity>;
    public constructor(projectConfigClusterGroupIdList?: Array<ProjectConfigClusterGroupIdEntity>) { 
        this['project_config_cluster_group_id_list'] = projectConfigClusterGroupIdList;
    }
    public withProjectConfigClusterGroupIdList(projectConfigClusterGroupIdList: Array<ProjectConfigClusterGroupIdEntity>): CreateCloudStorageReq {
        this['project_config_cluster_group_id_list'] = projectConfigClusterGroupIdList;
        return this;
    }
    public set projectConfigClusterGroupIdList(projectConfigClusterGroupIdList: Array<ProjectConfigClusterGroupIdEntity>  | undefined) {
        this['project_config_cluster_group_id_list'] = projectConfigClusterGroupIdList;
    }
    public get projectConfigClusterGroupIdList(): Array<ProjectConfigClusterGroupIdEntity> | undefined {
        return this['project_config_cluster_group_id_list'];
    }
}