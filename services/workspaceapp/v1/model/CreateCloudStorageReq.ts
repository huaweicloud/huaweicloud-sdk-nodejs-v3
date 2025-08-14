

export class CreateCloudStorageReq {
    private 'project_config_ids'?: Array<string>;
    public constructor(projectConfigIds?: Array<string>) { 
        this['project_config_ids'] = projectConfigIds;
    }
    public withProjectConfigIds(projectConfigIds: Array<string>): CreateCloudStorageReq {
        this['project_config_ids'] = projectConfigIds;
        return this;
    }
    public set projectConfigIds(projectConfigIds: Array<string>  | undefined) {
        this['project_config_ids'] = projectConfigIds;
    }
    public get projectConfigIds(): Array<string> | undefined {
        return this['project_config_ids'];
    }
}