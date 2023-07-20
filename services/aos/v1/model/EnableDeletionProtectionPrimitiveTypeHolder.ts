

export class EnableDeletionProtectionPrimitiveTypeHolder {
    private 'enable_deletion_protection'?: boolean;
    public constructor() { 
    }
    public withEnableDeletionProtection(enableDeletionProtection: boolean): EnableDeletionProtectionPrimitiveTypeHolder {
        this['enable_deletion_protection'] = enableDeletionProtection;
        return this;
    }
    public set enableDeletionProtection(enableDeletionProtection: boolean  | undefined) {
        this['enable_deletion_protection'] = enableDeletionProtection;
    }
    public get enableDeletionProtection(): boolean | undefined {
        return this['enable_deletion_protection'];
    }
}