

export class DeleteAddressItemUsingDeleteRequest {
    private 'item_id': string | undefined;
    private 'project_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(itemId?: any, projectId?: any) { 
        this['item_id'] = itemId;
        this['project_id'] = projectId;
    }
    public withItemId(itemId: string): DeleteAddressItemUsingDeleteRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId() {
        return this['item_id'];
    }
    public withProjectId(projectId: string): DeleteAddressItemUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAddressItemUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteAddressItemUsingDeleteRequest {
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