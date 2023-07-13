

export class SyncRespBody {
    private 'operation_log_id': string | undefined;
    private 'vault_id': string | undefined;
    public constructor(operationLogId?: any, vaultId?: any) { 
        this['operation_log_id'] = operationLogId;
        this['vault_id'] = vaultId;
    }
    public withOperationLogId(operationLogId: string): SyncRespBody {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId() {
        return this['operation_log_id'];
    }
    public withVaultId(vaultId: string): SyncRespBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}