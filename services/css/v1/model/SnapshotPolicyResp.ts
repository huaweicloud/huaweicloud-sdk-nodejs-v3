

export class SnapshotPolicyResp {
    public backupEnable?: boolean;
    public bakPeriod?: string;
    public bakFrequency?: string;
    public bakKeepDay?: number;
    public constructor() { 
    }
    public withBackupEnable(backupEnable: boolean): SnapshotPolicyResp {
        this['backupEnable'] = backupEnable;
        return this;
    }
    public withBakPeriod(bakPeriod: string): SnapshotPolicyResp {
        this['bakPeriod'] = bakPeriod;
        return this;
    }
    public withBakFrequency(bakFrequency: string): SnapshotPolicyResp {
        this['bakFrequency'] = bakFrequency;
        return this;
    }
    public withBakKeepDay(bakKeepDay: number): SnapshotPolicyResp {
        this['bakKeepDay'] = bakKeepDay;
        return this;
    }
}