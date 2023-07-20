

export class EnableAutoRollbackPrimitiveTypeHolder {
    private 'enable_auto_rollback'?: boolean;
    public constructor() { 
    }
    public withEnableAutoRollback(enableAutoRollback: boolean): EnableAutoRollbackPrimitiveTypeHolder {
        this['enable_auto_rollback'] = enableAutoRollback;
        return this;
    }
    public set enableAutoRollback(enableAutoRollback: boolean  | undefined) {
        this['enable_auto_rollback'] = enableAutoRollback;
    }
    public get enableAutoRollback(): boolean | undefined {
        return this['enable_auto_rollback'];
    }
}