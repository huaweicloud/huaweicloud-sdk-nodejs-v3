

export class ListOpLogsRequest {
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    private 'operation_type'?: ListOpLogsRequestOperationTypeEnum | undefined;
    private 'provider_id'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'start_time'?: string | undefined;
    public status?: ListOpLogsRequestStatusEnum;
    private 'vault_id'?: string | undefined;
    private 'vault_name'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withEndTime(endTime: string): ListOpLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListOpLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOpLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOperationType(operationType: ListOpLogsRequestOperationTypeEnum): ListOpLogsRequest {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: ListOpLogsRequestOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withProviderId(providerId: string): ListOpLogsRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withResourceId(resourceId: string): ListOpLogsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListOpLogsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withStartTime(startTime: string): ListOpLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStatus(status: ListOpLogsRequestStatusEnum): ListOpLogsRequest {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): ListOpLogsRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withVaultName(vaultName: string): ListOpLogsRequest {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName() {
        return this['vault_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListOpLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListOpLogsRequestOperationTypeEnum {
    BACKUP = 'backup',
    COPY = 'copy',
    REPLICATION = 'replication',
    DELETE = 'delete',
    RESTORE = 'restore',
    VAULT_DELETE = 'vault_delete',
    REMOVE_RESOURCE = 'remove_resource',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ListOpLogsRequestStatusEnum {
    SUCCESS = 'success',
    SKIPPED = 'skipped',
    FAILED = 'failed',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    WAITING = 'waiting'
}
