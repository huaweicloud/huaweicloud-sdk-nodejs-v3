

export class DeleteBlackWhiteListUsingDeleteRequest {
    private 'project_id': string | undefined;
    private 'list_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, listId?: any) { 
        this['project_id'] = projectId;
        this['list_id'] = listId;
    }
    public withProjectId(projectId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withListId(listId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string | undefined) {
        this['list_id'] = listId;
    }
    public get listId() {
        return this['list_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
}