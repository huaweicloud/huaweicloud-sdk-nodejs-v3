

export class DeleteServiceItemUsingDeleteRequest {
    private 'project_id': string | undefined;
    private 'item_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, itemId?: any) { 
        this['project_id'] = projectId;
        this['item_id'] = itemId;
    }
    public withProjectId(projectId: string): DeleteServiceItemUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withItemId(itemId: string): DeleteServiceItemUsingDeleteRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId() {
        return this['item_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteServiceItemUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteServiceItemUsingDeleteRequest {
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