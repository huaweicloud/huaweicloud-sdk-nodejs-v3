

export class ListPoliciesRequest {
    private 'operation_type'?: ListPoliciesRequestOperationTypeEnum | string;
    private 'vault_id'?: string;
    public constructor() { 
    }
    public withOperationType(operationType: ListPoliciesRequestOperationTypeEnum | string): ListPoliciesRequest {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: ListPoliciesRequestOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): ListPoliciesRequestOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withVaultId(vaultId: string): ListPoliciesRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListPoliciesRequestOperationTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
