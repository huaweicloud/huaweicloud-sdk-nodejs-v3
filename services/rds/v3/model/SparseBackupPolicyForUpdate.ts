

export class SparseBackupPolicyForUpdate {
    public id?: string;
    public period?: string;
    private 'keep_days'?: number;
    private 'reserve_backups'?: boolean;
    public constructor() { 
    }
    public withId(id: string): SparseBackupPolicyForUpdate {
        this['id'] = id;
        return this;
    }
    public withPeriod(period: string): SparseBackupPolicyForUpdate {
        this['period'] = period;
        return this;
    }
    public withKeepDays(keepDays: number): SparseBackupPolicyForUpdate {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withReserveBackups(reserveBackups: boolean): SparseBackupPolicyForUpdate {
        this['reserve_backups'] = reserveBackups;
        return this;
    }
    public set reserveBackups(reserveBackups: boolean  | undefined) {
        this['reserve_backups'] = reserveBackups;
    }
    public get reserveBackups(): boolean | undefined {
        return this['reserve_backups'];
    }
}