import { AgenciesPrimitiveTypeHolder } from './AgenciesPrimitiveTypeHolder';
import { Agency } from './Agency';
import { EnableAutoRollbackPrimitiveTypeHolder } from './EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './EnableDeletionProtectionPrimitiveTypeHolder';
import { StackDescriptionPrimitiveTypeHolder } from './StackDescriptionPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';


export class UpdateStackRequestBody {
    public description?: string;
    private 'stack_id'?: string | undefined;
    private 'enable_deletion_protection'?: boolean | undefined;
    private 'enable_auto_rollback'?: boolean | undefined;
    public agencies?: Array<Agency>;
    public constructor() { 
    }
    public withDescription(description: string): UpdateStackRequestBody {
        this['description'] = description;
        return this;
    }
    public withStackId(stackId: string): UpdateStackRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withEnableDeletionProtection(enableDeletionProtection: boolean): UpdateStackRequestBody {
        this['enable_deletion_protection'] = enableDeletionProtection;
        return this;
    }
    public set enableDeletionProtection(enableDeletionProtection: boolean | undefined) {
        this['enable_deletion_protection'] = enableDeletionProtection;
    }
    public get enableDeletionProtection() {
        return this['enable_deletion_protection'];
    }
    public withEnableAutoRollback(enableAutoRollback: boolean): UpdateStackRequestBody {
        this['enable_auto_rollback'] = enableAutoRollback;
        return this;
    }
    public set enableAutoRollback(enableAutoRollback: boolean | undefined) {
        this['enable_auto_rollback'] = enableAutoRollback;
    }
    public get enableAutoRollback() {
        return this['enable_auto_rollback'];
    }
    public withAgencies(agencies: Array<Agency>): UpdateStackRequestBody {
        this['agencies'] = agencies;
        return this;
    }
}