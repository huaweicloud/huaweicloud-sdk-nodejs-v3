

export class DeleteGaussMySqlInstanceRequestBody {
    private 'backup_retention_strategy'?: DeleteGaussMySqlInstanceRequestBodyBackupRetentionStrategyEnum | string;
    public constructor() { 
    }
    public withBackupRetentionStrategy(backupRetentionStrategy: DeleteGaussMySqlInstanceRequestBodyBackupRetentionStrategyEnum | string): DeleteGaussMySqlInstanceRequestBody {
        this['backup_retention_strategy'] = backupRetentionStrategy;
        return this;
    }
    public set backupRetentionStrategy(backupRetentionStrategy: DeleteGaussMySqlInstanceRequestBodyBackupRetentionStrategyEnum | string  | undefined) {
        this['backup_retention_strategy'] = backupRetentionStrategy;
    }
    public get backupRetentionStrategy(): DeleteGaussMySqlInstanceRequestBodyBackupRetentionStrategyEnum | string | undefined {
        return this['backup_retention_strategy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteGaussMySqlInstanceRequestBodyBackupRetentionStrategyEnum {
    RETAIN_ALL = 'retain_all',
    RETAIN_LAST = 'retain_last',
    DELETE_ALL = 'delete_all'
}
