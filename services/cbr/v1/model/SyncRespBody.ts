

export class SyncRespBody {
    private 'operation_log_id'?: string;
    private 'vault_id'?: string;
    public constructor(operationLogId?: string, vaultId?: string) { 
        this['operation_log_id'] = operationLogId;
        this['vault_id'] = vaultId;
    }
    public withOperationLogId(operationLogId: string): SyncRespBody {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string  | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId(): string | undefined {
        return this['operation_log_id'];
    }
    public withVaultId(vaultId: string): SyncRespBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}