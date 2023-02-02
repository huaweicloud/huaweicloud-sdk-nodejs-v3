import { Agency } from './Agency';


export class UpdateStackRequestBody {
    private 'stack_id'?: string | undefined;
    public description?: string;
    private 'enable_deletion_protection'?: boolean | undefined;
    private 'enable_auto_rollback'?: boolean | undefined;
    public agencies?: Array<Agency>;
    public constructor() { 
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
    public withDescription(description: string): UpdateStackRequestBody {
        this['description'] = description;
        return this;
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