

export class TransferPolicy {
    private 'setting_id'?: string;
    private 'instance_id'?: string;
    public period?: string;
    private 'backup_type'?: string;
    public destination?: string;
    public prefix?: string;
    public constructor() { 
    }
    public withSettingId(settingId: string): TransferPolicy {
        this['setting_id'] = settingId;
        return this;
    }
    public set settingId(settingId: string  | undefined) {
        this['setting_id'] = settingId;
    }
    public get settingId(): string | undefined {
        return this['setting_id'];
    }
    public withInstanceId(instanceId: string): TransferPolicy {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPeriod(period: string): TransferPolicy {
        this['period'] = period;
        return this;
    }
    public withBackupType(backupType: string): TransferPolicy {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withDestination(destination: string): TransferPolicy {
        this['destination'] = destination;
        return this;
    }
    public withPrefix(prefix: string): TransferPolicy {
        this['prefix'] = prefix;
        return this;
    }
}