

export class ListAssociateRegistriesRequest {
    private 'enterprise_project_id'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'task_id'?: string;
    private 'sync_status'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAssociateRegistriesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegistryName(registryName: string): ListAssociateRegistriesRequest {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): ListAssociateRegistriesRequest {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withOffset(offset: number): ListAssociateRegistriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAssociateRegistriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskId(taskId: string): ListAssociateRegistriesRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSyncStatus(syncStatus: string): ListAssociateRegistriesRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): string | undefined {
        return this['sync_status'];
    }
}