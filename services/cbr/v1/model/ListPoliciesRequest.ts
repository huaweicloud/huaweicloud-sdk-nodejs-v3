

export class ListPoliciesRequest {
    private 'operation_type'?: ListPoliciesRequestOperationTypeEnum | undefined;
    private 'vault_id'?: string | undefined;
    public constructor() { 
    }
    public withOperationType(operationType: ListPoliciesRequestOperationTypeEnum): ListPoliciesRequest {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: ListPoliciesRequestOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withVaultId(vaultId: string): ListPoliciesRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListPoliciesRequestOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
