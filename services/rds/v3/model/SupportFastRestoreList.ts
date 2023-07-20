

export class SupportFastRestoreList {
    private 'instance_id'?: string;
    private 'is_support_fast_table_restore'?: boolean;
    private 'is_support_fast_database_restore'?: boolean;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): SupportFastRestoreList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIsSupportFastTableRestore(isSupportFastTableRestore: boolean): SupportFastRestoreList {
        this['is_support_fast_table_restore'] = isSupportFastTableRestore;
        return this;
    }
    public set isSupportFastTableRestore(isSupportFastTableRestore: boolean  | undefined) {
        this['is_support_fast_table_restore'] = isSupportFastTableRestore;
    }
    public get isSupportFastTableRestore(): boolean | undefined {
        return this['is_support_fast_table_restore'];
    }
    public withIsSupportFastDatabaseRestore(isSupportFastDatabaseRestore: boolean): SupportFastRestoreList {
        this['is_support_fast_database_restore'] = isSupportFastDatabaseRestore;
        return this;
    }
    public set isSupportFastDatabaseRestore(isSupportFastDatabaseRestore: boolean  | undefined) {
        this['is_support_fast_database_restore'] = isSupportFastDatabaseRestore;
    }
    public get isSupportFastDatabaseRestore(): boolean | undefined {
        return this['is_support_fast_database_restore'];
    }
}