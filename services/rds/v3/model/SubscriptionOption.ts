

export class SubscriptionOption {
    private 'independent_agent'?: boolean;
    private 'snapshot_always_available'?: boolean;
    private 'replicate_ddl'?: boolean;
    private 'allow_initialize_from_backup'?: boolean;
    public constructor() { 
    }
    public withIndependentAgent(independentAgent: boolean): SubscriptionOption {
        this['independent_agent'] = independentAgent;
        return this;
    }
    public set independentAgent(independentAgent: boolean  | undefined) {
        this['independent_agent'] = independentAgent;
    }
    public get independentAgent(): boolean | undefined {
        return this['independent_agent'];
    }
    public withSnapshotAlwaysAvailable(snapshotAlwaysAvailable: boolean): SubscriptionOption {
        this['snapshot_always_available'] = snapshotAlwaysAvailable;
        return this;
    }
    public set snapshotAlwaysAvailable(snapshotAlwaysAvailable: boolean  | undefined) {
        this['snapshot_always_available'] = snapshotAlwaysAvailable;
    }
    public get snapshotAlwaysAvailable(): boolean | undefined {
        return this['snapshot_always_available'];
    }
    public withReplicateDdl(replicateDdl: boolean): SubscriptionOption {
        this['replicate_ddl'] = replicateDdl;
        return this;
    }
    public set replicateDdl(replicateDdl: boolean  | undefined) {
        this['replicate_ddl'] = replicateDdl;
    }
    public get replicateDdl(): boolean | undefined {
        return this['replicate_ddl'];
    }
    public withAllowInitializeFromBackup(allowInitializeFromBackup: boolean): SubscriptionOption {
        this['allow_initialize_from_backup'] = allowInitializeFromBackup;
        return this;
    }
    public set allowInitializeFromBackup(allowInitializeFromBackup: boolean  | undefined) {
        this['allow_initialize_from_backup'] = allowInitializeFromBackup;
    }
    public get allowInitializeFromBackup(): boolean | undefined {
        return this['allow_initialize_from_backup'];
    }
}