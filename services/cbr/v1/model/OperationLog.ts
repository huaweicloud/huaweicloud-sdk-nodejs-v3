import { OpErrorInfo } from './OpErrorInfo';
import { OpExtraInfo } from './OpExtraInfo';


export class OperationLog {
    private 'checkpoint_id'?: string;
    private 'created_at'?: string;
    private 'ended_at'?: string;
    private 'error_info'?: OpErrorInfo;
    private 'extra_info'?: OpExtraInfo;
    public id?: string;
    private 'operation_type'?: OperationLogOperationTypeEnum | string;
    private 'policy_id'?: string;
    private 'project_id'?: string;
    private 'provider_id'?: string;
    private 'started_at'?: string;
    public status?: OperationLogStatusEnum | string;
    private 'updated_at'?: string;
    private 'vault_id'?: string;
    private 'vault_name'?: string;
    public constructor(createdAt?: string, errorInfo?: OpErrorInfo, id?: string, projectId?: string, startedAt?: string, status?: string, updatedAt?: string) { 
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
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withCreatedAt(createdAt: string): OperationLog {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withEndedAt(endedAt: string): OperationLog {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: string  | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt(): string | undefined {
        return this['ended_at'];
    }
    public withErrorInfo(errorInfo: OpErrorInfo): OperationLog {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: OpErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): OpErrorInfo | undefined {
        return this['error_info'];
    }
    public withExtraInfo(extraInfo: OpExtraInfo): OperationLog {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: OpExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): OpExtraInfo | undefined {
        return this['extra_info'];
    }
    public withId(id: string): OperationLog {
        this['id'] = id;
        return this;
    }
    public withOperationType(operationType: OperationLogOperationTypeEnum | string): OperationLog {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: OperationLogOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): OperationLogOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withPolicyId(policyId: string): OperationLog {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withProjectId(projectId: string): OperationLog {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProviderId(providerId: string): OperationLog {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withStartedAt(startedAt: string): OperationLog {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withStatus(status: OperationLogStatusEnum | string): OperationLog {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): OperationLog {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVaultId(vaultId: string): OperationLog {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withVaultName(vaultName: string): OperationLog {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string  | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName(): string | undefined {
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
