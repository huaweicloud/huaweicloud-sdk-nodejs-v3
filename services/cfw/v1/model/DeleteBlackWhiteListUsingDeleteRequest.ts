

export class DeleteBlackWhiteListUsingDeleteRequest {
    private 'project_id'?: string;
    private 'list_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, listId?: string) { 
        this['project_id'] = projectId;
        this['list_id'] = listId;
    }
    public withProjectId(projectId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withListId(listId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string  | undefined) {
        this['list_id'] = listId;
    }
    public get listId(): string | undefined {
        return this['list_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}