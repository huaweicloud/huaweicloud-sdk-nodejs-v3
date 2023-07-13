import { OpErrorInfo } from './OpErrorInfo';
import { OpExtraInfo } from './OpExtraInfo';


export class OperationLog {
    private 'checkpoint_id'?: string | undefined;
    private 'created_at': string | undefined;
    private 'ended_at'?: string | undefined;
    private 'error_info': OpErrorInfo | undefined;
    private 'extra_info'?: OpExtraInfo | undefined;
    public id: string;
    private 'operation_type'?: OperationLogOperationTypeEnum | undefined;
    private 'policy_id'?: string | undefined;
    private 'project_id': string | undefined;
    private 'provider_id'?: string | undefined;
    private 'started_at': string | undefined;
    public status: OperationLogStatusEnum;
    private 'updated_at': string | undefined;
    private 'vault_id'?: string | undefined;
    private 'vault_name'?: string | undefined;
    public constructor(createdAt?: any, errorInfo?: any, id?: any, projectId?: any, startedAt?: any, status?: any, updatedAt?: any) { 
        this['created_at'] = createdAt;
        this['error_info'] = errorInfo;
        this['id'] = id;
        this['project_id'] = projectId;
        this['started_at'] = startedAt;
        this['status'] = status;
        this['updated_at'] = updatedAt;
    }
    public withCheckpointId(checkpointId: string): OperationLog {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId() {
        return this['checkpoint_id'];
    }
    public withCreatedAt(createdAt: string): OperationLog {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withEndedAt(endedAt: string): OperationLog {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: string | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt() {
        return this['ended_at'];
    }
    public withErrorInfo(errorInfo: OpErrorInfo): OperationLog {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: OpErrorInfo | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo() {
        return this['error_info'];
    }
    public withExtraInfo(extraInfo: OpExtraInfo): OperationLog {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: OpExtraInfo | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
    public withId(id: string): OperationLog {
        this['id'] = id;
        return this;
    }
    public withOperationType(operationType: OperationLogOperationTypeEnum): OperationLog {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: OperationLogOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withPolicyId(policyId: string): OperationLog {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withProjectId(projectId: string): OperationLog {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProviderId(providerId: string): OperationLog {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withStartedAt(startedAt: string): OperationLog {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt() {
        return this['started_at'];
    }
    public withStatus(status: OperationLogStatusEnum): OperationLog {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): OperationLog {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVaultId(vaultId: string): OperationLog {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withVaultName(vaultName: string): OperationLog {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName() {
        return this['vault_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperationLogOperationTypeEnum {
    BACKUP = 'backup',
    COPY = 'copy',
    REPLICATION = 'replication',
    RESTORE = 'restore',
    DELETE = 'delete',
    SYNC = 'sync',
    VAULT_DELETE = 'vault_delete',
    REMOVE_RESOURCE = 'remove_resource'
}
/**
    * @export
    * @enum {string}
    */
export enum OperationLogStatusEnum {
    SUCCESS = 'success',
    SKIPPED = 'skipped',
    FAILED = 'failed',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    WAITING = 'waiting'
}
