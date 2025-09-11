

export class RiskBackupTemplate {
    public cycle?: string;
    private 'db_id'?: string;
    public status?: number;
    public constructor(dbId?: string, status?: number) { 
        this['db_id'] = dbId;
        this['status'] = status;
    }
    public withCycle(cycle: string): RiskBackupTemplate {
        this['cycle'] = cycle;
        return this;
    }
    public withDbId(dbId: string): RiskBackupTemplate {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withStatus(status: number): RiskBackupTemplate {
        this['status'] = status;
        return this;
    }
}