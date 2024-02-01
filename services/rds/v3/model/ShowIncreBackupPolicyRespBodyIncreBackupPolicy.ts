

export class ShowIncreBackupPolicyRespBodyIncreBackupPolicy {
    public interval?: number;
    public constructor() { 
    }
    public withInterval(interval: number): ShowIncreBackupPolicyRespBodyIncreBackupPolicy {
        this['interval'] = interval;
        return this;
    }
}