

export class StartLogAutoBackupPolicyReq {
    public period?: string;
    public constructor(period?: string) { 
        this['period'] = period;
    }
    public withPeriod(period: string): StartLogAutoBackupPolicyReq {
        this['period'] = period;
        return this;
    }
}