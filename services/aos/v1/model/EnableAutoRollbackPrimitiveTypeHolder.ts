

export class EnableAutoRollbackPrimitiveTypeHolder {
    private 'enable_auto_rollback'?: boolean | undefined;
    public constructor() { 
    }
    public withEnableAutoRollback(enableAutoRollback: boolean): EnableAutoRollbackPrimitiveTypeHolder {
        this['enable_auto_rollback'] = enableAutoRollback;
        return this;
    }
    public set enableAutoRollback(enableAutoRollback: boolean | undefined) {
        this['enable_auto_rollback'] = enableAutoRollback;
    }
    public get enableAutoRollback() {
        return this['enable_auto_rollback'];
    }
}