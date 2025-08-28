

export class ChangeSqlSwitchBody {
    public type?: string;
    public status?: number;
    private 'datastore_type'?: string;
    private 'retention_days'?: number;
    public constructor(type?: string, status?: number, datastoreType?: string) { 
        this['type'] = type;
        this['status'] = status;
        this['datastore_type'] = datastoreType;
    }
    public withType(type: string): ChangeSqlSwitchBody {
        this['type'] = type;
        return this;
    }
    public withStatus(status: number): ChangeSqlSwitchBody {
        this['status'] = status;
        return this;
    }
    public withDatastoreType(datastoreType: string): ChangeSqlSwitchBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withRetentionDays(retentionDays: number): ChangeSqlSwitchBody {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
}